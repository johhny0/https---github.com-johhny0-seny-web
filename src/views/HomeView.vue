<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
<template>
  <header>
    <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"> Seny </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
                <FontAwesomeIcon icon="fa-solid fa-house" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Unopar
                <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Ark
                <FontAwesomeIcon icon="fa-solid fa-paw" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <button
              class="btn btn-green dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Usuário
              <FontAwesomeIcon icon="fa-solid fa-user" />
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="#">Entrar</a></li>
              <li><a class="dropdown-item" href="#">Registrar</a></li>
              <li><a class="dropdown-item" href="#">Perfil</a></li>
              <li><a class="dropdown-item" href="#">Usuários</a></li>
              <li><a class="dropdown-item" href="#">Sair</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
