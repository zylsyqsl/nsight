<template>
  <div class="menu_container">
    <div class="menu_tip">
      <el-row class="menu_tip_row">
        <el-col :span="20">
          <span>您好，{{ this.$root.userInfo.userName }}</span>
          <span>当前日期：{{ curDay }}</span>
        </el-col>
        <el-col :span="4">
          <span @click="logOut"
                style="    cursor: pointer;">退出</span>
        </el-col>
      </el-row>
    </div>
    <div class="menu_wapper">
      <div class="menu_row">
        <div>
          <span class="menu_title">结算系统</span>
        </div>
        <div>
          <el-menu class="el-menu-demo"
                   :default-active="activeIndex"
                   mode="horizontal"
                   @select="onMenuItemClick"
                   active-text-color="#fb6149">
            <template v-for="item in menuItems">
              <!--一级菜单（有二级菜单）-->
              <template v-if="item.subMenuItems && item.subMenuItems.length > 0">
                <el-submenu :index="item.index">
                  <template slot="title">{{ item.label }}</template>
                  <template v-for="subItem in item.subMenuItems">
                    <!--二级菜单-->
                    <template v-if="subItem.subMenuItems && subItem.subMenuItems.length > 0">
                      <!--三级菜单-->
                      <el-submenu :index="subItem.index">
                        <template slot="title">{{ subItem.label }}</template>
                        <template v-for="thirdItem in subItem.subMenuItems">
                          <el-menu-item :index="thirdItem.index">{{
                      thirdItem.label
                    }}</el-menu-item>
                        </template>
                      </el-submenu>
                    </template>
                    <!--二级菜单-->
                    <template v-else>
                      <el-menu-item :index="subItem.index">{{
                  subItem.label
                }}</el-menu-item>
                    </template>
                  </template>
                </el-submenu>
              </template>
              <!--一级菜单（无二级菜单）-->
              <template v-else>
                <el-menu-item :index="item.index">{{ item.label }}</el-menu-item>
              </template>
            </template>
          </el-menu>
        </div>
      </div>
    </div>
    <div class="breadcrumb_container">
      <div class="breadcrumb_row">
        {{breadcrumb}}
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from "@/assets/js/dayjs";
export default {
  name: "Menu",
  data: function () {
    return {
      activeIndexPath: '',
      originalMenuData: [],
      menuItems: [],
      isPageShow: false,
    };
  },
  created: function () {
    // 获取最开始的路由路径；获取菜单数据之后，找到路径对应的index，再设置选中菜单
    this.setActiveIndexPath();
    this.init();
  },
  computed: {
    curDay: function () {
      var str = dayjs().format("YYYY年MM月DD日 dddd");
      return str;
    },
    activeIndex: function () {
      var result = '';
      if (this.originalMenuData.length > 0 && this.activeIndexPath) {
        this.originalMenuData.forEach(item => {
          if (item[3] == this.activeIndexPath) {
            result = item[0];
          }
        })
      }
      return result;
    },
    breadcrumb () {
      let result = '';
      if (this.activeIndex) {
        let tempIndex = this.activeIndex;
        console.log(tempIndex)
        // 先判断当前选中菜单位于第几层级
        let level = (tempIndex.length - 4) / 4;
        for (let i = 1; i <= level; i++) {
          if (result) result += '>';
          let targetIndex = tempIndex.substr(0, i * 4 + 4);
          let tempCurmb = this.getCrumbByIndex(targetIndex);
          result += tempCurmb;
        }
      }
      return result;
    }
  },
  methods: {
    init () {
      if (!this.$root.userInfo.userID) return;
      this.menuItems = [];
      let topMenu = [];
      this.$fetchPost("/api/v1/sq/adm/auth/getOptorAccess").then(response => {

        if (response) {
          this.originalMenuData = response.getData(0);
          let topMenu = [];
          this.originalMenuData.forEach(item => {
            // 获取顶层菜单
            var map = {};
            if (item[0].length == 8) {
              map = {
                index: item[0],
                label: item[2],
                targetPath: item[3],
                subMenuItems: []
              };
              topMenu.push(map);
            }
          });
          // 迭代获取更下层菜单
          this.menuItems = this.iterationMenu(topMenu);

        }
      });
    },
    iterationMenu: function (list) {
      list.forEach(item => {
        // 判断是否存在下层菜单，存在继续迭代
        let nextMenuList = this.isExistNextLevel(item.index);
        if (nextMenuList.length > 0) {
          item.subMenuItems = nextMenuList;
          this.iterationMenu(nextMenuList);
        }
      });
      return list;
    },
    isExistNextLevel: function (index) {
      let list = [];
      let level = index.length / 4;
      for (let i = 0; i < this.originalMenuData.length; i++) {
        if (
          this.originalMenuData[i][0].length == level * 4 + 4 &&
          this.originalMenuData[i][0].substr(0, level * 4) == index
        ) {
          list.push({
            index: this.originalMenuData[i][0],
            label: this.originalMenuData[i][2],
            targetPath: this.originalMenuData[i][3],
            subMenuItems: []
          });
        }
      }
      return list;
    },
    onMenuItemClick: function (index, indexPath) {
      var targetPath = this.getTargetPath(index);
      this.activeIndexPath = targetPath;
      var page = this.getRootPath(index);
      if (this.isTopMenu(page)) {
        // 当前url是顶层菜单，路由内跳转
        this.$router.push({ name: targetPath });
      } else {
        // 当前url不是顶层菜单，页面间跳转
        this.$root.loadView(page, "_self", { a: 1234 }, "get", targetPath);
      }
    },
    // 判断当前url是否选中的顶层菜单
    isTopMenu: function (index) {
      let result = false;
      let curPage = this.getCurPage();
      this.menuItems.forEach(function (item) {
        if (item.targetPath == index && curPage == index) {
          result = true;
        }
      });
      return result;
    },
    getTargetPath: function (index) {
      var result = false;
      this.originalMenuData.forEach(item => {
        if (item[0] == index) {
          result = item[3];
        }
      });
      return result;
    },
    getRootPath: function (index) {
      var result = false;
      this.menuItems.forEach(item => {
        if (item.index.length == 8 && item.index == index.substr(0, 8)) {
          result = item.targetPath;
        }
      });
      return result;
    },
    setActiveIndexPath: function () {
      let resultUrl = this.$route.name;
      let index2 = resultUrl.lastIndexOf("/");
      // 此处是刷新时，可能有多层路由，截取需要的路由
      if (index2 > -1) {
        resultUrl = resultUrl.substr(0, index2);
      }
      this.activeIndexPath = resultUrl;
    },
    getCurPage: function () {
      var url = window.location.href;
      let index1 = url.indexOf(".html");
      let subUrl = url.substr(0, index1);
      let index2 = subUrl.lastIndexOf("/");
      let resultUrl = subUrl.substr(index2 + 1, subUrl.length - 1);
      return resultUrl;
    },
    getCrumbByIndex (targetIndex) {
      var result = '';
      this.originalMenuData.forEach(item => {
        if (item[0] == targetIndex) {
          result = item[2];
        }
      });
      return result;
    },
    logOut () {
      this.$confirm('确认登出？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        closeOnClickModal: false,
        customClass: "confirmMessageBox",
        type: 'warning'
      }).then(() => {
        this.$fetchPost("/api/v1/logout").then(response => {
          if (response) {
            this.$message({
              showClose: true,
              message: '登出成功',
              type: 'success'
            });
            setTimeout(() => {
              this.$root.loadView('login', "_self", null, "get");
            }, 1000)

          }
        });
      }).catch(() => {

      });
    }
  },
  watch: {
    '$route': function (to, from) {
      console.log(to)
    }
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      // 判断用户是否登录 
      if (vm.$root.userInfo.userID) {

        next(true);
        vm.$root.isPageShow = true;
      } else {
        vm.$root.loadView('login', "_self", null, "get");
      }
    });
  }
};
</script>
<style lang="stylus" scoped>
.menu_container {
  .menu_tip {
    color: #fff;
    background: #fb6149;
    height: 36px;
    line-height: 36px;
    font-size: 13px;

    .menu_tip_row {
      width: 1200px;
      margin: auto;
      text-align: right;
    }
  }

  .menu_wapper {
    border-bottom: 3px solid #ddd;
    background: #fff;

    .menu_row {
      width: 1200px;
      margin: auto;
      display: flex;
      align-items: center;

      .menu_title {
        font-size: 24px;
        color: #666;
        letter-spacing: 2px;
        font-weight: 700;
        display: inline-block;
        padding-right: 30px;
      }

      .el-menu.el-menu--horizontal {
        border-bottom: 0;

        /deep/ .el-submenu.is-active .el-submenu__title {
          border-bottom: 0 !important;
        }
      }
    }
  }

  .breadcrumb_row {
    width: 1200px;
    margin: auto;
    color: #666;
    padding: 5px;
    padding-left: 50px;
    letter-spacing: 1px;
  }
}
</style>
