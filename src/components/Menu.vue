<template>
  <div>
    <el-menu
      class="el-menu-demo"
      style="top: -5px;"
      :default-active="activeIndex"
      mode="horizontal"
      @select="onMenuItemClick"
      active-text-color="#ffffff"
    >
      <el-menu-item index="margin">保证金管理</el-menu-item>
      <el-menu-item index="2">实盘仿真</el-menu-item>
      <el-menu-item index="6">投资理财</el-menu-item>
      <el-menu-item index="12">基金评估</el-menu-item>
      <el-menu-item index="13">特色交易</el-menu-item>
      <el-menu-item index="8">哈勃观察</el-menu-item>
      <el-menu-item index="4">百宝箱</el-menu-item>
      <el-menu-item index="3">精品荟</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "Menu",
  data: function() {
    return {
      activeIndex: "2"
    };
  },
  created: function() {
    this.setActiveIndex();
  },
  methods: {
    onMenuItemClick: function() {
      this.$root.loadView("margin", "_self", null, "get");
    },
    toTrunTable: function() {
      this.$router.push({ name: "turntable" });
    },
    toConfig: function() {
      this.$router.push({ name: "config" });
    },
    setActiveIndex: function() {
      var url = window.location.href;
      let index1 = url.indexOf(".html");
      let subUrl = url.substr(0, index1);
      let index2 = subUrl.lastIndexOf("/");
      let resultUrl = subUrl.substr(index2 + 1, subUrl.length - 1);
    }
  }
};
</script>
