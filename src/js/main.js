/**
 * Created by sony on 04.04.2018.
 */
console.log('Hello, World');
console.log('Hello, Kitty');




jQuery(document).ready(function($){

    $('.tab_content').hide();
    $('.tab_content:first').show();
    $('.tabs li:first').addClass('active');

    $('.tabs li').click(function(event) {
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.tab_content').hide();

        var selectTab = $(this).find('a').attr("href");
        $(selectTab).show();
    });
});