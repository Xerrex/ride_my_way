$(document).ready(function(){

    $(".modal-btn ").click(function(){
        $("#ride_details_modal").css('display', 'block');
    });
    
    $(".modal-close").click(function(){
        $("#ride_details_modal").css('display', 'none');
    });
 });