$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#login").click(function(){
        $("#loginModal").modal("toggle");
    });
    $("#reserve").click(function(){
        $("#form").modal("toggle");
    });
    $("#carouselB").click(function(){
        if ($("#carouselB").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselB").children("span").removeClass('fa-pause');
            $("#carouselB").children("span").addClass('fa-play');
        }
        else if ($("#carouselB").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselB").children("span").removeClass('fa-play');
            $("#carouselB").children("span").addClass('fa-pause');                    
        }
    });
});