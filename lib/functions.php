<?php
//enqueue stylesheet
function themegen_styles() {
    wp_enqueue_style('themegenStyle', get_template_directory_uri() . '/style.css', [], null, 'all');
    wp_enqueue_style('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css', [], null, 'all');
    wp_enqueue_script('bootstrapjs', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js', [], null, true);
}
// add_action('wp_enqueue_scripts', 'themegen_styles');

//return current year to the footer
function get_current_year() {
    $year = date('Y');
    return $year;
}
add_shortcode('this_year', 'get_current_year');