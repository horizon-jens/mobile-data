<template>
  <div class="login">
    <div class="form">
      <h1 class="title">数据管理</h1>
      <van-form @submit="onSubmit">
        <van-field
          v-model="uid"
          :left-icon="require('../assets/ic_user.png')"
          name="工号"
          placeholder="请输入工号"
        />
        <van-field
          v-model="pwd"
          :left-icon="require('../assets/ic_cord.png')"
          :right-icon="icon"
          :type="type"
          name="密码"
          placeholder="请输入密码"
          @click-right-icon="tooglePwd"
        />
        <div class="btn-box">
          <van-button block color="#163769" :disabled="!disable">登录</van-button>
        </div>
      </van-form>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
import { Field, Form, Button } from "vant";

export default {
  name: "login",
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    [Form.name]: Form
  },
  data() {
    return {
      uid: "",
      pwd: "",
      type: "password",
      icon: "closed-eye"
    };
  },
  computed: {
    disable() {
      return this.uid && this.pwd;
    }
  },
  methods: {
    onSubmit() {
      console.log(11)
      this.$router.push({
        name: "home"
      });
      // this.$request("/pub/cert", "post", {
      //   uid: this.uid,
      //   pwd: md5(this.pwd)
      // }).then(res => {
      //   if (res.code === 200) {
      //     sessionStorage.setItem("token", res.body["X-Token"]);
      //     let role = null;
      //     res.body.roles.forEach(item => {
      //       if (item.role.id === "phis.51") {
      //         role = item.id;
      //         sessionStorage.setItem("doc", qs.stringify(item));
      //       }
      //     });
      //     if (!role) {
      //       this.$toast("当前账号没有住院医生权限！");
      //       return;
      //     }
      //     sessionStorage.setItem("role", role); // 8977 测试角色 医生
      //     this.$router.push({
      //       name: "home"
      //     });
      //   } else if (res.code === 501) {
      //     this.$toast("密码错误！");
      //   } else if (res.code === 503) {
      //     this.$toast("工号错误！");
      //   }
      // });
    },
    tooglePwd() {
      if (this.type === "password") {
        this.type = "text";
        this.icon = "eye";
      } else if (this.type === "text") {
        this.type = "password";
        this.icon = "closed-eye";
      }
    }
  }
};
</script>

<style scoped lang="less">
.login {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    -45deg,
    rgba(41, 121, 255, 1),
    rgba(84, 148, 255, 1)
  );
}
.form {
  position: relative;
  z-index: 2;
  margin: 0 auto;
  width: 320px;
  height: 320px;
  font-size: 14px;
  padding-top: 100px;
}
.title{
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 4px;
  color: #fff;
  padding-bottom: 30px;
}
.login /deep/ .van-cell{
  background: transparent;
}
.login /deep/ .van-field__control{
  color: #fafafa;
}
.login /deep/ .van-field__right-icon{
  color: #fafafa;
}
.btn-box{
  padding-top: 30px;
}
.content {
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 400px;
  background: url("../assets/bg_homepage.png") right bottom no-repeat;
  background-size: 350px;
}

</style>
