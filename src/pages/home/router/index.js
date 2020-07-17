import Vue from "vue";
import Router from "vue-router";
// 导入对应的vuex文件
// 导入相应的子组件
import Home from "@/components/home/Home";

Vue.use(Router);
const routeArray = [
  {
    path: "/*",
    name: "home",
    component: Home
  }
];
export default new Router({
  // mode: "history",
  routes: routeArray
});
