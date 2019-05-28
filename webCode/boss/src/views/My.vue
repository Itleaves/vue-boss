<template>
    <div class="my_warp">
        <div class="my_title">
            <img src="https://img.bosszhipin.com/beijin/mcs/useravatar/20190428/628155d8e218dc96e7f62129b01f9bcbcfcd208495d565ef66e7dff9f98764da_s.jpg" class="avatar">
            <h3>黄耀东<span style="color: white">&#xe634;</span></h3>
            <p>13882041244</p>
            <p>
                <span>应届生</span><em class="vline"></em>
                <span>大专学历</span><em class="vline"></em>
                <span>离职-随时到岗</span>
            </p>
        </div>

        <div class="my_item">
            <div>
                <p class="my_labt"><em class="vline"></em>个人优势<span class="my_icon">&#xe501;编辑</span></p>
                <p class="my_lab">666</p>
            </div>

            <div>
                <p class="my_labt"><em class="vline"></em>期望职位<span class="my_icon">&#xe501;编辑</span></p>
                <p class="my_lab">
                    <span>web前端</span><em class="vline"></em>
                    <span>面议</span><em class="vline"></em>
                    <span>互联网</span><em class="vline"></em>
                    <span>成都</span>
                </p>
            </div>

            <div>
                <p class="my_labt"><em class="vline"></em>实习经历<span class="my_icon">&#xe501;编辑</span></p>
            </div>

            <div>
                <p class="my_labt"><em class="vline"></em>项目经历<span class="my_icon">&#xe501;编辑</span></p>
            </div>

            <div>
                <p class="my_labt"><em class="vline"></em>教育经历<span class="my_icon">&#xe501;编辑</span></p>
                <p class="my_lab">
                    <span>四川职业技术学院</span>
                    <span>2016-2019</span>
                </p>
                <p class="my_lab">
                    <span>软件技术</span><em class="vline"></em>
                    <span>大专</span>
                </p>

            </div>

        </div>


        <div class="quit" @click="outchange()">退出登录</div>

        <Footer></Footer>
    </div>

</template>

<script>
    import Footer from '@/components/footer.vue'
    export default {
        name: "My",
        components:{
            Footer
        },
        methods:{
            outchange(){
                alert("您确定要退出吗？")
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    .my_warp{
        overflow: hidden;
        font-family: font_f;
    }
    .my_title{
        width: 100%;
        padding-top: 10px;
        background: #5ed5c8;
        position: fixed;
        z-index: 20;
    }
    .my_title p{
        font-size: 14px;
    }

    .my_title img{
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }

    .my_item{
        margin-top: 160px;
        text-align: left;
    }
    .my_item div{
        border-bottom: 1px solid #d9d9d9;
        min-height: 30px;
        line-height: 30px;
    }

    .vline{
        display: inline-block;
        width: 1px;
        height: 12px;
        vertical-align: middle;
        background: cadetblue;
        margin: 0 10px;
    }
    .my_lab{
        text-indent: 20px;
        font-size: 14px;
    }
    .my_labt{
        font-weight: bold;
    }

    .my_icon{
        color: #00c2b3;
        float: right;
        margin-right: 20px;
        font-size: 14px;
    }

    .quit{
        height: 36px;
        width: 60%;
        margin: 0 auto;
        background: red;
        line-height: 36px;
        border-radius: 18px;
        margin-top: 20px;
        color: white;
    }
</style>