import Vue from "vue";
import Router from "vue-router";
// 导入对应的vuex文件
// 导入相应的子组件
import Home from "@/components/home/Home";
import Menu from "@/components/Menu";

Vue.use(Router);
const routeArray = [ 
  {
    path: "/*",
    name: "home",
    components: {
      default: Home,
      menu: Menu
    }
  }
];
export default new Router({
  // mode: "history",
  routes: routeArray
});
