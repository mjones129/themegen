<?php
// wp_head();
get_header(); ?>

<?php include get_template_directory() . '/includes/hero.php'; ?>

<div class="container">
    <?php the_content(); ?>
</div>

<!-- 3 cards in a container -->
<?php include get_template_directory() . '/includes/cards.php'; ?>

<?php include get_template_directory() . '/includes/accordion.php'; ?>

<div class="container">
    <?php get_footer(); ?>
</div>
