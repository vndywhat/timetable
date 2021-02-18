<template>
  <div class="center">
    <vs-navbar center-collapsed color="dark" not-line text-white>
      <template #left>
        <img alt="" height="35" src="/images/logo/logo_white_120.png" />
      </template>
      <template #right>
        <vs-navbar-item id="main" :active="activeRoute === 'index'" to="/">
          <i class="bx bx-table"></i>
          Расписание
        </vs-navbar-item>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    activeRoute() {
      return this.$nuxt.$route.name
    },
  },
}
</script>

<style scoped></style>
