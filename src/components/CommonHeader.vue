<template>
    <div class="header-container">
        <div class="l-content">
            <el-button style="margin-right: 20px;" @click="handleMenu" icon="el-icon-menu" size="mini">
                <!-- 面包屑 -->
            </el-button>
            <!-- <span class="text">首页</span> -->
            <el-breadcrumb separator="/">
                    <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">
                        {{ item.label }}
                    </el-breadcrumb-item>
                   
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown @command="handleClick">
                    <span class="el-dropdown-link">
                    <img class="user" src="../assets/img/user.png" alt="">
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item command="cancel">退出</el-dropdown-item>
                    </el-dropdown-menu>
            </el-dropdown>

        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import Cookie from 'js-cookie'
export default {
    data(){
        return{}
    },
    methods:{
        handleMenu(){
            this.$store.commit("collapseMenu")
        },
        handleClick(command){
            if(command === 'cancel'){
                //清除token信息
                Cookie.remove('token')
                //清除Menu
                Cookie.remove('menu')
                this.$router.push('/login')
            }
            
        }
    },
    computed:{
        ...mapState({
            tags:state => state.tab.tabslist
        })
    },
}
</script>
<style lang="less" scoped> 
.header-container{
    padding: 0 20px;
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text{
        font-size: 14px;
        color: #fff;
        margin-left: 10px;
    }
    .r-content{
        .user{
            height: 40px;
            width: 40px;
            border-radius: 50%;
        }
    }
    .l-content{
        display: flex;
        align-items: center;
        .el-breadcrumb__item{
            .el-bread__inner{
                font-weight: normal;
                &.is-link{
                    color: #666;
                }
            }
            // &:last-child{
            //     .el-breadcrumb__inner{
            //         color: #fff;
            //     }
            // }
        }
    }
}
</style>