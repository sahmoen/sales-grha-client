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
        labels: ["Nike", "Adidas", "Puma", "Nike", "Adidas", "Puma"],
        datasets: [
          {
            backgroundColor: ["#1C3FAA", "#F05252", "#6b7280", "#1C3FAA", "#F05252", "#6b7280"],
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
