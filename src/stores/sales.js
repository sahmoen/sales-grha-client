import { defineStore } from "pinia";
import axios from "axios";

export const useSalesStore = defineStore({
  id: "sales",
  state: () => ({
    baseUrl: "http://localhost:3000",
    sales: [],
    sold: [],
    history: [],
    product: [],
    userName: localStorage.getItem("name"),
  }),
  actions: {
    async login(data) {
      try {
        let response = await axios({
          method: "POST",
          url: this.baseUrl + "/login",
          data: data,
        });
        let access_token = response.data.access_token;
        let userId = response.data.data.id;
        let email = response.data.data.email;
        let name = response.data.data.name;
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("id", userId);
        localStorage.setItem("email", email);
        localStorage.setItem("name", name);
        await this.fetchData();
        return true;
      } catch (err) {
        console.log(err);
        // Swal.fire({
        //   icon: "error",
        //   title: `Oops...`,
        //   text: `${err.response.data.message}`,
        // });
        return false;
      }
    },

    async register(data) {
      try {
        await axios({
          method: "POST",
          url: this.baseUrl + "/registerAdmin",
          data: data,
        });
        // Swal.fire("Thank You for Register!", "Please Login!", "success");
      } catch (err) {
        console.log(err);
        // Swal.fire({
        //   icon: "error",
        //   title: `Oops...`,
        //   text: `${err.response.data.message}`,
        // });
      }
    },

    async fetchData() {
      try {
        let response = await axios({
          method: "GET",
          url: this.baseUrl + "/sales",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        let list = response.data.saleList;
        let temp = [];
        // console.log(list);
        this.sales = response.data.saleList;
        list.map((el) => {
          temp.push(el.sold);
          // return el.sold;
        });
        this.sold = temp;
        // console.log(this.sold);
        // console.log(this.sold);
      } catch (err) {
        console.log(err);
        localStorage.clear();
        // Swal.fire({
        //   icon: "error",
        //   title: `Oops...`,
        //   text: `${err.response.data.message}`,
        // });
      }
    },

    async fetchHistory() {
      try {
        let response = await axios({
          method: "GET",
          url: this.baseUrl + "/history",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        // console.log(response);
        this.history = response.data.historyList;
      } catch (err) {
        console.log(err);
        this.$router.push(`/`);
        // Swal.fire({
        //   icon: "error",
        //   title: `Oops...`,
        //   text: `${err.response.data.message}`,
        // });
      }
    },

    async addSales(data) {
      try {
        let response = await axios({
          method: "POST",
          url: this.baseUrl + "/sales",
          data: data,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },

    async fetchProduct() {
      try {
        let response = await axios({
          method: "GET",
          url: this.baseUrl + "/products",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        // console.log(response);
        this.product = response.data.productList;
      } catch (err) {
        console.log(err);
        this.$router.push(`/`);
        // Swal.fire({
        //   icon: "error",
        //   title: `Oops...`,
        //   text: `${err.response.data.message}`,
        // });
      }
    },

    async editSales() {
      try {
        let response = await axios({
          method: "GET",
          url: this.baseUrl + "/products",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
