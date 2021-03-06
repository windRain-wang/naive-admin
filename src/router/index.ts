// 路由
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue"
import Login from "@/views/Login.vue";
import Test from "@/views/Test.vue";
import Theme from "@/views/Theme.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: "/theme",
    component: Theme
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
