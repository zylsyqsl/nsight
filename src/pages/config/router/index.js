import Vue from "vue";
import Router from "vue-router";
// 导入对应的vuex文件
// 导入相应的子组件
import User from "@/components/config/User/User";
import UserIndex from "@/components/config/User/UserIndex";
import Role from "@/components/config/Role/Role";
import RoleIndex from "@/components/config/Role/RoleIndex";
import RoleGroup from "@/components/config/RoleGroup/RoleGroup";
import RoleGroupIndex from "@/components/config/RoleGroup/RoleGroupIndex";
import Menu from "@/components/Menu";

Vue.use(Router);
const routeArray = [
  {
    path: "/user",
    name: "user",
    components: {
      default: User,
      menu: Menu
    },
    children: [
      {
        path: "/user/index",
        name: "user/index",
        component: UserIndex
      }
    ]
  },
  {
    path: "/role",
    name: "role",
    components: {
      default: Role,
      menu: Menu
    },
    children: [
      {
        path: "/role/index",
        name: "role/index",
        component: RoleIndex
      }
    ]
  },
  {
    path: "/roleGroup",
    name: "roleGroup",
    components: {
      default: RoleGroup,
      menu: Menu
    },
    children: [
      {
        path: "/roleGroup/index",
        name: "roleGroup/index",
        component: RoleGroupIndex
      }
    ]
  },
  {
    path: "/*",
    name: "user",
    components: {
      default: User,
      menu: Menu
    }
  }
];
export default new Router({
  // mode: "history",
  routes: routeArray
});
