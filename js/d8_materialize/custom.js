jQuery(document).ready(function() {
    jQuery('.button-collapse').sideNav();

    // drop down sub-menu
    jQuery('.menu-item--expanded').hover(function(){
       jQuery(this).find('.sub-menu').toggle();
    });
});