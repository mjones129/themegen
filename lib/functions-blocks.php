<?php
function add_style() {
  wp_enqueue_style('blocks-styles', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'add_style');
