<template>
    <div class="job-category">
        <dl v-for="item in worklist">
            <dt>
                <img :src='item.iconimg'>
                <div class="sub-name">
                    <h4>{{item.subName}}</h4>
                </div>
            </dt>

            <dd>
                <a v-for="j in item.career" @click="workhandle(j.name)">{{j.name}}</a>
            </dd>
        </dl>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "WorkIndex",
        // props: ['worklist'],

        data() {
            return{
                // wlist: {},
            }
        },
        watch: {
            // worklist(val) {
            //     this.wlist = val;
            // }
        },
        methods:{
            workhandle(val){
                this.$router.push({
                    path: 'worklist',
                    query: {
                        key: val
                    }
                })
            }
        },
        computed:{//mapState函数会返回一个对象
            ...mapState(['worklist']),//获取regInfo
        }
    }
</script>
<style scoped>

</style>