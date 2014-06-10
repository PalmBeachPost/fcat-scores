$(document).ready( function () {

	// Column definitions for the three tables
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

	//Load the school lists and create table from it
	//TODO: add error checks.
	$.getJSON("./js/data/elementary.json", function(data) {	
		nukeAndCreateTable($('#elemTable'), data, elemCol);		
	});

	$.getJSON("./js/data/middle.json", function(data) {
		nukeAndCreateTable($('#midTable'), data, middleColdef);		
	});

	$.getJSON("./js/data/high.json", function(data) {
		nukeAndCreateTable($('#highTable'), data, highColdef);

	// this shouldnt be here ideally. putting it here to make sure it runs after the last table is rendered
	$('.helptxt label').append('  or click on the column names to sort.');
	});

	pymChild = new pym.Child();
});

function scoreRender(data, type) {
	if(type === 'display')
	{
	  if(data == null) { return '-'; }
	  if( data == -1) { return  '*'; }
	}
 	return data;
}

function nukeAndCreateTable(table, data, coldef) {
	table.DataTable(
	{
		paging: true,
		info: false,
		dom: '<"helptxt"f>tp',
		pageLength:20,
		oLanguage: {  sSearch: "Type school name to search: "},		
		data: data,
	    columns: coldef,
	    destroy:true,
	    aoColumnDefs: [
     	 { "asSorting": [ "desc", "asc"], "aTargets": [ "_all"] }
    ]
	 });

	pymChild.sendHeightToParent();
}