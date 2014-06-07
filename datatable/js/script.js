$(document).ready( function () {
	var elemData, middleData;
	var elemCol= [
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
	var middleColdef= [
		        { data: 'name'},		        
		        { data: 's8', render: scoreRender },
		        { data: 'm6', render: scoreRender },
	        	{ data: 'm7', render: scoreRender },
		        { data: 'm8', render: scoreRender },		        
		        { data: 'r6', render: scoreRender },		        
		        { data: 'r7', render: scoreRender },		        
		        { data: 'r8', render: scoreRender },		        
		        { data: 'w8', render: scoreRender }	        
		    ];
	var highColdef= [
		        { data: 'name'},		        
		        { data: 'r9', render: scoreRender },
		        { data: 'r10', render: scoreRender },
	        	{ data: 'w10', render: scoreRender }     
		    ];

$.getJSON("./js/data/elementary.json", function(data) {
elemData = data;
nukeAndCreateTable($('#elemTable'), data, elemCol);
});

$.getJSON("./js/data/middle.json", function(data) {
middleData = data;
nukeAndCreateTable($('#midTable'), data, middleColdef);
});

$.getJSON("./js/data/high.json", function(data) {
middleData = data;
nukeAndCreateTable($('#highTable'), data, highColdef);
});

/*$('#brs').on( 'click', function() {
	nukeAndCreateTable(
		$('#elemTable'),
		_.reject(elemData, function(row){ return row.m5 == null}),
		 elemCol);
  });
*/
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
		lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
		data: data, //_.reject(data, function(row){ return row.m5 == null} ),
	    columns: coldef,
	    destroy:true
	 });
}
});