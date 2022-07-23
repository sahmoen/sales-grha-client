import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import History from "../components/TableHistory.vue";
import AddSales from "../views/AddSales.vue";
import Product from "../components/TableProduct.vue";
import ErrorPage from "../views/ErrorPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/history",
      name: "history",
      component: History,
    },
    {
      path: "/addSales",
      name: "addSales",
      component: AddSales,
    },
    {
      path: "/product",
      name: "product",
      component: Product,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "errPage",
      component: ErrorPage,
    },
  ],
});

router.beforeEach((to, from) => {
  let isLogin = localStorage.getItem("access_token");
  if (isLogin && to.name === "login") {
    return { name: "home" };
  } else if (!isLogin && to.name === "home") {
    return { name: "login" };
  } else if (!isLogin && to.name === "history") {
    return { name: "login" };
  } else if (!isLogin && to.name === "product") {
    return { name: "login" };
  } else if (!isLogin && to.name === "addSales") {
    return { name: "login" };
  }
  return true;
});

export default router;
