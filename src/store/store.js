import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    brokerList: ""
  },
  mutations: {
    setBrokerList: function(state, list) {
      state.brokerList = list;
    }
  },
  actions: {
    sumbitBrokerList: function(context, list) {
      var resultList = [];
      list.forEach(item => {
        var map;
        map = {
          value: item[0],
          label: item[1]
        };
        resultList.push(map);
      });
      context.commit("setBrokerList", resultList);
    }
  }
});

export default store;
