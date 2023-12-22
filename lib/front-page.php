<?php
// wp_head();
get_header(); ?>

<div class="container">
    <?php the_content(); ?>
</div>

<!-- 3 cards in a container -->
<div class="container mt-5 mb-5 text-center">
  <div class="row align-items-center">
    <div class="col">
    <div class="card" style="width: 18rem;">
  <img src="https://source.unsplash.com/random" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" style="width: 18rem;">
  <img src="https://source.unsplash.com/random" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" style="width: 18rem;">
  <img src="https://source.unsplash.com/random" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>

<?php include get_template_directory() . '/includes/cta.php'; ?>

<div class="container">
    <?php get_footer(); ?>
</div>