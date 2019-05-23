<template>
    <div class="city">
        <div class="title">
            <a class="del" @click="roll()">X</a>
            选择城市
        </div>

        <div class="province">
                <ul>
                    <!--<li @click="handleselected(0)" :class='this.isclass'>热门城市</li> -->
                    <li v-for="(item,index) in Citylist.data" @click="handleselected(index)">
                        {{item.province}}
                    </li>

                </ul>
        </div>

        <div class="town">
                        <ul>
                            <li v-for="j in Citylist.data[num].city">
                                <a>{{j.name}}</a>
                            </li>
                        </ul>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "City",
        data() {
            return{
                isselected:true,
                isclass:'',
                Citylist:{},
                isroll:true,
                num:0//控制城市切换
            }
        },
        methods:{
            handleselected(num){
                this.num=num
                console.log(this.num)
                // this.isselected=this.isselected==true?false:true
                // this.isclass=this.isselected?'selected':''
                // console.log(this.isselected)
            },
            roll(){

            }
        },
        mounted() {
            axios
                .get('https://www.easy-mock.com/mock/5cb853861e0c4b6a69ef36f3/example/city')
                .then(response=>{
                    this.Citylist=response.data
                    console.log(response.data)
                    console.log(this.Citylist)
                })
                .catch(error=>{
                    console.log(error)
                    this.errored=true
                })
        },
    }
</script>

<style>
    .city{
        position: absolute;
        z-index: 20;
        width: 100%;
        height: 100%;
        top: 0;
        background-color: silver;
    }

    .title{
       height: 50px;
       background-color: white;
       line-height: 50px;
       text-align: center;
       font-size: 18px;
    }

    .province{
        background: white;
        display: flex;
        float: left;
        width: 50%;
        text-indent: 20px;
        text-align: left;
        overflow: hidden;
    }

    .town{
        background: #f8f8fa;
        display: flex;
        float: left;
        width: 50%;
        text-align: left;
        text-indent: 20px;
    }
   li{
        width: 100%;
        float: left;
        height: 60px;
        line-height: 60px;
    }

    .selected{
        width: 100%;
        background: #f8f8fa;
    }

    .del{
        height:50px;
        width: 50px;
        float: left;

    }



</style>