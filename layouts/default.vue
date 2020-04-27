<template>
  <div>
    <Navbar />
    <nuxt />
    <br>
    <footer>
      <div class="container">
        asd
      </div>
    </footer>
  </div>
</template>

<script>
const Navbar = () => import('~/components/navbar')

export default {
  components: {
    Navbar
  }
}
</script>

<style>
@font-face {
    font-family: romeo;
    src: url("/fonts/main.otf") format("opentype");
}

body {
    font-family: 'romeo' !important;
}

footer{
    background: #ef476f;
    color: white;
    padding: 35px 0px;
}

.color-white {
    color: white;
}

.color-main {
    color: #ef476f !important;
}

.color-green {
    color: #06d6a0 !important;
}

.overlay-dark {
  background-color: rgba(black, 0.4) !important;
}

.bg-main {
    background-color: #ef476f !important;
}

.page-item.active .page-link {
    background-color: #ef476f !important;
    border-color: #ef476f !important;
}

.border-main {
    border-color: #ef476f !important;
}

.btn-main-hover:hover{
    color: white !important;
    background-color: #ef476f !important;
}
</style>
