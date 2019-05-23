<template>
    <div>
      <h3 class="title">登录BOSS直聘</h3>
      <div class="sign-tab">
          <span @click="pwd_login(0)" :class="{'select':pwdselected}">密码登录</span>
          <span @click="info_login(1)" :class="{'select':infoselected}">短信登录</span>
      </div>
      <template v-if="this.anylogin==0">
          <PwdLogin></PwdLogin>
      </template>
      <template v-else-if="this.anylogin==1">
            <InfoLogin></InfoLogin>
      </template>
      <div class="l_but" @click="login">登录</div>
      <p class="l_join">没有账户 <router-link to="/register">立即注册</router-link></p>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import PwdLogin from '@/components/PwdLogin.vue'
    import InfoLogin from '@/components/InfoLogin.vue'
    export default {
        name: "Login",
        data(){
            return{
                anylogin:0,
                pwdselected: true,
                infoselected:false
            }
        },watch:{
            "$store.state.isLogin":function (newVal){
                if(newVal){
                    this.$store.commit('CHANGLONGIN',{isLogin:null,lerrMsg:null});
                    this.$router.replace("/home")
                }else {
                    if(this.$store.state.lerrMsg){
                        alert(this.$store.state.lerrMsg)
                    }
                    this.$store.commit('CHANGLONGIN',{isLogin:null,lerrMsg:null});
                }
            }
        },
        methods:{
            // 切换tab
            pwd_login(val){
                this.anylogin=this.anylogin=val
                this.pwdselected=this.pwdselected=true
                this.infoselected=this.infoselected=false
            },
            info_login(val){
                this.anylogin=this.anylogin=val
                this.infoselected=this.infoselected=true
                this.pwdselected=this.pwdselected=false
            },

            //提交commit
            login(){
                this.$store.dispatch("getUserAction");
            }
        },
        components:{
            PwdLogin,
            InfoLogin
        },
        computed:{//mapState函数会返回一个对象
            ...mapState(['lerrMsg']),//获取regInfo
        }

    }
</script>

<style scoped>
    .title {
        display: block;
        padding: 30px 0 30px 0;
        font-weight: 400;
        font-size: 26px;
        line-height: 32px;
        color: #5dd5c8;
        position: relative;
        text-align: center;
    }

    .sign-tab {
        width: 90%;
        white-space: nowrap;
        height: 50px;
        line-height: 50px;
        margin: 0 auto;
        margin-top: 30px;
    }

    .sign-tab span{
        width: 50%;
        display: block;
        float: left;
        border-bottom: 2px solid #f2f5f9;
    }
    .sign-tab .select{
        border-bottom: 2px solid seagreen;
        font-size: 16px;
    }


    .l_but{
        height: 40px;
        width: 90%;
        margin: 0 auto;
        background-color: #5dd5c8;
        line-height: 40px;
        color: white;
        font-size: 15px;
        margin-top: 40px;
    }
    .l_join{
        margin-top: 20px;
        font-size: 14px;
    }

    .l_join a{
        color: #18c3b1;
    }



</style>