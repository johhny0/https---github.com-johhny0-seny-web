<template>
  <nav :class="['navbar', 'navbar-expand-lg', 'navbar-dark', theme]">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Admin Template</router-link>
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
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/ark">Ark</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/unopar">Unopar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/bar">Bar</a>
          </li>
        </ul>
      </div>
      <div class="d-flex">
        <button class="btn btn-sm me-2" @click="toggleTheme">Toggle Theme</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'SenyNavbar',
  props: ['theme'],
  methods: {
    toggleTheme() {
      this.$emit('toggle-theme')
    }
  }
}
</script>

<style scoped>
/* Estilos opcionais conforme necessário */
</style>
