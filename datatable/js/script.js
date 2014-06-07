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

function scoreRender(data, type) {
	if(type === 'display')
	{
	  if(data == null) { return '-'; }
	  if( data == -1) { return  '*'}
	}
 	return data;
}

function nukeAndCreateTable(table, data, coldef) {
	table.DataTable(
	{
		paging: true,
		info: false,
		dom: 'ftp',
		pageLength:20,
		oLanguage: {  sSearch: "Type school name to search: "},
		data: data,
	    columns: coldef,
	    destroy:true
	 });
}
});