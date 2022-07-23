<script>
import { mapActions } from "pinia";
import { useSalesStore } from "../stores/sales";
import { RouterLink } from "vue-router";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    RouterLink,
  },
  methods: {
    ...mapActions(useSalesStore, ["login"]),
    async postLogin() {
      let data = {
        email: this.email,
        password: this.password,
      };
      let result = await this.login(data);
      if (result) {
        this.$router.push("/");
      }
      this.email = "";
      this.password = "";
    },
  },
};
</script>
<template>
  <!-- Login -->
  <div id="form-login">
    <section class="" style="background-color: #7386d5">
      <div class="container py-5 h-70">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card" style="border: 2px solid black; border-radius: 50px 20px">
              <div class="row g-0 pt-5" style="background-color: rgb(165, 225, 229); border: 2px solid black; border-radius: 50px 20px">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img src="https://login.latiseducation.com/assets/img/Illustration/Illustration%204.png" alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem" />
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-5 text-black">
                    <form id="form-login" @submit.prevent="postLogin">
                      <div class="d-flex align-items-center mb-3 pb-1">
                        <i class="fas fa-cubes fa-2x me-3" style="color: #0cb4f1"></i>
                        <span class="h1 fw-bold mb-0">Login</span>
                      </div>

                      <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">Sign into your account</h5>

                      <div class="form mb-4">
                        <label class="form-label" for="form2Example17">Email address</label>
                        <input type="email" id="formEmail" class="form-control form-control-lg" v-model="email" />
                      </div>

                      <div class="form mb-4">
                        <label class="form-label" for="form2Example27">Password</label>
                        <input type="password" id="formPassword" class="form-control form-control-lg" v-model="password" />
                      </div>

                      <div class="pt-1 mb-4">
                        <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                      </div>

                      <!-- <a class="small text-muted" href="#!">Forgot password?</a> -->
                      <p class="mb-1 pb-lg-2" style="color: #393f81">Don't have an account? <RouterLink to="/register" href="" class="linkRegist" style="color: #393f81">Register here</RouterLink></p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
