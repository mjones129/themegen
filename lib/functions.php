<?php
//enqueue stylesheet
function themegen_styles() {
    //the enqueue on line 5 assumes you clone the repo into the /themes/themegen directory
    wp_enqueue_style('themegenStyle', content_url() . 'themegen/style.css', [], null, 'all');
    wp_enqueue_style('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css', [], null, 'all');
    wp_enqueue_script('bootstrapjs', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js', [], null, true);
}
// add_action('wp_enqueue_scripts', 'themegen_styles');
