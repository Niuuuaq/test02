<template>
   <div>
    <el-container>
  <el-aside width="auto">
    <common-aside-vue/>
  </el-aside>
  <el-container>
    <el-header>
      <common-header></common-header>
    </el-header>
    <common-tag/>
    <el-main>
        
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
   </div>
</template>
<script>
import CommonTag from '../components/CommonTag.vue'
import CommonAsideVue from "../components/CommonAside.vue"
import CommonHeader from "../components/CommonHeader.vue"
export default {
    data(){
        return{}
    },
    components:{
        CommonAsideVue,
        CommonHeader,
        CommonTag
    }
}
</script>
<style scoped>
    .el-header{
      padding: 0;
    }
</style>