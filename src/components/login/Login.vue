<template>
  <div class="view_container">
    <el-row class="page_container">
      <el-row class="login_title_row">
        <div class="login_title_img">
          <img src="@/assets/image/nLogo.gif" />
        </div>
        <div class="login_title_label">结算系统</div>
      </el-row>
    </el-row>
    <div class="main_container">
      <el-row class="login_main_row">
        <el-col :span="14" class="login_main_img">
          &nbsp;
        </el-col>
        <el-col :span="10" class="login_option">
          <el-col :span="24" class="person_login_title">用户登录</el-col>
          <el-col :span="24">
            <div id="login_form">
              <el-form
                :model="loginForm"
                :rules="rules"
                ref="loginForm"
                label-width="0px"
              >
                <el-row style="overflow:hidden;">
                  <div>
                    <el-row>
                      <el-col :span="5" class="login_intput_text"
                        >账号：</el-col
                      >
                      <el-col :span="17">
                        <el-form-item prop="userID">
                          <el-input
                            v-model="loginForm.userID"
                            @keyup.enter.native="login"
                            placeholder="请输入您的用户名/手机号"
                          >
                          </el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="5" class="login_intput_text"
                        >密码：</el-col
                      >
                      <el-col :span="17">
                        <el-form-item prop="password">
                          <el-input
                            v-model="loginForm.password"
                            @keyup.enter.native="login"
                            type="password"
                            id="login_passowrd_input"
                            placeholder="请输入您的登录密码"
                            class="register_inputs"
                            :icon="icon"
                            :on-icon-click="showPwdClick"
                          >
                          </el-input>
                          <span class="forget_pwd" @click="toResetPwd"
                            >忘记密码？</span
                          >
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row style="margin-bottom: 12px;">
                      <el-col :span="5" class="login_intput_text"
                        >验证码：</el-col
                      >
                      <el-col :span="7" :offset="0">
                        <el-form-item prop="verificationCode">
                          <el-input
                            v-model="loginForm.verificationCode"
                            @keyup.enter.native="login"
                            class="register_inputs"
                          ></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <div style="height: 40px;margin-top: 18px;">
                          <img
                            class="showVerificationCode"
                            :src="src"
                            @click="changeVerificationCode"
                          />
                        </div>
                      </el-col>
                      <el-col :span="4">
                        <div
                          style="height: 40px;margin-top: 18px;line-height: 40px;text-align: center;font-size: 13px;color: #497ecc;"
                        >
                          <span @click="changeVerificationCode">换一张</span>
                        </div>
                      </el-col>
                    </el-row>

                    <el-row style="width:66.6%;margin:15px 0 0 25%;">
                      <el-col :span="12">
                        <label class="inline">
                          <el-checkbox
                            id="remb_me"
                            class="ace"
                            v-model="isRemember"
                            >记住密码</el-checkbox
                          >
                        </label>
                      </el-col>
                      <el-col :span="12" style="text-align: right;">
                        <label class="inline">
                          <el-checkbox
                            id="remb_me"
                            class="ace"
                            v-model="isAutoLogin"
                            >30天自动登录</el-checkbox
                          >
                        </label>
                      </el-col>
                    </el-row>
                  </div>
                </el-row>
                <div class="login-button-container" style="margin-top:5px;">
                  <el-row>
                    <el-col :span="16" :offset="6">
                      <div id="login_button">
                        <el-button
                          type="primary"
                          :disabled="submitDisabled"
                          @click="login()"
                          >立即登录</el-button
                        >
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-form>
            </div>
          </el-col>
        </el-col>
      </el-row>
    </div>

    <div @click="test">test</div>
    <el-button>123</el-button>
  </div>
</template>

<script>
// import * as types from '../store/types'
// 引入jsencrypt;
import { JSEncrypt } from "jsencrypt";
export default {
  data() {
    return {
      loginForm: {
        userID: "",
        password: "",
        verificationCode: ""
      },
      src: "",
      icon: "",
      submitDisabled: false,
      isRemember: false,
      isAutoLogin: false,
      rules: {
        userID: [
          { required: true, message: "用户名/手机号不可为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不可为空", trigger: "blur" }]
      }
    };
  },
  mounted: function() {},
  methods: {
    changeVerificationCode: function() {
      // this.src = process.env.BASE_API + "/showCheckCode" + "?st=" + (new Date()).valueOf();
    },
    toResetPwd: function() {},
    showPwdClick: function() {},
    login: function() {
      var self = this;
      this.$fetchPost("/api/v1/logon", this.loginForm).then(response => {
        if (response) {
          this.$root.loadView("home", "_self", null, "get");
        }
      });
    },
    test: function() {
      let publicKey =
        "\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkWEMXmOfRmeFbmrWLyUM\nicxnY1ptuo2N2L/uKupD8EDvWXwTw9YBiZiPgXd0YvrW+5EDOX/AdQ/zVIlUCLzo\n7fY9M1vGv+pl7Y6mvQEV99sr1fapVmXEMVvCz8xR1360BuI4AZuiIfaqfsKxmyvx\nhEUkKS39rT3ocZYiGwR3UpBgyN1rCMx3oCbHrkpbXj2BuznP9aMVBq1ESSYKodAv\nQzrL9pgOU9DfH8PRLQb42LBRCYOMEZUBboSSMrRN4ODCkMTOnWxZEMW34aZ0hI9o\n4zHHrLAs8wGKZz9HUsh3TSiSnzslhyC1l14HWLV+vtj0x9yQiktU1KeIeAQ8rOE2\nLwIDAQAB\n";
      let Encrypt = new JSEncrypt();
      Encrypt.setPublicKey(publicKey);
      let pwd = Encrypt.encrypt("123456");
      console.log(pwd);

      let pwd1 = Encrypt.encrypt("123456");
      console.log(pwd1);
    }
  }
};
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
.page_container {
  background: #fff;
}

.login_main_img {
  background-image: url('~assets/image/login_background.png');
  background-size: 100% 100%;
}
</style>
<style scoped lang="stylus" rel="stylesheet/stylus"></style>
