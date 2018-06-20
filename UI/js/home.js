$(document).ready(function(){

    $(".modal-btn ").click(function(){
        var modal = $(this).attr("target");

        $(modal).css('display', 'block');
    });
    
    $(".modal-close").click(function(){
        $(".modal").css('display', 'none');
    });
 });