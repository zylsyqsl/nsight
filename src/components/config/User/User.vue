<template>
  <div class="main_container">
    <div class="router_view">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  created: function () {
    this.$router.push({ name: "user/index" });
  },
  mounted: function () {
    this.init();
  },
  methods: {
    init: function () { 
    }
  }
};
</script>
<style lang="stylus" scoped>
.container {
  padding: 0.1rem;
}
</style>
