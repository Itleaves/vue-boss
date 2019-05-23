<template>
    <div>
        <h3 class="title">注册BOSS直聘</h3>
        <Registerinfo></Registerinfo>
        <div class="l_but" @click="postUserAction" >注册</div>
        <div class="r_join">
            <input type="checkbox">
            <span class="l_join">我同意用户协议<router-link to="/">直接登录</router-link></span>
        </div>
    </div>
</template>

<script>
    import {mapState,mapActions,mapGetters} from 'vuex';
    import Registerinfo from "../components/Registerinfo";
    export default {
        name: "Register",
        data(){
            return{

            }
        },
        watch:{
            "$store.state.isReg":function (newVal) {
                if(newVal){
                    this.$store.commit('CHANGEREGSTATE',{isReg:null,errMsg:null});
                    this.$router.replace("/")
                }else {
                    if(this.$store.state.errMsg){
                        alert(this.$store.state.errMsg)
                    }
                    this.$store.commit('CHANGEREGSTATE',{isReg:null,errMsg:null});
                }
            }
        },
        methods:{
            ...mapActions(['postUserAction'])
        },
        components:{
            Registerinfo,
        },
        computed:{//mapState函数会返回一个对象
            ...mapState(['regInfo']),//获取regInfo
            ...mapGetters(['errMsg']),//获取errMsg
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
        margin-bottom: 30px;
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

    .r_join{
        margin-top: 20px;
        font-size: 14px;
        height: 20px;
        line-height: 20px;
    }

    .r_join a{
        color: #18c3b1;
    }
</style>