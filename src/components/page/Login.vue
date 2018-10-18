<!--<template>-->
  <!--<div class="sign">-->
    <!--<div class="logo"><a href="/"><img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt="Logo"></a></div>-->
    <!--<div class="main">-->


      <!--<h4 class="title">-->
        <!--<div class="normal-title">-->
          <!--<a class="active">登录</a>-->
          <!--<b>·</b>-->
          <!--<a id="js-sign-up-btn" class="register">注册</a>-->
        <!--</div>-->
      <!--</h4>-->
      <!--<div class="js-sign-in-container">-->
        <!--<form id="new_session" action="/sessions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="5RK+HVp8if7enNxRWV5Pb1FyPQxP/hGZafuWVG7FTC/r25fM/OaBTUOfvjq4KRQ1MmSxgPf437fPiFvCTV7Odw==">-->

          <!--&lt;!&ndash; 正常登录登录名输入框 &ndash;&gt;-->
          <!--<div class="input-prepend restyle js-normal">-->
            <!--<input placeholder="手机号或邮箱" type="text" name="session[email_or_mobile_number]" id="session_email_or_mobile_number">-->
            <!--<i class="iconfont ic-user"></i>-->
          <!--</div>-->

          <!--&lt;!&ndash; 海外登录登录名输入框 &ndash;&gt;-->

          <!--<div class="input-prepend">-->
            <!--<input placeholder="密码" type="password" name="session[password]" id="session_password">-->
            <!--<i class="iconfont ic-password"></i>-->
          <!--</div>-->
          <!--<input value="false" type="hidden" name="session[oversea]" id="session_oversea">-->
          <!--<div>-->
            <!--<input id="sign-in-form-captcha-challenge" name="captcha[validation][challenge]" autocomplete="off" type="hidden">-->
            <!--<input id="sign-in-form-captcha-gt" name="captcha[validation][gt]" autocomplete="off" type="hidden">-->
            <!--<input id="sign-in-form-captcha-validate" name="captcha[validation][validate]" autocomplete="off" type="hidden">-->
            <!--<input id="sign-in-form-captcha-seccode" name="captcha[validation][seccode]" autocomplete="off" type="hidden">-->
          <!--</div>-->
          <!--<div class="remember-btn">-->
            <!--<input type="checkbox" value="true" checked="checked" name="session[remember_me]" id="session_remember_me"><span>记住我</span>-->
          <!--</div>-->

          <!--<div class="forget-btn">-->
            <!--<b-dropdown id="ddown-buttons" text="登录遇到问题?" variant="link" class="m-2 dropcolor ">-->
              <!--<b-dropdown-item-button>用手机号重置密码</b-dropdown-item-button>-->
              <!--<b-dropdown-item-button>用邮箱重置密码</b-dropdown-item-button>-->
              <!--<b-dropdown-item-button>无法用海外手机号登录</b-dropdown-item-button>-->
              <!--<b-dropdown-item-button>无法用 Google 帐号登录</b-dropdown-item-button>-->
            <!--</b-dropdown>-->
          <!--</div>-->

          <!--<button class="sign-in-button" id="sign-in-form-submit-btn" type="button">-->
            <!--<span id="sign-in-loading"></span>-->
            <!--登录-->
          <!--</button>-->
        <!--</form>-->
        <!--&lt;!&ndash; 更多登录方式 &ndash;&gt;-->
        <!--<div class="more-sign">-->
          <!--<h6>社交帐号登录</h6>-->
          <!--<ul>-->

          <!--</ul>-->

          <!--<div class="weibo-geetest-captcha"></div>-->
        <!--</div>-->
      <!--</div>-->

    <!--</div>-->
  <!--</div>-->
<!--</template>-->
<!--<script>-->
  <!--export default {-->
    <!--name: "Login"-->
  <!--}-->
<!--</script>-->


<!--<style scoped>-->
  <!--.sign {-->
    <!--height: 100%;-->
    <!--min-height: 750px;-->
    <!--text-align: center;-->
    <!--font-size: 14px;-->
    <!--background-color: #f1f1f1;-->
  <!--}-->
  <!--.logo {-->
    <!--position: absolute;-->
    <!--top: 56px;-->
    <!--margin-left: 50px;-->
  <!--}-->
  <!--.main {-->
    <!--width: 400px;-->
    <!--margin: 100px auto 0;-->
    <!--padding: 50px 50px 30px;-->
    <!--background-color: #fff;-->
    <!--border-radius: 4px;-->
    <!--box-shadow: 0 0 8px rgba(0,0,0,.1);-->
    <!--vertical-align: middle;-->
    <!--display: inline-block;-->
  <!--}-->
  <!--.title {-->
    <!--font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;-->
    <!--margin: 0 auto 50px;-->
    <!--padding: 10px;-->
    <!--font-weight: 400;-->
    <!--color: #969696;-->
  <!--}-->
  <!--.active {-->
    <!--font-weight: 700;-->
    <!--color: #ea6f5a;-->
    <!--border-bottom: 2px solid #ea6f5a;-->
    <!--font-size: 20px;-->
  <!--}-->
  <!--.register{-->
    <!--font-size: 20px;-->
  <!--}-->
  <!--form {-->
    <!--margin-bottom: 30px;-->
  <!--}-->
  <!--.restyle {-->
    <!--margin-bottom: 0;-->
  <!--}-->
  <!--.input-prepend {-->
    <!--position: relative;-->
    <!--width: 100%;-->
  <!--}-->
  <!--.remember-btn {-->
    <!--float: left;-->
    <!--margin: 30px 0 ;-->
  <!--}-->
  <!--.forget-btn {-->
    <!--float: right;-->
    <!--position: relative;-->
    <!--margin: 15px 0;-->
    <!--font-size: 14px;-->
  <!--}-->
  <!--.more-sign {-->
    <!--margin-top: 50px;-->
  <!--}-->
  <!--.sign-in-button {-->
    <!--background: #3194d0;-->
    <!--margin-top: 20px;-->
    <!--width: 100%;-->
    <!--padding: 9px 18px;-->
    <!--font-size: 18px;-->
    <!--border: none;-->
    <!--border-radius: 25px;-->
    <!--color: #fff;-->
    <!--cursor: pointer;-->
    <!--outline: none;-->
    <!--display: block;-->
    <!--clear: both;-->
  <!--}-->
  <!--.dropcolor{-->
    <!--color: gray;-->
  <!--}-->
<!--</style>-->
