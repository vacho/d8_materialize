jQuery(document).ready(function() {
    jQuery('.button-collapse').sideNav();

    // drop down sub-menu
    jQuery('.menu-item--expanded').hover(function() {
       jQuery(this).find('.sub-menu').toggle();
    });

    // Title at product pages
    if(window.location.pathname == '/dpf') {
        jQuery('#block-d8-materialize-page-title').remove();
    }

    if(window.location.pathname == '/caja-de-ahorro') {
        jQuery('#block-d8-materialize-page-title').remove();
    }

});
