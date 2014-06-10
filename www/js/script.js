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
		setAvgs($('#elemTable'),elemCols)
	});

	$.getJSON("./js/data/middle.json", function(data) {
		nukeAndCreateTable($('#midTable'), data, middleColdef);
		setAvgs($('#midTable'),midCols)
	});

	$.getJSON("./js/data/high.json", function(data) {
		nukeAndCreateTable($('#highTable'), data, highColdef);
		setAvgs($('#highTable'),highCols)

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
function updateColors(table, coldef){
	selector = table.selector;
	$(table.selector+' tbody tr').each(function(index) {

		for (i = 1; i < coldef.length; i++) {
			$td=$(this).find("td").eq(i);
    		var score = $td.html(); 
    		
    		if(score == "*" | score =="-")
    			continue;

    		var avg = avgs[coldef[i].data];
    		var diff = score-avg;

    		if(diff<0)
    		{
    			$td.css({color:'red'})
    		}
    		if(diff>0)
    		{
    			$td.css({color:'green'})
    		}
    		if(diff==0)
    		{
    			$td.css({color:'yellow'})
    		}
    	}
    });	
}

function setAvgs(table, coldef)
{
	for(index =0; index < coldef.length; index++)
	{
		var currCell =table.DataTable().column(index+1).nodes().to$();
		var subject= coldef[index];
		var avg = avgs[subject];
		table.DataTable().column(index+1).nodes().to$().attr('avg',avgs[subject]);		
		//table.DataTable().column(index+1).nodes().to$().attr('avg',avgs[data]);		
	}
	colorOnScale(table.DataTable());
}

function colorOnScale(table){
	
	table.cells().eq(0).each( function ( cellIdx, i ) {
    var cell = table.cell( cellIdx );
 	//var cells = table.DataTable().cells().nodes();
	/*for (var cell in cells)
	{*/

		var val = cell.data();
		/*if(cellIdx.column == 0)
		{
			return;
		}*/
		if(isNaN(val))
		{
			$(cell.node()).css('background-color', 'whitesmoke');
			return;
		}

		var avg = $(cell.node()).attr('avg');
		
		var diff = val-avg;
		if((val==null)||(val==-1))
		{
			return;
		}
		var r =255,g=255,b=0;

		//scale red from 255 to 0 for vals from avg to 100
		if(diff>0)
		{
			r = Math.floor(255-(255*diff)/(100-avg));
		}
		if(diff<0)
		{
			g = Math.floor(255 *(val/avg));
		}
		var color = 'rgba('+r+','+g+',0,.6)';
		$(cell.node()).css('background-color', color);
	});
}

var avgs ={"m3":58,
			"m4":63,
			"m5":56,
			"m6":53,
			"m7":56,
			"m8":47,
			"r3":57,
			"r4":61,
			"r5":61,
			"r6":60,
			"r7":57,
			"r8":57,
			"r9":53,
			"r10":55,
			"s5":54,
			"s8":49,
			"w4":53,
			"w8":56,
			"w10":64
		};
	var elemCols =["s5","m3","m4","m5","r3","r4","r5","w4"];
	var midCols = ["s8","m6","m7","m8","r6","r7","r8","w8"];
	var highCols = ["r9","r10","w10"];