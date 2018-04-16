/**
 * Created by sony on 04.04.2018.
 */
console.log('Hello, World');
console.log('Hello, Kitty');




jQuery(document).ready(function($){
    
  /*  $('.tab_content').hide();
    $('.tab_content:first').show();
    $('.tabs li:first').addClass('active');

    $('.tabs li').click(function(event) {
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.tab_content').hide();

        var selectTab = $(this).find('a').attr("href");
        $(selectTab).show();
    });*/
});
$(document).ready(function(){
    $(".card-member").hide();
    $("#teammate-1").click(function(event){
        $(".card-member").hide();
        $("#team-card-1").show();
    });

    $("#teammate-2").click(function(event){
        $(".card-member").hide();
        $("#team-card-2").show();
    });
    $("#teammate-3").click(function(event){
        $(".card-member").hide();
        $("#team-card-3").show();
    });
    $("#teammate-4").click(function(event){
        $(".card-member").hide();
        $("#team-card-4").show();
    });
    $(".card-member>.x-icon").click(function(event){
        $(".card-member").hide();
    });

    $(".card-works-main").hide();
    $("#grid-item-works-1").click(function(event){
        $(".card-works-main").hide();
        $("#card-works-main-1").show();
    });
    $("#grid-item-works-2").click(function(event){
        $(".card-works-main").hide();
        $("#card-works-main-2").show();
    });
    $("#grid-item-works-3").click(function(event){
        $(".card-works-main").hide();
        $("#card-works-main-3").show();
    });
    $("#grid-item-works-4").click(function(event){
        $(".card-works-main").hide();
        $("#card-works-main-4").show();
    });
    $("#grid-item-works-5").click(function(event){
        $(".card-works-main").hide();
        $("#card-works-main-5").show();
    });
    $("#grid-item-works-6").click(function(event){
        $(".card-works-main").hide();
        $("#card-works-main-6").show();
    });
    $("#grid-item-works-7").click(function(event){
        $(".card-works-main").hide();
        $("#card-works-main-7").show();
    });
    $("#grid-item-works-8").click(function(event){
        $(".card-works-main").hide();
        $("#card-works-main-8").show();
    });
    $("#grid-item-works91").click(function(event){
        $(".card-works-main").hide();
        $("#card-works-main-9").show();
    });
    $("#grid-item-works-10").click(function(event){
        $(".card-works-main").hide();
        $("#card-works-main-10").show();
    });
    $("#grid-item-works-11").click(function(event){
        $(".card-works-main").hide();
        $("#card-works-main-11").show();
    });
    $("#grid-item-works-12").click(function(event){
        $(".card-works-main").hide();
        $("#card-works-main-12").show();
    });

    $(".grid-numbers").click(function(event){
        $(function () {
            $(function() {
                $(".empty").animate({
                    width: "160%"
                },{
                    duration: 5000,
                    step: function (now) {
                        $(".happy-clients").text(Math.round(now)*10 + "");
                    }
                });
                return false;
            });
        });
        $(function () {
            $(function() {
                $(".empty").animate({
                    width: "32%"
                },{
                    duration: 5000,
                    step: function (now) {
                        $(".completed-projects").text(Math.round(now)*10 + "");
                    }
                });
                return false;
            });
        });

        $(function () {
            $(function() {
                $(".empty").animate({
                    width: "40%"
                },{
                    duration: 5000,
                    step: function (now) {
                        $(".awards").text(Math.round(now) + "");
                    }
                });
                return false;
            });
        });

        $(function () {
            $(function() {
                $(".empty").animate({
                    width: "200%"
                },{
                    duration: 5000,
                    step: function (now) {
                        $(".coffee-drinks").text(Math.round(now)*100 + "");
                    }
                });
                return false;
            });
        });
    });

});