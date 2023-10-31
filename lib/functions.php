<?php
//return current year
add_shortcode('this_year', 'get_current_year');
function get_current_year() {
    $year = date('Y');
    return $year;
}