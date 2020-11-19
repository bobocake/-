<template>
    <div>
        <mt-header title="啵啵开了家店">
        <router-link slot="left" to="/">
        <mt-button icon="back"></mt-button>
        </router-link>
        </mt-header>
        <div class="a">
            请登录后继续操作
        </div>
        <div class="b">
            <router-link to="/login">登录</router-link>
        </div>
        <div class="c">
            登录表示您已阅读并同意用户协议、隐私政策和联通统一认证服务条款
        </div>
        <div class="d">
            <router-link to="/register">注册</router-link>
        </div>
    </div>
</template>
<style scoped>
.mint-header{
  background-color:rgb(148, 143, 143);
}
a{
    color: black
}
.a{
    height: 70px;
    margin-top:50px;
    padding-left: 140px;
    font-size:19px;
    font-family: "华文行楷";
}
.b{
    height: 25px;
    width: 60px;
    margin-left: 160px;
    margin-bottom: 30px;
    border:2px solid rgb(148, 143, 143);
    border-radius: 5px;
    color: #fff;
    font-size:20px;
    padding-left: 25px;
    padding-top: 7px;
}
.c{
    font-size:13.5px;
    color: rgb(148, 143, 143);
    text-align: center;
}
.d{
    margin-top: 115px;
    font-size:18px;
    text-align: center;
}
</style>