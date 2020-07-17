<template>
  <div class="view_container">
    <div class="main_container">
      <Vmenu></Vmenu>
      <div class="router_view">
        <router-view> </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Vmenu from "@/components/Menu";
export default {
  components: {
    Vmenu
  },
  data() {
    return {};
  },
  created: function() {
    this.$router.push({ name: "index" });
  },
  mounted: function() {
    this.init();
  },
  methods: {
    toTest() {
      this.$router.push("test");
    },
    init: function() {
      // this.$fetchPost("/sq/v1/bc9-pq/get_security_trading_day", {
      //   'tradeSystemId': "0001"
      // }).then(response => {
      //   if (response) {
      //     console.log(response);
      //   }
      // });
    }
  }
};
</script>
<style lang="stylus" scoped>
.container {
  padding: 0.1rem;
}
</style>
