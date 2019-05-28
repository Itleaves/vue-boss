<template>
    <div class="l_content">
        <div class="phone"><span class="inc">&#xe602;</span><input :value="regInfo.name" @input="updateRegnName"  type="text" placeholder="手机号"></div>
        <div class="pwd"><span class="inc">&#xe60a;</span><input :value="regInfo.pwd" @input="updateRegnPwd" type="password" placeholder="密码"></div>
        <div class="sliding_block">
            <span>请按住滑块，拖动到最右边</span>
            <div class="bck">》</div>
        </div>
    </div>
    <!--@input="updateRegnName"-->
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "Registerinfo",
        methods:{
            updateRegnName(e){
                // var reg=/^1[34578]\d{9}$/;

                this.$store.commit('updateRegnName', {name:e.target.value})
                // if(reg.test(e.target.value)){
                //
                // }else {
                //     alert("请输入正确的手机号")
                // }
            },
            updateRegnPwd(e){
                this.$store.commit('updateRegnPwd', {pwd:e.target.value})
            }
        },
        computed:{//mapState函数会返回一个对象
            ...mapState(['regInfo']),//获取regInfo
        }
    }
</script>

<style scoped>
    .l_content{
        overflow: hidden;
        width: 90%;
        margin: 0 auto;
        padding-top: 10px;
    }
    .l_content div{
        height: 40px;
        border: 1px solid #e4e6ea;
        margin-top: 30px;
        float: left;
        width: 100%;
        font-family: font_f;
        line-height: 38px;
    }
    .inc{
        float: left;
        line-height: 38px;
        text-indent: 10px;

    }
    .pwd{
        margin-top:30px;
    }
    input{
        border: 0;
        outline: 0;
        height: 38px;
        width: 80%;
    }
    .sliding_block{
        font-size: 14px;
        background-color: #e5e5e5;
        position: relative;
    }
    .sliding_block .bck{
        width: 48px;
        height: 38px;
        border: 1px solid #e5e5e5;

        position: absolute;
        background-color: white;
        top: -30px;
    }
</style>