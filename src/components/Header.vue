 
<style>
</style>
<template >
  <div id="publicHead"
       v-cloak>
    <el-row class="publicHead_container">
      <div class="invest_guide_box"
           @click="cancelGuide">
        <div style="width: 1200px;margin: 0 auto;position: relative;">
          <img src="~assets/images/w/jjpg_guide.png" />
        </div>

      </div>
      <el-row class="head_menu"
              style="background: #0d7dfc;    width: 1200px;margin: 0 auto;position: relative;">
        <el-col :span="21"
                style="height:70px;display: flex;justify-content: space-between;align-items: flex-end;">

          <div class="head_menu_col">
            <img src="~assets/images/w/nLogo.gif"
                 class="logo_img"
                 @click="toHome" />
            <img src="~assets/images/w/title.png"
                 class="logo_img"
                 @click="toHome"
                 style="width: 180px;position: relative;top: 5px;left: 15px;" />
          </div>

          <div style="margin-left: 10px;">

          </div>
        </el-col>
        <el-col :span="3"
                style="height:70px;line-height:70px;text-align: right;">
          <img src="~assets/images/w/icon_27.png"
               class="head_icon"
               @click="toActivity">
          <template v-if="isLogin">
            <span style="cursor: pointer; display: inline-block; padding-left: 10%;">
              <el-popover placement="bottom-end"
                          trigger="hover">
                <ul class="head_list">
                  <li @click="toPersonal">个人中心</li>
                  <li @click="logout">退出登录</li>
                  <li @click="mdfPwd">修改密码</li>
                </ul>
                <img src="~assets/images/w/fixed_icon_01.png"
                     slot="reference"
                     class="head_user_img">
              </el-popover>
            </span>
          </template>
          <template v-if="!isLogin">
            <span style=" cursor:pointer;color: #fff; padding-left: 10%;"
                  @click="toLogin">登录</span>
            <span style="color: #fff;">/</span>
            <span @click="showRegisterDialog"
                  style=" cursor:pointer; color: #fff;">注册</span>
          </template>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template> 
<script> 
export default {
  data: function () {
    return {
      userName: '佑祺'
    }
  },
}
</script> 