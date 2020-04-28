<template>
  <div>
    <Navbar />
    <nuxt />
    <br>
    <Footer />
    <!-- <footer>
      <div class="container">
        asd
      </div>
    </footer> -->
  </div>
</template>

<script>
const Navbar = () => import('~/components/navbar')
const Footer = () => import('~/components/footer')

export default {
  components: {
    Navbar,
    Footer
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
