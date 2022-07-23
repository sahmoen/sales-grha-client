<script>
import { useSalesStore } from "../stores/sales";
import { mapActions, mapState } from "pinia";
import { RouterLink } from "vue-router";
export default {
  name: "SideBar",
  components: {
    RouterLink,
  },
  methods: {
    ...mapActions(useSalesStore, ["fetchHistory", "fetchProduct"]),
    toLogout() {
      localStorage.clear();
      this.$router.push(`/login`);
    },
    toHistory() {
      this.$router.push(`/history`);
      this.fetchHistory();
    },
    toAddSales() {
      this.$router.push(`/addSales`);
      this.fetchProduct();
    },
  },
  computed: {
    ...mapState(useSalesStore, ["userName"]),
  },
};
</script>

<template>
  <nav id="sidebar">
    <div class="sidebar-header">
      <RouterLink to="/" class="navbar-brand" href="">
        <h3>Sales App</h3>
      </RouterLink>
    </div>

    <ul class="list-unstyled components">
      <li class="active">
        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Sales</a>
        <ul class="collapse list-unstyled" id="homeSubmenu">
          <li>
            <a @click.prevent="toAddSales" href="">Create</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Master Data</a>
        <ul class="collapse list-unstyled" id="pageSubmenu">
          <li>
            <a href="#">User</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">Report</a>
      </li>
      <li>
        <a @click.prevent="toHistory" href="">History</a>
      </li>
    </ul>

    <ul class="list-unstyled CTAs">
      <li>
        <a href="#pageAdmin" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">{{ userName }}</a>
        <ul class="collapse list-unstyled" id="pageAdmin">
          <li>
            <a href="#">Add Admin</a>
          </li>
        </ul>
      </li>
      <li>
        <a @click.prevent="toLogout" href="#" class="">Logout</a>
      </li>
    </ul>
  </nav>
</template>
