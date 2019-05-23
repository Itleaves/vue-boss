<template>
    <div id="wrap">

        <div id="header">
            <div class="serach-bar">
                <div class="top-search">
                    <form action="/job_detail/" method="get">
                        <input name="city" value="101010100" type="hidden">
                        <input name="source" value="10" type="hidden">
                        <p class="ipt-wrap">
                            <a href="/home" class="icon-home"><img src="https://static.zhipin.com/zhipin/v151/h5/wap/images/icon-home.png"></a>
                            <a class="city-text">成都</a>
                            <input type="search" ka="search-keyword" name="query" autocomplete="off" class="ipt-search" :value="this.keyname" placeholder="搜索职位">
                            <button type="submit" class="btn btn-search" ka="search-btn">搜索</button>
                            <i class="icon-close" style="display: inline;"></i>
                        </p>
                    </form>
                    <!--<City></City>-->
                </div>
            </div>

            <div class="filter-bar">
                <ul>
                    <li @click="handledrop(0)">经验</li>
                    <li @click="handledrop(1)">学历</li>
                    <li @click="handledrop(2)">薪资</li>
                    <li @click="handledrop(3)">规模</li>
                    <li @click="handledrop(4)">融资</li>
                </ul>
            </div>
            <div class="tab" v-if="this.isShow">
                <ul>
                    <DropDown :dropnum="this.dropnum"></DropDown><!--筛选列表组件-->
                </ul>
            </div>
        </div>

        <div>
            <div class="job-list">
                <ListItem :keyname="this.keyname"></ListItem><!--职位选项组件-->
            </div>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
    import axios from 'axios'
    import ListItem from '@/components/ListItem.vue'
    import DropDown from '@/components/DropDown.vue'
    import City from "../components/City";
    import Footer from '@/components/footer.vue'

    export default {
        data:function () {
            return{
                worklist:{},
                isShow:false,
                dropnum:1,
                target:1,
                keyname:this.$route.query.key
            }
        },
        mounted() {
            axios
                .get('https://www.easy-mock.com/mock/5cb853861e0c4b6a69ef36f3/example/boss')
                .then(response=>{
                    this.worklist=response.data
                    console.log(response.data)
                    console.log(this.worklist)
                })
                .catch(error=>{
                    console.log(error)
                    this.errored=true
                })
        },
        components:{
            City,
            ListItem,
            DropDown,
            Footer
        },
        methods:{
            handledrop(numb){
                this.dropnum=this.dropnum=numb
                this.target=this.target=numb
                this.isShow=this.isShow==true?false:true
                // console.log(this.dropnum)
                // console.log(this.target)
            }
        }
    }


</script>

<style>
    .text{
       text-align: left;
    }
    .tab{
        width: 100%;
        background-color: seagreen;

    }
    #header{
        position: fixed;
        z-index: 20;
    }

    .job-list ul{
      position: absolute;
      top: 100px;
    }

</style>