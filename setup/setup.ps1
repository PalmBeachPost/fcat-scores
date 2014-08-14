param(
    $u ='postgres',
    $p = 5432,
    $db = 'schoolscores',
    $prompt = 0
    )

# Confirm intent
if($prompt -eq 1)
{
    $cont = read-host "This is will delete $db and all its contents. Do you want to continue?(y/n)"
    if ($cont -ne 'y')
    {
        exit
    }
}

# Fesh start
PSQL -U $u -h localhost -p $p -w -c "drop database if exists $db"
CREATEDB -U $u $db

# create tables
PSQL -U $u -h localhost -p $p -w -d $db -f ./sql/createTables.sql

#get cleaned data CSVs and insert into tables
get-childitem ..\data\cleandata\*.csv -File -Recurse | foreach {
  write-host "processing $_ " 
  $folder = $_.fullname
  $startingLetter = $_.name.ToLower()[0]
  PSQL -U $u -h localhost -p $p -w -d $db -v file="'$folder'" -v subject="'$startingLetter'" -f ./sql/importData.sql
}

