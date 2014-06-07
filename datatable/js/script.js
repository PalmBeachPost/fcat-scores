$(document).ready( function () {
	var jsondata;
	var coldef1= [
<<<<<<< HEAD
        { data: 'name'},
        { data: 'm3', render: scoreRender },
    	{ data: 'm4', render: scoreRender },
        { data: 'm5', render: scoreRender },
        { data: 'r3', render: scoreRender },
        { data: 'r4', render: scoreRender },
        { data: 'r5', render: scoreRender },
        { data: 'w4', render: scoreRender }
    ];

    var coldef2= [
        { data: 'name'},
        { data: 'm3', render: scoreRender },
    	{ data: 'm4', render: scoreRender },
        { data: 'm5', render: scoreRender }
    ];
=======
		        { data: 'name'},
		     	{ data: 's5', render: scoreRender },
		        { data: 'm3', render: scoreRender },
	        	{ data: 'm4', render: scoreRender },
		        { data: 'm5', render: scoreRender },
		        { data: 'r3', render: scoreRender },
		        { data: 'r4', render: scoreRender },
		        { data: 'r5', render: scoreRender },
		        { data: 'w4', render: scoreRender }
		    ];
	var coldef2= [
		        { data: 'name'},
		        { data: 'm3', render: scoreRender },
	        	{ data: 'm4', render: scoreRender },
		        { data: 'm5', render: scoreRender }		        
		    ];

>>>>>>> camelcase


$.getJSON("./js/data/elementary.json", function(data) {
jsondata = data;
nukeAndCreateTable($('#elemTable'), data, coldef1);
nukeAndCreateTable($('#midTable'), data, coldef2);
});

$('#brs').on( 'click', function() {
	nukeAndCreateTable(
		$('#elemTable'),
		_.reject(jsondata, function(row){ return row.m5 == null}),
		 coldef1);
  });

function scoreRender(data, type) {
	if(type === 'display')
	{
	  if(data ==-1) { return 'N/A'; }
	  if( data == null) { return  '-'}
	}
 	return data;
}

function nukeAndCreateTable(table, data, coldef) {
	table.DataTable(
	{
		scrollY: 560,
		paging: true,
		data: data, //_.reject(data, function(row){ return row.m5 == null} ),
	    columns: coldef,
	    destroy:true
	 });
}
});