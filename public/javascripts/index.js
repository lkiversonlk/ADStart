/**
 * Created by kliu on 17/06/2015.
 */

$("#search").keyup(function(event){
    var searchText = $("#search").val();
    var brandsList = $("#brands-list");
    $("#brands-list a").each(function(index){
        if($(this).text().indexOf(searchText) >= 0){
            $(this).show();
        }else{
            $(this).hide();
        }
    });
});