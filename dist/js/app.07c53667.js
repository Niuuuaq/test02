(function(){var e={1366:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var n=function(){var e=this,t=e._self._c;return t("el-row",[t("el-col",{staticStyle:{"padding-right":"10px"},attrs:{span:8}},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"user"},[t("img",{attrs:{src:a(8055),alt:""}}),t("div",{staticClass:"userinfo"},[t("p",{staticClass:"name"},[e._v("Admain")]),t("p",{staticClass:"access"},[e._v("超级管理员")])])]),t("div",{staticClass:"login-info"},[t("p",[e._v("上次登录时间："),t("span",[e._v("2023-4-15")])]),t("p",[e._v("上次登录地点："),t("span",[e._v("中国-河北-张家口")])])])]),t("el-card",{staticStyle:{"margin-top":"20px",height:"460px"}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},e._l(e.tableLabel,(function(e,a){return t("el-table-column",{key:a,attrs:{prop:a,label:e}})})),1)],1)],1),t("el-col",{staticStyle:{"padding-right":"10px"},attrs:{span:16}},[t("div",{staticClass:"num"},e._l(e.countData,(function(a){return t("el-card",{key:a.name,attrs:{"body-style":{display:"flex",padding:0}}},[t("i",{staticClass:"icon",class:`el-icon-${a.icon}`,style:{background:a.color}}),t("div",{staticClass:"detail"},[t("p",{staticClass:"price"},[e._v("￥"+e._s(a.value))]),t("p",{staticClass:"desc"},[e._v(e._s(a.name))])])])})),1),t("el-card",{staticStyle:{height:"280px"}},[t("div",{ref:"echarts1",staticStyle:{height:"280px"}})]),t("div",{staticClass:"graph"},[t("el-card",{staticStyle:{height:"260px"}},[t("div",{ref:"echarts2",staticStyle:{height:"260px"}})]),t("el-card",{staticStyle:{height:"260px"}},[t("div",{ref:"echarts3",staticStyle:{height:"240px"}})])],1)],1)],1)},r=[],o=(a(2329),a(7882)),s=a(347),l={data(){return{tableData:[],tableLabel:{name:"课程",todayBuy:"今日购买",monthBuy:"本月购买",totalBuy:"总购买"},countData:[{name:"今日支付订单",value:1234,icon:"success",color:"#2ec7c9"},{name:"今日收藏订单",value:210,icon:"star-on",color:"#ffb980"},{name:"今日未支付订单",value:1234,icon:"s-goods",color:"#5ab1ef"},{name:"本月支付订单",value:1234,icon:"success",color:"#2ec7c9"},{name:"本月收藏订单",value:210,icon:"star-on",color:"#ffb980"},{name:"本月未支付订单",value:1234,icon:"s-goods",color:"#5ab1ef"}]}},mounted(){(0,o.Yu)().then((e=>{const{tableData:t}=e.data.data;console.log(e),this.tableData=t;const a=s.S1(this.$refs.echarts1);var n={};const{orderData:r,userData:o,videoData:l}=e.data.data,i=Object.keys(r.data[0]),u={data:i};n.xAxis={data:r.date},n.yAxis={},n.legend=u,n.series=[],i.forEach((e=>{n.series.push({name:e,data:r.data.map((t=>t[e])),type:"line"})})),console.log(n),a.setOption(n);const c=s.S1(this.$refs.echarts2),d={legend:{textStyle:{color:"#333"}},grid:{left:"20%"},tooltip:{trigger:"axis"},xAxis:{type:"category",data:o.map((e=>e.date)),axisLine:{lineStyle:{color:"#17b3a3"}},axisLabel:{interval:0,color:"#333"}},yAxis:[{type:"value",axisLine:{lineStyle:{color:"#17b3a3"}}}],color:["#2ec7c9","#b6a2de"],series:[{name:"新增用户",data:o.map((e=>e.new)),type:"bar"},{name:"活跃用户",data:o.map((e=>e.active)),type:"bar"}]};c.setOption(d);const m=s.S1(this.$refs.echarts3),p={tooltip:{trigger:"item"},color:["#0f78f4","#dd536b","#9462e5","#a6a6a6","#e1bb22","#39c362","#3ed1cf"],series:[{data:l,type:"pie"}]};m.setOption(p)}))}},i=l,u=a(1001),c=(0,u.Z)(i,n,r,!1,null,"a1738a64",null),d=c.exports},2129:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var n=function(){var e=this,t=e._self._c;return t("el-form",{ref:"form",staticClass:"login-container",attrs:{model:e.form,rules:e.rules}},[t("h3",{staticClass:"login_title"},[e._v("系统登录")]),t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{attrs:{placeholder:"Username"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password",placeholder:"Password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),t("el-form-item",[t("el-button",{staticStyle:{"margin-left":"135px","margin-top":"20px"},attrs:{type:"primary"},on:{click:e.submit}},[e._v(" Login ")])],1)],1)},r=[],o=(a(2329),a(7634),a(680)),s=a(7882),l={data(){return{form:{username:"",password:""},rules:{username:[{required:!0,trigger:"blur",message:"Username"}],password:[{required:!0,trigger:"blur",message:"Password"}]}}},methods:{submit(){this.$refs.form.validate((e=>{(0,s.r7)(this.form).then((e=>{let{data:t}=e;console.log(t),2e4===t.code?(o.Z.set("token",t.data.token),this.$store.commit("setMenu",t.data.menu),this.$store.commit("addMenu",this.$router),this.$message({message:"登录成功！！！正在为你跳转~~~",type:"success"}),this.$router.push("/home")):this.$message.error("错啦错啦~~~")}))}))}}},i=l,u=a(1001),c=(0,u.Z)(i,n,r,!1,null,"efd9bf42",null),d=c.exports},2468:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return D}});var n=function(){var e=this,t=e._self._c;return t("div",[t("el-container",[t("el-aside",{attrs:{width:"auto"}},[t("common-aside-vue")],1),t("el-container",[t("el-header",[t("common-header")],1),t("common-tag"),t("el-main",[t("router-view")],1)],1)],1)],1)},r=[],o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tabs"},e._l(e.tags,(function(a,n){return t("el-tag",{key:a.path,attrs:{closable:"home"!==a.name,effect:e.$router.name===a.name?"dark":"plain",size:"small"},on:{click:function(t){return e.changeMenu(a)},close:function(t){return e.handleClose(a,n)}}},[e._v(" "+e._s(a.label)+" ")])})),1)},s=[],l=(a(2329),a(347),a(3822)),i={name:"CommmonTag",data(){return{}},computed:{...(0,l.rn)({tags:e=>e.tab.tabslist})},methods:{...(0,l.OI)(["closeTag"]),changeMenu(e){this.$router.push({name:e.name})},handleClose(e,t){this.closeTag(e);this.tags.length;e.name===this.$route.name&&this.$router.push({name:this.tags[t-1].name})}}},u=i,c=a(1001),d=(0,c.Z)(u,o,s,!1,null,"73542ea6",null),m=d.exports,p=function(){var e=this,t=e._self._c;return t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1",collapse:e.isCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[t("h3",[e._v(e._s(e.isCollapse?"后台":"通用后台管理系统"))]),e._l(e.noChildren,(function(a){return t("el-menu-item",{key:a.name,attrs:{index:a.name},on:{click:function(t){return e.clickMenu(a)}}},[t("i",{class:`el-icon-${a.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(a.label))])])})),e._l(e.hasChildren,(function(a){return t("el-submenu",{key:a.label,attrs:{index:a.label}},[t("template",{slot:"title"},[t("i",{class:`el-icon-${a.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(a.label))])]),e._l(a.children,(function(a){return t("el-menu-item-group",{key:a.path},[t("el-menu-item",{attrs:{index:a.path},on:{click:function(t){return e.clickMenu(a)}}},[e._v(e._s(a.label))])],1)}))],2)}))],2)},f=[],h=a(680),g={data(){return{}},methods:{handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)},clickMenu(e){this.$route.path===e.path||"/home"===this.$route.path&&"/"===e.path||this.$router.push(e.path),this.$store.commit("selectMenu",e)}},computed:{noChildren(){return this.menuData.filter((e=>!e.children))},hasChildren(){return this.menuData.filter((e=>e.children))},isCollapse(){return this.$store.state.tab.isCollapse},menuData(){return JSON.parse(h.Z.get("menu"))||this.$store.state.tab.menu}}},v=g,b=(0,c.Z)(v,p,f,!1,null,"48d30512",null),y=b.exports,x=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header-container"},[t("div",{staticClass:"l-content"},[t("el-button",{staticStyle:{"margin-right":"20px"},attrs:{icon:"el-icon-menu",size:"mini"},on:{click:e.handleMenu}}),t("el-breadcrumb",{attrs:{separator:"/"}},e._l(e.tags,(function(a){return t("el-breadcrumb-item",{key:a.path,attrs:{to:{path:a.path}}},[e._v(" "+e._s(a.label)+" ")])})),1)],1),t("div",{staticClass:"r-content"},[t("el-dropdown",{on:{command:e.handleClick}},[t("span",{staticClass:"el-dropdown-link"},[t("img",{staticClass:"user",attrs:{src:a(8055),alt:""}})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",[e._v("个人中心")]),t("el-dropdown-item",{attrs:{command:"cancel"}},[e._v("退出")])],1)],1)],1)])},_=[],k={data(){return{}},methods:{handleMenu(){this.$store.commit("collapseMenu")},handleClick(e){"cancel"===e&&(h.Z.remove("token"),h.Z.remove("menu"),this.$router.push("/login"))}},computed:{...(0,l.rn)({tags:e=>e.tab.tabslist})}},w=k,C=(0,c.Z)(w,x,_,!1,null,"10ad5869",null),S=C.exports,$={data(){return{}},components:{CommonAsideVue:y,CommonHeader:S,CommonTag:m}},O=$,M=(0,c.Z)(O,n,r,!1,null,"ddbf7a5e",null),D=M.exports},2877:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n=function(){var e=this,t=e._self._c;return t("h1",[e._v("我是Mall")])},r=[],o={data(){return{}}},s=o,l=a(1001),i=(0,l.Z)(s,n,r,!1,null,null,null),u=i.exports},168:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n=function(){var e=this,t=e._self._c;return t("h1",[e._v("我是PageOne")])},r=[],o={data(){return{}}},s=o,l=a(1001),i=(0,l.Z)(s,n,r,!1,null,null,null),u=i.exports},8012:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n=function(){var e=this,t=e._self._c;return t("h1",[e._v("我是PageTwo")])},r=[],o={data(){return{}}},s=o,l=a(1001),i=(0,l.Z)(s,n,r,!1,null,null,null),u=i.exports},8020:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"manage"},[t("el-dialog",{attrs:{title:"新增用户",visible:e.dialogVisible,width:"50%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-form",{ref:"form",attrs:{rules:e.rules,inline:!0,model:e.form,"label-width":"80px"}},[t("el-form-item",{attrs:{prop:"name",label:"姓名"}},[t("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),t("el-form-item",{attrs:{prop:"age",label:"年龄"}},[t("el-input",{attrs:{placeholder:"请输入年龄"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),t("el-form-item",{attrs:{prop:"sex",label:"性别"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[t("el-option",{attrs:{label:"男",value:1}}),t("el-option",{attrs:{label:"女",value:0}})],1)],1),t("el-form-item",{attrs:{prop:"birth",label:"选择日期"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-DD"},model:{value:e.form.birth,callback:function(t){e.$set(e.form,"birth",t)},expression:"form.birth"}})],1),t("el-form-item",{attrs:{prop:"addr",label:"地址"}},[t("el-input",{attrs:{placeholder:"请输入地址"},model:{value:e.form.addr,callback:function(t){e.$set(e.form,"addr",t)},expression:"form.addr"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:e.cancel}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1),t("div",{staticClass:"manage-header"},[t("el-button",{attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v(" +新增 ")]),t("el-form",{attrs:{inline:!0,model:e.userForm}},[t("el-form-item",[t("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.userForm.name,callback:function(t){e.$set(e.userForm,"name",t)},expression:"userForm.name"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1),t("div",{staticClass:"commom-table"},[t("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",height:"90%",data:e.tableData}},[t("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t("el-table-column",{attrs:{prop:"sex",label:"性别"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("i",{staticClass:"el-icon-time"}),t("span",[e._v(e._s(1==a.row.sex?"男":"女"))])]}}])}),t("el-table-column",{attrs:{prop:"age",label:"年龄"}}),t("el-table-column",{attrs:{prop:"birth",label:"出生日期"}}),t("el-table-column",{attrs:{prop:"addr",label:"地址"}}),t("el-table-column",{attrs:{prop:"sex",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.handleEdit(a.row)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.handleDelete(a.row)}}},[e._v("删除")])]}}])})],1),t("div",{staticClass:"pager"},[t("el-pagination",{attrs:{layout:"prev, pager, next",total:e.total},on:{"current-change":e.handlePage}})],1)],1)],1)},r=[],o=(a(1120),a(7882)),s={data(){return{dialogVisible:!1,form:{name:"",age:"",sex:"",birth:"",addr:""},rules:{name:[{required:!0,message:"请输入姓名"}],age:[{required:!0,message:"请输入年龄"}],sex:[{required:!0,message:"请选择性别"}],birth:[{required:!0,message:"请选择出生日期"}],addr:[{required:!0,message:"请输入地址"}]},tableData:[],modalType:0,total:0,pageData:{page:1,limit:10},userForm:{name:""}}},methods:{submit(){this.$refs.form.validate((e=>{e&&(0===this.modalType?(0,o.cn)(this.form).then((()=>{this.getList()})):(0,o.uz)(this.form).then((()=>{this.getList()})),this.$refs.form.resetFields(),this.dialogVisible=!1)}))},handleClose(){this.$refs.form.resetFields(),this.dialogVisible=!1},cancel(){this.handleClose()},handleEdit(e){this.modalType=1,this.dialogVisible=!0,this.form=JSON.parse(JSON.stringify(e))},handleDelete(e){this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{(0,o.ti)({id:e.id}).then((()=>{this.$message({type:"success",message:"删除成功!"}),this.getList()}))})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},getList(){(0,o.PR)({params:{...this.userForm,...this.pageData}}).then((e=>{let{data:t}=e;console.log(t),this.tableData=t.list,this.total=t.count||0}))},handleAdd(){this.modalType=0,this.dialogVisible=!0},handlePage(e){this.pageData.page=e,this.getList()},onSubmit(){this.getList()}},mounted(){this.getList()}},l=s,i=a(1001),u=(0,i.Z)(l,n,r,!1,null,"347dbd3e",null),c=u.exports},7882:function(e,t,a){"use strict";a.d(t,{cn:function(){return i},ti:function(){return c},uz:function(){return u},Yu:function(){return s},r7:function(){return d},PR:function(){return l}});var n=a(4161);const r=n.Z.create({baseURL:"/api",timeout:1e4});r.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),r.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var o=r;const s=()=>o.get("/home/getData"),l=e=>o.get("/user/getUser",e),i=e=>o.post("/user/add",e),u=e=>o.post("/user/edit",e),c=e=>o.post("/user/del",e),d=e=>o.post("/permission/getMenu",e)},7658:function(e,t,a){"use strict";var n=a(7754),r=a.n(n),o=a(6369),s=function(){var e=this,t=e._self._c;return t("router-view")},l=[],i={name:"App"},u=i,c=a(1001),d=(0,c.Z)(u,s,l,!1,null,null,null),m=d.exports,p=a(1120),f=a(3822),h=(a(2329),a(680)),g={state:{isCollapse:!1,tabslist:[{path:"/",name:"home",label:"首页",icon:"s-home",url:"Home/Home"}],menu:[]},mutations:{collapseMenu(e){e.isCollapse=!e.isCollapse},selectMenu(e,t){if("home"!==t.name){const a=e.tabslist.findIndex((e=>e.name===t.name));-1===a&&e.tabslist.push(t)}},closeTag(e,t){const a=e.tabslist.findIndex((e=>e.name===t.val));e.tabslist.splice(a,1)},setMenu(e,t){e.menu=t,h.Z.set("menu",JSON.stringify(t))},addMenu(e,t){if(!h.Z.get("menu"))return;const n=JSON.parse(h.Z.get("menu"));e.menu=n;const r=[];n.forEach((e=>{e.children?(e.children=e.children.map((e=>(e.component=()=>a(6968)(`./${e.url}`),e))),r.push(...e.children)):(e.component=()=>a(6968)(`./${e.url}`),r.push(e))})),console.log(r,"menuArray"),r.forEach((e=>{t.addRoute("Main",e)}))}}};o["default"].use(f.ZP);var v=new f.ZP.Store({modules:{tab:g}}),b=a(7634),y=a.n(b);let x=[];var _={getStatisticalData:()=>{for(let e=0;e<7;e++)x.push(y().mock({"苹果":y().Random.float(100,8e3,0,0),vivo:y().Random.float(100,8e3,0,0),oppo:y().Random.float(100,8e3,0,0),"魅族":y().Random.float(100,8e3,0,0),"三星":y().Random.float(100,8e3,0,0),"小米":y().Random.float(100,8e3,0,0)}));return{code:2e4,data:{videoData:[{name:"小米",value:2999},{name:"苹果",value:5999},{name:"vivo",value:1500},{name:"oppo",value:1999},{name:"魅族",value:2200},{name:"三星",value:4500}],userData:[{date:"周一",new:5,active:200},{date:"周二",new:10,active:500},{date:"周三",new:12,active:550},{date:"周四",new:60,active:800},{date:"周五",new:65,active:550},{date:"周六",new:53,active:770},{date:"周日",new:33,active:170}],orderData:{date:["20191001","20191002","20191003","20191004","20191005","20191006","20191007"],data:x},tableData:[{name:"oppo",todayBuy:500,monthBuy:3500,totalBuy:22e3},{name:"vivo",todayBuy:300,monthBuy:2200,totalBuy:24e3},{name:"苹果",todayBuy:800,monthBuy:4500,totalBuy:65e3},{name:"小米",todayBuy:1200,monthBuy:6500,totalBuy:45e3},{name:"三星",todayBuy:300,monthBuy:2e3,totalBuy:34e3},{name:"魅族",todayBuy:350,monthBuy:3e3,totalBuy:22e3}]}}}};a(541);function k(e){const t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}let w=[];const C=200;for(let O=0;O<C;O++)w.push(y().mock({id:y().Random.guid(),name:y().Random.cname(),addr:y().mock("@county(true)"),"age|18-60":1,birth:y().Random.date(),sex:y().Random.integer(0,1)}));var S={getUserList:e=>{const{name:t,page:a=1,limit:n=20}=k(e.url);console.log("name:"+t,"page:"+a,"分页大小limit:"+n);const r=w.filter((e=>!t||-1!==e.name.indexOf(t)||-1!==e.addr.indexOf(t))),o=r.filter(((e,t)=>t<n*a&&t>=n*(a-1)));return{code:2e4,count:r.length,list:o}},createUser:e=>{const{name:t,addr:a,age:n,birth:r,sex:o}=JSON.parse(e.body);return console.log(JSON.parse(e.body)),w.unshift({id:y().Random.guid(),name:t,addr:a,age:n,birth:r,sex:o}),{code:2e4,data:{message:"添加成功"}}},deleteUser:e=>{const{id:t}=JSON.parse(e.body);return t?(w=w.filter((e=>e.id!==t)),{code:2e4,message:"删除成功"}):{code:-999,message:"参数不正确"}},batchremove:e=>{let{ids:t}=k(e.url);return t=t.split(","),w=w.filter((e=>!t.includes(e.id))),{code:2e4,data:{message:"批量删除成功"}}},updateUser:e=>{const{id:t,name:a,addr:n,age:r,birth:o,sex:s}=JSON.parse(e.body),l=parseInt(s);return w.some((e=>{if(e.id===t)return e.name=a,e.addr=n,e.age=r,e.birth=o,e.sex=l,!0})),{code:2e4,data:{message:"编辑成功"}}}},$={getMenu:e=>{const{username:t,password:a}=JSON.parse(e.body);return"admin"===t&&"niu123"===a?{code:2e4,data:{menu:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"Home.vue"},{path:"/mall",name:"mall",label:"商品管理",icon:"video-play",url:"Mall.vue"},{path:"/user",name:"user",label:"用户管理",icon:"user",url:"User.vue"},{label:"其他",icon:"location",children:[{path:"/page1",name:"page1",label:"页面1",icon:"setting",url:"PageOne.vue"},{path:"/page2",name:"page2",label:"页面2",icon:"setting",url:"PageTwo.vue"}]}],token:y().Random.guid(),message:"获取成功"}}:"Tom"===t&&"Tom123"===a?{code:2e4,data:{menu:[{path:"/home",name:"home",label:"首页",icon:"s-home",url:"Home.vue"},{path:"/video",name:"video",label:"商品管理",icon:"video-play",url:"Mall.vue"}],token:y().Random.guid(),message:"获取成功"}}:{code:-999,data:{message:"密码错误"}}}};y().mock("/api/home/getData",_.getStatisticalData),y().mock("/api/user/add","post",S.createUser),y().mock("/api/user/edit","post",S.updateUser),y().mock("/api/user/del","post",S.deleteUser),y().mock(/api\/user\/getUser/,S.getUserList),y().mock(/api\/permission\/getMenu/,"post",$.getMenu),o["default"].config.productionTip=!1,o["default"].use(r()),p.Z.beforeEach(((e,t,a)=>{const n=h.Z.get("token");n||"login"===e.name?n&&"login"===e.name?a({name:"home"}):a():a({name:"login"})})),new o["default"]({store:v,router:p.Z,render:e=>e(m),created(){v.commit("addMenu",p.Z)}}).$mount("#app")},1120:function(e,t,a){"use strict";var n=a(6369),r=a(2631),o=(a(1366),a(8020),a(2468)),s=(a(2877),a(168),a(8012),a(2129));n["default"].use(r.ZP);const l=r.ZP.prototype.push;r.ZP.prototype.push=function(e){return l.call(this,e).catch((e=>e))};const i=[{path:"/",component:o["default"],name:"Main",redirect:"/home",children:[]},{path:"/login",component:s["default"],name:"login"}],u=new r.ZP({routes:i});t["Z"]=u},6968:function(e,t,a){var n={"./Home":1366,"./Home.vue":1366,"./Login":2129,"./Login.vue":2129,"./Main":2468,"./Main.vue":2468,"./Mall":2877,"./Mall.vue":2877,"./PageOne":168,"./PageOne.vue":168,"./PageTwo":8012,"./PageTwo.vue":8012,"./User":8020,"./User.vue":8020};function r(e){return Promise.resolve().then((function(){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}var r=n[e];return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=6968,e.exports=r},8055:function(e,t,a){"use strict";e.exports=a.p+"img/user.1a02c5bd.png"}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,o){if(!n){var s=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],o=e[c][2];for(var l=!0,i=0;i<n.length;i++)(!1&o||s>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(l=!1,o<s&&(s=o));if(l){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,r,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.e=function(){return Promise.resolve()}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,s=n[0],l=n[1],i=n[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(i)var c=i(a)}for(t&&t(n);u<s.length;u++)o=s[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},n=self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(7658)}));n=a.O(n)})();
//# sourceMappingURL=app.07c53667.js.map