<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <h2 class="fw-bold mb-2">Seny</h2>
                <p class="text-white-50 my-5">Please enter your login and password!</p>

                <div data-mdb-input-init class="form-outline form-white mb-3">
                  <input
                    type="email"
                    id="typeEmailX"
                    class="form-control form-control-lg"
                    placeholder="your@email.com"
                  />
                </div>

                <div data-mdb-input-init class="form-outline form-white mb-4">
                  <input
                    type="password"
                    id="typePasswordX"
                    class="form-control form-control-lg"
                    placeholder="y0ur_p4ssw()rd"
                  />
                </div>

                <p class="small mb-4 pb-lg-2">
                  <a class="text-white-50" href="#!">Forgot password?</a>
                </p>

                <button class="btn btn-outline-light btn-lg" type="submit">Login</button>

                <div class="d-flex justify-content-evenly mt-2 pt-1">
                  <a href="#!" class="text-white">
                    <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                  </a>
                  <a href="#!" class="text-white">
                    <FontAwesomeIcon icon="fa-brands fa-twitter" />
                  </a>
                  <a href="#!" class="text-white">
                    <FontAwesomeIcon icon="fa-brands fa-google" />
                  </a>
                </div>
              </div>

              <div>
                <p class="mb-0">
                  Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gradient-custom {
  /* fallback for old browsers */
  background: #6a11cb;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));
}
</style>
