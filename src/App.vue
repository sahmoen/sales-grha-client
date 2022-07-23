<script>
import { RouterLink, RouterView } from "vue-router";
import SideBar from "./components/SideBar.vue";
import NavBar from "./components/NavBar.vue";
import { useSalesStore } from "./stores/sales";
import { mapActions } from "pinia";
export default {
  components: {
    RouterLink,
    RouterView,
    SideBar,
    NavBar,
  },
  methods: {
    ...mapActions(useSalesStore, ["fetchData", "fetchProduct"]),
  },
  async created() {
    if (localStorage.getItem("access_token")) {
      await this.fetchData();
      await this.fetchProduct();
    }
  },
};
</script>

<template>
  <RouterView />
</template>
