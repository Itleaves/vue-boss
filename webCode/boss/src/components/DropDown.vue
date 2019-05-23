<template>
    <li>
        <ul class="dropitem">
            <li v-for="item in Droplist[dropnum].option">
                <a href="/c101270100-p100101/" class="selected" ka="sel-exp-0">{{item.text}}</a>
            </li>
        </ul>
    </li>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "DropDown",
        props:{
            dropnum:Number
        },
        data:function () {
            return{
                Droplist:{},
            }
        },
        mounted() {
            axios
                .get('https://www.easy-mock.com/mock/5cc6b14cd9eb3f1350a18c60/shuju/123')
                .then(response=>{
                    this.Droplist=response.data
                    // console.log(response.data)
                    console.log(this.Droplist)
                })
                .catch(error=>{
                    console.log(error)
                    this.errored=true
                })
        },

    }
</script>

<style>
    .dropitem{
        position: absolute;
        z-index: 30;
        width: 100%;
    }
    .dropitem li{
        height: 60px;
        text-align: left;
        line-height: 60px;
        font-size: 15px;
        text-indent:20px;
        background-color: white;
    }
    .dropitem li:hover{
        background-color: #f8f8fa;
    }

</style>