<template>
    <ul>
        <li class="item" v-for="i in Itemlist.data">
            <router-link to="/details">
            <a href="/job_detail/2ace3f9a41109f081XB70964FlM~.html" ka="job_list_1" data-itemid="1" data-lid="1sRQg8FKn00.search" data-index="0">
                <img :src='i.logo'>
                <div class="text">
                    <div class="title"><h4>{{keyname}}</h4><span class="salary">{{i.pay}}</span></div>
                    <div class="name">{{i.company}}</div>
                    <div class="msg"><em>{{i.region}}</em><em>{{i.experience}}</em><em>{{i.education}}</em></div>
                </div>
            </a>
            </router-link>
        </li>
        <li style="height: 50px"></li>
    </ul>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "ListItem",
        props: {
            keyname:String
        },
        data() {
            return{
                Itemlist:{},
            }
        },
        mounted() {
            axios
                .get('https://www.easy-mock.com/mock/5cb853861e0c4b6a69ef36f3/example/search')
                .then(response=>{
                    this.Itemlist=response.data
                    console.log(response.data)
                    console.log(this.Itemlist)
                })
                .catch(error=>{
                    console.log(error)
                    this.errored=true
                })
        },
    }
</script>

<style scoped>
    .item{
        width: 100%;
    }
    .title h4{
        text-align: left;
        overflow: hidden;
        text-overflow:ellipsis;
    }
</style>