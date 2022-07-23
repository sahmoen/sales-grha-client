<script>
import Chart from "chart.js/auto";
import { mapState } from "pinia";
import { useSalesStore } from "../stores/sales";

export default {
  computed: {
    ...mapState(useSalesStore, ["sold"]),
  },
  mounted() {
    new Chart(document.getElementById("testBar"), {
      type: "bar",
      data: {
        labels: ["Produk A", "Produk B", "Produk C", "Produk D", "Produk E", "Produk F"],
        datasets: [
          {
            label: "Sales",
            backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"],
            borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
            borderWidth: 1,
            data: this.sold,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Ranking",
        },
      },
    });
    console.log(this.sold);
  },
};
</script>

<template>
  <div class="flex">
    <canvas id="testBar" width="300" height="300"></canvas>
  </div>
</template>
