<template>
  <aside :class="['sidebar', theme]">
    <div class="sidebar-header">
      <h3>Admin</h3>
    </div>
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/users" class="nav-link">Users</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/settings" class="nav-link">Settings</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/login" class="nav-link">Login</router-link>
      </li>

      <!-- Adicione mais itens de menu conforme necessário -->
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'SenySidebar',
  props: ['theme']
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  padding-top: 1rem;
}

.sidebar-header {
  text-align: center;
  margin-bottom: 1rem;
}

.nav-link {
  color: inherit;
  padding: 0.5rem 1rem;
}

.nav-link:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.dark {
  background-color: #343a40;
  color: #fff;
}

.light {
  background-color: #f8f9fa;
  color: #212529;
}
</style>
