$(document).ready( function () {
	var jsondata;
	var coldef1= [
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


$.getJSON("./js/data/elementary.json", function(data) {
jsondata = data;
createTable($('#elemTable'), data, coldef1);
});

$('#brs').on( 'click', function() {
	createTable(
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

function createTable(table, data, coldef) {
	table.DataTable(
	{
		scrollY: 560,
		paging: true,
		data: data, //_.reject(data, function(row){ return row.m5 == null} ),
	    columns: coldef1,
	    destroy:true
	 });
}
});