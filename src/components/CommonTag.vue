<template>
    <div class="tabs">
        <el-tag
        v-for="(item,index) in tags"
        :key="item.path"
        :closable="item.name !== 'home'"
        :effect="$router.name === item.name ? 'dark':'plain'"
        @click="changeMenu(item)"
        @close="handleClose(item,index)"
        size="small"
        >
        {{ item.label }}
  </el-tag>
    </div>
</template>
<script>
import { time } from 'echarts'
    import {mapState,mapMutations} from 'vuex'
    export default{
        name:'CommmonTag',
        data(){
            return {}
        },
        computed:{
            ...mapState({
                tags:state => state.tab.tabslist
            })
        },
       methods:{
        ...mapMutations(['closeTag']),
        changeMenu(item){
            //console.log(item)
            this.$router.push({name:item.name})
        },
        handleClose(item,index){
            this.closeTag(item)
           const length = this.tags.length
            //删除之后跳转逻辑
            if(item.name !== this.$route.name){
                return
             }
             if(index === length){
                this.$router.push({
                    name:this.tags[index-1].name
                })
             }else{
                this.$router.push({
                    name:this.tags[index-1].name
                })
             }
        }
       }
    }
</script>
<style lang="less" scoped>
    .tabs{
        padding: 15px;
        .el-tag{
            margin-right: 15px;
            cursor: pointer;
        }
    }
</style>