<script>
import { RouterLink } from "vue-router";
export default {
  name: "ErrorPage",
  components: {
    RouterLink,
  },
};
</script>
<template>
  <body>
    <div class="mainbox">
      <div class="err">4</div>
      <div class="err2">0</div>

      <div class="err3">4</div>
      <div class="msg">
        Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?
        <p>Let's go <RouterLink to="/" href="">home</RouterLink> and try from there.</p>
      </div>
    </div>
  </body>
</template>
<style scoped>
body {
  background-color: #95c2de;
}

.mainbox {
  background-color: #95c2de;
  margin: auto;
  height: 700px;
  width: 600px;
  position: relative;
}

.err {
  color: #ffffff;
  font-family: "Nunito Sans", sans-serif;
  font-size: 11rem;
  position: absolute;
  left: 20%;
  top: 8%;
}

.far {
  position: absolute;
  font-size: 8.5rem;
  left: 42%;
  top: 15%;
  color: #ffffff;
}

.err2 {
  color: #ffffff;
  font-family: "Nunito Sans", sans-serif;
  font-size: 11rem;
  position: absolute;
  left: 44%;
  top: 8%;
}
.err3 {
  color: #ffffff;
  font-family: "Nunito Sans", sans-serif;
  font-size: 11rem;
  position: absolute;
  left: 68%;
  top: 8%;
}

.msg {
  text-align: center;
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.6rem;
  position: absolute;
  left: 16%;
  top: 45%;
  width: 75%;
}

a {
  text-decoration: none;
  color: white;
}

a:hover {
  text-decoration: underline;
}
</style>
