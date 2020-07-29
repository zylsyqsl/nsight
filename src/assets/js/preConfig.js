import Vue from "vue";
import "@/theme/element/index.css";
import elementUI from "element-ui";
import $ from "jquery";
import GlobalComponent from "@/components/tools/index";
import { imgErrMixin } from "./imgErr";
import localforage from "localforage";

import "@/assets/css/common.css";
import { getEnumLabel } from "@/assets/js/enumLabel.js";
// 导入对应的vuex文件

import { $http, fetchGet, fetchPost } from "@/assets/js/axios";

Vue.use(elementUI);
Vue.config.productionTip = false;
GlobalComponent.install(Vue);
Vue.prototype.$http = $http;
Vue.prototype.$fetchPost = fetchPost;
Vue.prototype.$fetchGet = fetchGet;
Vue.prototype.$getEnumLabel = getEnumLabel;

$(document).attr("title", "结算系统");

export const globalMixin = {
  mixins: [imgErrMixin],

  data() {
    return {
      userInfo: {},
      scope: {},
      userDataLoaded: false,
      isPageShow: false
    };
  },
  created() {
    this.getBaseInfo();
    this.buildView();
  },
  methods: {
    getBaseInfo() {
      try {
        let resultUrl = this.$route.name;
        if (resultUrl != "login") {
          // 获取用户基本信息
          this.$fetchPost("/api/v1/sq/adm/auth/getSessionUser").then(
            response => {
              if (response) {
                if (response.getData(0).length > 0) {
                  this.userInfo = {
                    userID: response.getData(0)[0][0],
                    userName: response.getData(0)[0][1]
                  };
                }
                this.userDataLoaded = true;
              }
            }
          );
        }
      } catch (err) {
        console.log(err);
      }
    },
    buildView: function() {
      let url = window.location.href;
      let index1 = url.indexOf(".html");
      let subUrl = url.substr(0, index1);
      let index2 = subUrl.lastIndexOf("/");
      let resultUrl = subUrl.substr(index2 + 1, subUrl.length - 1);
      if (resultUrl) {
        this.loadScope(resultUrl + ".html", scope => {
          this.scope = scope;
          console.log(this.scope);
        });
      }
    },
    loadView(uid, target, scope, method, subRouter) {
      var tempUrl = uid + ".html";
      if (method == "get") {
        var hashkey = this.makeHashKey();
        let url = tempUrl + (subRouter ? "#/" + subRouter : "") + "#" + hashkey;
        // let url = tempUrl + "#/" + subRouter;
        this.setScope(tempUrl, hashkey, scope, function() {
          window.open(url, target ? target : "_self");
        });
      } else {
        this.loadByForm(tempUrl, target, scope);
      }
    },
    loadByForm(url, target, scope) {
      var hashkey = this.makeHashKey();
      let h_url = url + "#" + hashkey;

      this.setScope(url, hashkey, scope, function() {
        var form = $("<form style='display: none;'></form>")
          .attr("id", "form_" + new Date().getTime())
          .attr("action", h_url)
          .attr("method", "POST")
          .attr("target", target ? target : "_self");
        form.appendTo($(document.body));

        form.submit();
        form.remove();
      });
    },
    setScope(url, hashkey, scope, callback) {
      var rViewId = url;
      if (!window.location.hash) {
        window.location.hash = this.makeHashKey();
      }
      var windowKey =
        "VIEW-" + (hashkey ? "#" + hashkey : window.location.hash);
      var itemKey = windowKey + "-" + rViewId;
      localforage.getItem(itemKey).then(function(itemValue) {
        if (itemValue) {
          itemValue["scope"] = scope;
          localforage.setItem(itemKey, itemValue).then(function() {
            if (callback) {
              callback.apply(this);
            }
          });
        } else {
          if (scope) {
            itemValue = {};
            itemValue["scope"] = scope;
            localforage.setItem(itemKey, itemValue).then(function() {
              if (callback) {
                callback.apply(this);
              }
            });
          } else {
            if (callback) {
              callback.apply(this);
            }
          }
        }
      });
    },
    loadScope(url, callback) {
      var scope = {};
      var rViewId = url;
      if (!window.location.hash) {
        window.location.hash = this.makeHashKey();
      }
      //用户路由是hash模式下的匹配
      let tempHash = window.location.hash;
      let tempHashIndex = tempHash.lastIndexOf("#");
      let hashKey = tempHash.substr(tempHashIndex, tempHash.length - 1);

      // let hashKey = window.location.hash.replace("/", "");
      var windowKey = "VIEW-" + hashKey;
      var itemKey = windowKey + "-" + rViewId;
      try {
        localforage.getItem(itemKey).then(function(itemValue) {
          if (itemValue && itemValue.scope) {
            scope = itemValue.scope;
          }

          if (callback) {
            callback.apply(this, [scope]);
          }
        });
      } catch (e) {
        console.log(e);
      }
    },
    makeHashKey() {
      return "KS" + new Date().getTime();
    }
  }
};
