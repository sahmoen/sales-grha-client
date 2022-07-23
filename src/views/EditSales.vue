<script>
import { mapActions, mapState } from "pinia";
import { useSalesStore } from "../stores/sales";
import SideBar from "../components/SideBar.vue";
import NavBar from "../components/NavBar.vue";
export default {
  name: "Add",
  components: {
    SideBar,
    NavBar,
  },
  data() {
    return {
      seller: "",
      sold: "",
      productId: 0,
    };
  },
  computed: {
    ...mapState(useSalesStore, ["product"]),
  },
  methods: {
    ...mapActions(useSalesStore, ["addSales", "fetchData"]),
    async postSales() {
      try {
        let data = {
          seller: this.seller,
          sold: this.sold,
          productId: this.productId,
        };
        await this.addSales(data);
        await this.fetchData();
        this.$router.push("/");
      } catch (err) {
        console.log(err);
        this.seller = "";
        this.sold = "";
        this.productId = 0;
      }
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <SideBar />
    <div id="content">
      <NavBar />
      <form id="addNews" class="container py-5 h-70" @submit.prevent="postSales">
        <h3 class="container h-70">ADD SALES</h3>
        <br />
        <!-- Title input -->
        <div class="form mb-4">
          <label class="form-label" for="form4Example1">Seller</label>
          <input type="text" id="inputAddTitle" class="form-control" v-model="seller" />
        </div>

        <!-- Content input -->
        <div class="form mb-4">
          <label class="form-label" for="form4Example3">Sold</label>
          <input type="number" id="inputAddTitle" class="form-control" v-model="sold" />
        </div>

        <div class="form-group">
          <label for="exampleFormControlSelect1">Product</label>
          <select class="form-control" id="exampleFormControlSelect1" v-model="productId">
            <option v-for="list in product" :key="list.id" :list="list" v-bind:value="list.id">{{ list.title }}</option>
          </select>
        </div>
        <br />

        <!-- Submit button -->
        <button id="submitAdd" type="submit" class="btn btn-primary btn-block mb-4">Add News</button>
        <!-- <button type="button" class="btn btn-danger btn-block mb-4 btnCancel">Cancel</button> -->
      </form>
    </div>
  </div>
</template>
