<script>
import { useSalesStore } from "../stores/sales";
import { mapActions } from "pinia";
import SideBar from "../components/SideBar.vue";
import NavBar from "../components/NavBar.vue";
import TableSale from "../components/TableSale.vue";
import PieChart from "../components/PieChart.vue";
import BarChart from "../components/BarChart.vue";

export default {
  name: "Home",
  components: {
    TableSale,
    SideBar,
    NavBar,
    PieChart,
    BarChart,
  },
  methods: {
    ...mapActions(useSalesStore, ["fetchData"]),
  },
};
</script>

<template>
  <div class="wrapper">
    <SideBar />
    <div id="content">
      <NavBar />
      <TableSale v-if="$route.fullPath !== '/history'" />
      <br />
      <PieChart />
      <br />
      <BarChart />
      <div class="line"></div>
    </div>
  </div>
</template>
