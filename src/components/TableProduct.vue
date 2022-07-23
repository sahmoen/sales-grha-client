<script>
import { mapState, mapActions } from "pinia";
import { useSalesStore } from "../stores/sales";
import { RouterLink } from "vue-router";
import NavBar from "./NavBar.vue";
import SideBar from "./SideBar.vue";
export default {
  name: "TableProduct",
  components: {
    RouterLink,
    NavBar,
    SideBar,
  },
  computed: {
    ...mapState(useSalesStore, ["product"]),
  },
  methods: {
    ...mapActions(useSalesStore, ["fetchProduct"]),
    toRupiah(data) {
      const numb = data;
      const format = numb.toString().split("").reverse().join("");
      const convert = format.match(/\d{1,3}/g);
      const rupiah = "Rp " + convert.join(".").split("").reverse().join("");

      return rupiah;
    },
  },
  async created() {
    if (localStorage.getItem("access_token")) {
      await this.fetchProduct();
    }
  },
};
</script>

<template>
  <div class="wrapper">
    <SideBar />
    <div id="content">
      <NavBar />
      <h2>Table Product</h2>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(list, index) in product" :key="list.id" :list="list">
            <td>{{ index + 1 }}</td>
            <td>{{ list.title }}</td>
            <td>{{ toRupiah(list.price) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
