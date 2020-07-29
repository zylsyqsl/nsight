import Vue from "vue";
import Vuex from "vuex";

import { $http, fetchGet, fetchPost } from "@/assets/js/axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    brokerList: "",
    exchangeList: ""
  },
  mutations: {
    setBrokerList: function(state, list) {
      state.brokerList = list;
    },
    setExchangeList: function(state, list) {
      state.exchangeList = list;
    }
  },
  actions: {
    sumbitBrokerList: function(context, cb) {
      let resultList = [];
      if (context.state.brokerList.length == 0) {
        fetchPost("api/v1/sq/bc9/template/getBroker").then(response => {
          if (response) {
            let list = response.getData(0);
            list.forEach(item => {
              var map;
              map = {
                value: item[0],
                label: item[1]
              };
              resultList.push(map);
            });
          }
          context.commit("setBrokerList", resultList);
          if (cb) {
            cb.apply(this);
          }
        });
      } else {
        if (cb) {
          cb.apply(this);
        }
      }
    },
    sumbitExchangeList: function(context, cb) {
      let resultList = [];
      if (context.state.exchangeList.length == 0) {
        fetchPost("api/v1/sq/bc9/template/getExchange").then(response => {
          if (response) {
            let list = response.getData(0);
            list.forEach(item => {
              var map;
              map = {
                value: item[0],
                label: item[1]
              };
              resultList.push(map);
            });
          }
          context.commit("setExchangeList", resultList);
          if (cb) {
            cb.apply(this);
          }
        });
      } else {
        if (cb) {
          cb.apply(this);
        }
      }

      // var resultList = [];
      // list.forEach(item => {
      //   var map;
      //   map = {
      //     value: item[0],
      //     label: item[1]
      //   };
      //   resultList.push(map);
      // });
      // context.commit("setExchangeList", resultList);
    }
  }
});

export default store;
