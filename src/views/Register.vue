<script>
import { mapActions } from "pinia";
import { useSalesStore } from "../stores/sales";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      name: "",
    };
  },
  methods: {
    ...mapActions(useSalesStore, ["register"]),
    async postRegister() {
      try {
        let data = {
          email: this.email,
          password: this.password,
          name: this.name,
        };
        await this.register(data);
        this.$router.push("/login");
      } catch (err) {
        console.log(err);
        this.email = "";
        this.password = "";
        this.name = "";
        // Swal.fire({
        //   icon: "error",
        //   title: `Oops...`,
        //   text: `${err.response.data.message}`,
        // });
      }
    },
  },
};
</script>
<template>
  <!-- Register -->
  <div id="form-register">
    <!-- Section: Design Block -->
    <section class="text-center text-lg-start vh-100" style="background-color: #7386d5">
      <!-- Jumbotron -->
      <div class="container py-5">
        <div class="row g-0 align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="card cascading-right" style="border: 2px solid black; border-radius: 50px 20px">
              <div class="card-body p-5 shadow-5 text-center">
                <h2 class="fw-bold mb-5">Sign up now</h2>
                <form @submit.prevent="postRegister">
                  <!-- Email input -->
                  <div class="form mb-4">
                    <label class="form-label" for="form3Example3">Email address</label>
                    <input type="email" id="emailRegist" class="form-control" v-model="email" />
                  </div>

                  <!-- Password input -->
                  <div class="form mb-4">
                    <label class="form-label" for="form3Example4">Password</label>
                    <input type="password" id="passwordRegist" class="form-control" v-model="password" />
                  </div>

                  <!-- Phone Number Input-->
                  <div class="form mb-4">
                    <label class="form-label" for="form3Example5">Name</label>
                    <input type="text" id="phoneRegist" class="form-control" v-model="name" />
                  </div>

                  <!-- Submit button -->
                  <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>
                </form>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mb-5 mb-lg-0">
            <img src="../assets/register.png" class="w-100 rounded-4 shadow-4" alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
