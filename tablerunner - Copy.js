 var i = 0
    $currSort = 'name';    


    function drawTable(data) {
        
        d3.select("tbody").selectAll("tr").remove();
        $("#filter").keydown(function() { return sort($currSort); });
        $('#submit').click(function() { return sort($currSort); });

    // Header
        var th = d3.select("thead").selectAll("th")
                .data(jsonToArray(data[0]))
              .enter().append("th")
                .attr("onclick", function (d, i) { return "sort('" + d[0] + "');";})
                .text(function(d) { return d[0]; })

        sort($currSort);
    }

    function sort(attrName) {       
        $currSort = attrName == ""? $currSort : attrName;
        $filterTxt = $("#filter").val();
        $filterTxt = $filterTxt.toLowerCase();

        d3.select("tbody").selectAll("tr").remove();

    // Rows
        var tr = d3.select("tbody").selectAll("tr")
                .data(data.filter( function(a){ return a['name'].toLowerCase().indexOf($("#filter").val()) != -1 ;} ))
              .enter().append("tr")
                .sort(function (a, b) { return a == null || b == null ? 0 : compare(a[attrName], b[attrName]); });

    // Cells
        var td = tr.selectAll("td")
                .data(function(d) { return jsonToArray(d); })
              .enter().append("td")
                .text(function(d) { return d[1]; });

        attrName ="";

        }

    function compare(a, b) {
        if(typeof(a)=="string")
        {
            a = a.toLowerCase();
            b = b.toLowerCase();       
        }
     return a > b ? 1 : a == b ? 0 : -1;
    }

    function jsonKeyValueToArray(k, v) {return [k, v];}

    function jsonToArray(json) {
        var ret = new Array();
        var key;
        for (key in json) {
            if (json.hasOwnProperty(key)) {
                ret.push(jsonKeyValueToArray(key, json[key]));
            }
        }
        return ret;
    };