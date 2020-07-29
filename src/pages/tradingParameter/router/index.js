import Vue from "vue";
import Router from "vue-router";
// 导入对应的vuex文件
// 导入相应的子组件
import Menu from "@/components/Menu";
import Margin from "@/components/tradingParameter/Margin/Margin";
import MarginIndex from "@/components/tradingParameter/Margin/MarginIndex";
import CommissionIndex from "@/components/tradingParameter/Commission/CommissionIndex";
import Commission from "@/components/tradingParameter/Commission/Commission";

Vue.use(Router);
const routeArray = [
  {
    path: "/margin",
    name: "margin",
    components: {
      default: Margin,
      menu: Menu
    },
    children: [
      {
        path: "/margin/index",
        name: "margin/index",
        component: MarginIndex
      }
    ]
  },
  {
    path: "/commission",
    name: "commission",
    components: {
      default: Commission,
      menu: Menu
    },
    children: [
      {
        path: "/commission/index",
        name: "commission/index",
        component: CommissionIndex
      }
    ]
  },
  {
    path: "/*",
    name: "margin",
    components: {
      default: Margin,
      menu: Menu
    }
  }
];
export default new Router({
  // mode: "history",
  routes: routeArray
});
