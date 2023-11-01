<?php
//enqueue stylesheet
wp_enqueue_style('themegenStyle', './style.css', [], null, 'all');

//return current year to the footer
add_shortcode('this_year', 'get_current_year');
function get_current_year() {
    $year = date('Y');
    return $year;
}