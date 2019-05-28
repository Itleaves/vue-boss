<template>
  <div class="home">

    <div class="home-banner">
      <p class="install">下载BOSS APP</p>
      <p>聊着找工作</p>
    </div>

    <div class="home-search">
      <div class="search">
        <form action="/job_detail/" method="get">
          <input name="city" type="hidden" value="101270100">
          <input name="source" type="hidden" value="10">
          <p class="ipt-wrap">
            <button type="submit" class="btn btn-search" ka="search-btn">搜索</button>
            <input type="search" ka="search-keyword" name="query" autocomplete="off" class="ipt-search" placeholder="搜索职位/公司">
            <i class="icon-close"></i>
          </p>
        </form>
      </div>
    </div>

    <div id="main">
      <!--<button @click="setdata">写入数据</button>-->
      <WorkIndex :worklist='this.worklist'></WorkIndex>
      <div class="btns"></div>
    </div>

    <Footer></Footer>
  </div>

</template>

<script>

import axios from 'axios'
import WorkIndex from '@/components/WorkIndex.vue'
import Footer from '@/components/footer.vue'

export default {
  data:function () {
      return{
          worklist:{}
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
    methods:{
        // setdata(){


    },
    components:{
        WorkIndex,
        Footer
    },
    created: function(){
        this.$store.dispatch("getworklistAction");
    }
}
</script>

<style>
  .home-search .search {
    float: none;
    padding: 0;
    position: fixed;
    width: 100%;
    top: 138px;
    z-index: 12;
  }


  .home-banner {
    width: 100%;
    height: 196px;
    display: block;
    background: url('https://static.zhipin.com/zhipin/v151/h5/wap/images/home-bg.png') center center no-repeat;
    color: #fff;
    font-size: 20px;
    text-align: center;
    -webkit-background-size: cover;
    background-size: cover;
    padding-top: 50px;
    position: fixed;
    z-index: 10;

  }

  .install{
    margin-bottom: 10px;
  }

  #main{
    overflow: hidden;
    top:196px;
  }

  .btns{
    height: 50px;
  }

</style>
