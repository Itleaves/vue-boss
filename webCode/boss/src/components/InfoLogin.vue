<template>
    <div class="l_content">
        <div class="phone"><span class="inc">&#xe602;</span><input type="text" placeholder="手机号"></div>
        <div class="sliding_block">
            <span>请按住滑块，拖动到最右边</span>
            <div class="bck">》</div>
        </div>
        <div class="pwd">
            <span class="inc">&#xe605;</span>
            <input class="info_ipt" type="text" placeholder="短信验证码"><em class="vline"></em>
            <a>发送验证</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InfoLogin"
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

    .pwd a{
        line-height: 38px;
        font-size: 14px;
        color:#5dd5c8 ;
    }
    input{
        border: 0;
        outline: 0;
        height: 38px;
        width: 80%;
    }
    .sliding_block{
        font-size: 14px;
        background-color: #efefef;
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

    .info_ipt{
        width: 50%;
    }
</style>