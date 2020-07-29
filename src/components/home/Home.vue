<template>
  <div>
    <div class="home_bg">
      <img src="~assets/image/home_background.png" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  mounted: function () {
    this.init();
  },
  methods: {
    init: function () { }
  },

};
</script>
<style lang="stylus" scoped>
.home_bg {
  width: 100%;
  height: 100%;
  position: relative;
  top: -10px;
}
</style>
