$(document).ready(function() {

  $('#MRPtable').DataTable( {
    "ajax":{
      "url":"data/mrp2045.js",
      "dataSrc": "features"
    },
    "oLanguage": {
   "sSearch": "Filter Table:"
 },
    "columns": [
      { data: "properties.MRP_ID",
        title: "MRP ID" },
      { data: "properties.FACILITY",
        title: "Facility" },
      { data: "properties.PS1",
        title: "Project Scope" },   
      { data: "properties.Location",
        title: "Location" },
      { data: "properties.Timing",
        title: "Timing" },  
       { data: "properties.CATEGORY",
        title: "Category" },         
      { data: "properties.PreCosts",
        title: "Preservation Cost",
        className: 'table-cat-costs',
     //   render: $.fn.dataTable.render.number(  ',', '.', 2, '$' ),
        render: function ( data, type, row ) {
                  if (data == '0.00') {
                    return '-';
                    }
                  else {
                 //   return data;
                     var num = $.fn.dataTable.render.number(',', '.', 2, '$').display(data);              
                      return num ;
                    }
                }      
                 },
      { data: "properties.OpCosts",
        title: "Operation Cost",
        className: 'table-cat-costs',
        render: function ( data, type, row ) {
                  if (data == '0.00') {
                    return '-';
                    }
                  else {
                 //   return data;
                     var num = $.fn.dataTable.render.number(',', '.', 2, '$').display(data);              
                      return num ;
                    }
                }      
                 },
      { data: "properties.ExpCosts",
        title: "Expansion Cost",
        className: 'table-cat-costs',
        render: function ( data, type, row ) {
                  if (data == '0.00') {
                    return '-';
                    }
                  else {
                 //   return data;
                     var num = $.fn.dataTable.render.number(',', '.', 2, '$').display(data);              
                      return num ;
                    }
                }      
                 },
      { data: "properties.TTCost",
        title: "Total Cost",
        className: 'table-cost',
         render: function ( data, type, row ) {
                  if (data == '0.00') {
                    return '-';
                    }
                  else {
                 //   return data;
                     var num = $.fn.dataTable.render.number(',', '.', 2, '$').display(data);              
                      return num ;
                    }
                }      
                 },
      { data: "properties.UnfundCost",
        title: "Unfunded Cost",
        className: 'table-cost',
        render: function ( data, type, row ) {
                  if (data == '0.00') {
                    return '-';
                    }
                  else {
                 //   return data;
                     var num = $.fn.dataTable.render.number(',', '.', 2, '$').display(data);              
                      return num ;
                    }
                }      
                 },
      { data: "properties.External_C",
        title: "External Cost",
        className: 'table-cost',
      render: function ( data, type, row ) {
                  if (data == '0.00') {
                    return '-';
                    }
                  else {
                 //   return data;
                     var num = $.fn.dataTable.render.number(',', '.', 2, '$').display(data);              
                      return num ;
                    }
                }      

      }                     
    ]
  });

}); 