<template>
  <div id="app">
    <div class="theme-container">
      <Navbar />
      <div class="page content">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  padding-top: 50px;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>

<script>
import Navbar from '../components/Header/Navbar'
export default {
  components: { Navbar },
}
</script>
