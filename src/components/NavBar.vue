<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><img src="../assets/Logo.png" alt=""
        /></a>
        <span class="bar_logo"> | </span>
        <span class="brand_logo"><img src="../assets/logo2.png" alt="" /></span>
        <span class="brand_logo_small"
          ><img src="../assets/logo_small.png" alt=""
        /></span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Game</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Champions</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item small_device">
              <a class="nav-link" href="#">Play Now</a>
            </li>
          </ul>
        </div>
        <button class="btn btn-info btn-play">PLAY NOW</button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  background-color: #000000 !important;
}
</style>