<template>
    <el-form ref="form"  class="login-container" :model="form" :rules="rules">
        <h3 class="login_title">系统登录</h3>
        <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password" placeholder="Password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="submit" style="margin-left: 135px; margin-top: 20px;" type="primary">
                Login
            </el-button>
        </el-form-item>
    </el-form>
</template>
<script>
import  Mock  from 'mockjs'
import Cookie from 'js-cookie'
import { getMenu } from '@/api'
    export default{
        data(){
            return{
                form:{
                    username:'',
                    password:''
                },
                rules:{
                    username:[
                        {required:true,trigger:'blur',message:'Username'}
                    ],
                    password:[
                        {required:true,trigger:'blur',message:'Password'}
                    ]
                }
            }
        },
        methods:{
            submit(){
                //token信息
            //    const token = Mock.Random.guid()
            //    //Cookie保存token信息
            //    Cookie.set('token',token)
            this.$refs.form.validate((valid)=>{
                getMenu(this.form).then(({data})=>{
                    console.log(data)
                    if(data.code === 20000){
                        Cookie.set('token',data.data.token)
                        //data.data.menu
                        this.$store.commit('setMenu',data.data.menu)
                        this.$store.commit('addMenu',this.$router)
                        this.$message({
                            message: '登录成功！！！正在为你跳转~~~',
                            type: 'success'
                            });
                        this.$router.push('/home')
                    }else{
                        this.$message.error('错啦错啦~~~');
                    }
                })
            })          
               
            }
        }
    }
</script>
<style lang="less" scoped>
    .login-container{
        width: 350px;
        border: 1px solid #eaeaea;
        margin: 180px auto;
        padding: 35px 35px 15px 35px;
        background:#fff;
        border-radius: 15px;
        box-shadow: 0 0 25px rgba(128, 206, 230, 0.4);
        .login_title{
            text-align: center;
        }
    }
</style>