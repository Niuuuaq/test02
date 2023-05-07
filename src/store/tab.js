import router from "@/router"
import Cookie from "js-cookie"
export default{
    state:{
        isCollapse:false,//控制菜单的展开和收起
        tabslist:[
            {
                path: "/",
                name: 'home',
                label: "首页",
                icon: "s-home",
                url: "Home/Home",
              }
        ] ,//面包屑的数据
        menu:[]
    },
    mutations:{
        //修改展开和收起的方法
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        //更新面包屑数据
        selectMenu(state,val){
           // console.log(val,'val')
           if(val.name!=='home'){
           const index = state.tabslist.findIndex(item => item.name === val.name)
           if(index === -1){
                state.tabslist.push(val)
           }
           }
        },
        //删除指定数据
        closeTag(state,item){
            //console.log(item,'item')
             const index = state.tabslist.findIndex(val=>val.name === item.val)
             state.tabslist.splice(index,1)
            
        },
        //设置menu数据
        setMenu(state,val){
            state.menu = val
            Cookie.set('menu',JSON.stringify(val))
        },
        //动态注册路由
        addMenu(state,router){
            //判断是否有缓存数据
            if(!Cookie.get('menu')) return
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            //组装动态数组的数据
            const menuArray = []
            menu.forEach(item => {
                if(item.children){
                   item.children = item.children.map(item=>{
                        item.component=()=>import(`../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                }else{
                        item.component=()=>import(`../views/${item.url}`)
                        menuArray.push(item)
                }
            })
            console.log(menuArray,'menuArray')
            //路由动态添加
            menuArray.forEach(item=>{
                router.addRoute('Main',item)
            })

        }
 }
}