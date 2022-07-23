<script>
import { mapState, mapActions } from "pinia";
import { useSalesStore } from "../stores/sales";
import { RouterLink } from "vue-router";
import NavBar from "./NavBar.vue";
import SideBar from "./SideBar.vue";
export default {
  name: "TableHistory",
  components: {
    RouterLink,
    NavBar,
    SideBar,
  },
  computed: {
    ...mapState(useSalesStore, ["history"]),
  },
  methods: {
    ...mapActions(useSalesStore, ["fetchHistory"]),
  },
  async created() {
    if (localStorage.getItem("access_token")) {
      await this.fetchHistory();
    }
  },
};
</script>

<template>
  <div class="wrapper">
    <SideBar />
    <div id="content">
      <NavBar />
      <h2>Table History</h2>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Updated By</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(list, index) in history" :key="list.id" :list="list">
            <td>{{ index + 1 }}</td>
            <td>{{ list.description }}</td>
            <td>{{ list.updatedBy }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
