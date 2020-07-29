<template>
  <div id="app"
       v-if="userDataLoaded"
       class="view_container">
    <div v-show="isPageShow">
      <router-view name="menu"></router-view>
      <router-view :key="$route.path"></router-view>
    </div>
  </div>
</template>

<script> 
export default {
  name: "App",
  computed: {
    //先加载页面，后显示页面
    //用户数据获得标志位，用户数据获取之后加载页面，在preConfig中控制
    userDataLoaded () {
      return this.$root.userDataLoaded;
    },
    //页面显示开关， 在menu中控制
    isPageShow () {
      return this.$root.isPageShow;
    }
  }
};
</script>

<style></style>
