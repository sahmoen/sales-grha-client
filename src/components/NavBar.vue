<script>
import { useSalesStore } from "../stores/sales";
import { mapActions } from "pinia";
export default {
  name: "NavBar",
  methods: {
    ...mapActions(useSalesStore, ["fetchProduct"]),
    toAddSales() {
      this.$router.push(`/addSales`);
      this.fetchProduct();
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container-fluid">
      <button type="button" id="sidebarCollapse" class="btn btn-info">
        <i class="fas fa-align-left"></i>
        <!-- <span>Menu</span> -->
      </button>
      <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-align-justify"></i>
      </button>

      <button class="btn btn-info" style="margin-left: 2rem" @click.prevent="toAddSales">Add</button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav navbar-nav ml-auto">
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-info" type="submit">Search</button>
          </form>
        </ul>
      </div>
    </div>
  </nav>
</template>
