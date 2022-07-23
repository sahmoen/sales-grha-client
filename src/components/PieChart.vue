<script>
import Chart from "chart.js/auto";
import { mapState, mapActions } from "pinia";
import { useSalesStore } from "../stores/sales";

export default {
  computed: {
    ...mapState(useSalesStore, ["sold"]),
  },
  methods: {
    ...mapActions(useSalesStore, ["fetchData"]),
  },
  mounted() {
    new Chart(document.getElementById("testPie"), {
      type: "pie",
      data: {
        labels: ["Produk A", "Produk B", "Produk C", "Produk D", "Produk E", "Produk F"],
        datasets: [
          {
            backgroundColor: ["#1C3FAA", "#F05252", "#6b7280", "#ff6384", "#36a2eb", "#cc65fe"],
            hoverOffset: 4,
            data: this.sold,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Sales",
        },
      },
    });
    console.log(this.sold);
  },
  async created() {
    await this.fetchData();
  },
};
</script>

<template>
  <div class="flex">
    <canvas id="testPie" width="300" height="300"></canvas>
  </div>
</template>
