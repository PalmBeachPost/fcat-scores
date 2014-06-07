$(document).ready( function () {
	$('#brs').on( 'click', function() {
		var table = $('#elemTable').DataTable({destroy:true, data: _.reject(data, function(row){ return row.m5 == null} )});
		table.search('beach').draw();
	  });
});

function scoreRender(data, type) {
	if(type === 'display')
	{
	  if(data ==-1) { return 'N/A'; }
	  if( data == null) { return  '-'}
	}
 	return data;
}