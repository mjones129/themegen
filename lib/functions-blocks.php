<?php
//Add stylesheet
function add_style() {
  wp_enqueue_style('blocks-styles', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'add_style');

//add year shortcode
function tg_year() {
  return date("Y");
}
add_shortcode('year', 'tg_year');
