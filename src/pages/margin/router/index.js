import Vue from "vue";
import Router from "vue-router";
// 导入对应的vuex文件
// 导入相应的子组件
import Margin from "@/components/margin/Margin";
import MarginIndex from "@/components/margin/MarginIndex";

Vue.use(Router);
const routeArray = [
  {
    path: "/",
    name: "margin",
    component: Margin,
    children: [
      {
        path: "/index",
        name: "index",
        component: MarginIndex
      }
    ]
  },
  {
    path: "/*",
    name: "margin",
    component: Margin
  }
];
export default new Router({
  // mode: "history",
  routes: routeArray
});
