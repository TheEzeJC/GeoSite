$(document).ready(function(){
    $.getJSON("/GeoSite/JSON/data.json", function(data){
        var rock_data= '';
        $.each(data, function(key, value){
            rock_data += '<tr>';
            rock_data += '<td>'+value.rockName+'<td>';
            rock_data += '<td>'+value.rockType+'<td>';
            rock_data += '<td>'+value.rockColor+'<td>';
            rock_data += '</tr>';
        });
        $('#rockt').append(rock_data);
    });
});