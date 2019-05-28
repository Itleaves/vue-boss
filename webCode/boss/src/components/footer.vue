<template>
    <ul class="footer">
        <li><router-link to="/home">首页</router-link></li>
        <li><router-link to="/worklist">职位</router-link></li>
        <li><router-link to="/my">我的</router-link></li>
    </ul>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
    ul li{
        list-style: none;
    }

    .footer{
        display: flex;
        position: fixed;
        bottom: 0;
        width: 100%;
        border-top: 1px solid #ccc;
        z-index: 12;
        background-color: white;
    }

    .footer li{
        flex: 1;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-weight: 900;
    }
</style>