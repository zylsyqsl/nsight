import Vue from "vue";
import Router from "vue-router";
// 导入对应的vuex文件
// 导入相应的子组件
import Login from "@/components/login/Login"; 

Vue.use(Router);
const routeArray = [ 
  {
    path: "/*",
    name: "login",
    component: Login
  }
];
export default new Router({
  // mode: "history",
  routes: routeArray
});
