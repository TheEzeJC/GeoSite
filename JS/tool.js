$(document).ready(function(){
    $.getJSON("/GeoSite/JSON/data.json", function(data){
        var rock_data= '';
        $.each(data, function(key, value){
            rock_data += '<tr>';
            rock_data += '<td>'+value.rockName+'</td>';
            rock_data += '<td>'+value.rockType+'</td>';
            rock_data += '<td>'+value.rockColor+'</td>';
            rock_data += '<td>'+value.rockDesc+'</td>';
            rock_data += '</tr>';
        });
        $('#rockt').append(rock_data);
    });
});

function searchBar() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("userInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("rockt");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }