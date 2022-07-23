<script>
import { mapState, mapActions } from "pinia";
import { useSalesStore } from "../stores/sales";
import { RouterLink } from "vue-router";
export default {
  name: "TableSale",
  components: {
    RouterLink,
  },
  computed: {
    ...mapState(useSalesStore, ["sales"]),
  },
  methods: {
    ...mapActions(useSalesStore, ["fetchData", "editSales", "deleteSale"]),
    toEdit() {
      this.$router.push("/");
    },
    toDelete(id) {
      this.deleteSale(id);
      this.fetchData();
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <h2>Sales</h2>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Seller</th>
        <th scope="col">Product</th>
        <th scope="col">Item Sold</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(list, index) in sales" :key="list.id" :list="list">
        <td>{{ index + 1 }}</td>
        <td>{{ list.seller }}</td>
        <td>{{ list.Product ? list.Product.title : "no data" }}</td>
        <td>{{ list.sold }}</td>
        <td>
          <button type="button" class="btn btn-outline-warning" style="margin-right: 1rem">Edit</button>
          <button @click.prevent="toDelete(list.id)" type="button" class="btn btn-outline-danger">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
