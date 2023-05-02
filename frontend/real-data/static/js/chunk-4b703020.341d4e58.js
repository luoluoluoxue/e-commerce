(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b703020"],{"072b":function(e,t,a){"use strict";a("d3b7");var n=a("bc3a"),i=a.n(n),r=a("5c96"),o=a("4360"),s=i.a.create({baseURL:"../..",timeout:5e3});s.interceptors.request.use((function(e){return e}),(function(e){return console.log(e),Promise.reject(e)})),s.interceptors.response.use((function(e){var t=e.data;return 2e4!==t.code?(Object(r["Message"])({message:t.message||"Error",type:"error",duration:5e3}),50008!==t.code&&50012!==t.code&&50014!==t.code||r["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){o["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("err"+e),Object(r["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=s},"0ae0":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"}),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"Customer ID",prop:"id",align:"center",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.id))])]}}])}),a("el-table-column",{attrs:{label:"Customer Name",width:"240px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.name))])]}}])}),a("el-table-column",{attrs:{label:"Shipping Address",prop:"address",align:"center",width:"360"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.address))])]}}])}),a("el-table-column",{attrs:{label:"Payment Method",width:"245px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(n.payment))])]}}])}),a("el-table-column",{attrs:{label:"Order History",align:"center",width:"180","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-button",{attrs:{type:"primary",plain:!0,size:"mini"},on:{click:function(t){return e.viewDetails(n.id)}}},[e._v(" View Details ")])]}}])}),a("el-table-column",{attrs:{label:"Operations",align:"center",width:"120","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.handleUpdate(n)}}},[e._v(" Edit ")])]}}])})],1),a("el-row",{staticClass:"pagination",attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:24}},[a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],staticClass:"flex-center",attrs:{total:e.total,"page-size":8,layout:"total, prev, pager, next, jumper",page:e.listQuery.page},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},pagination:e.getList}})],1)],1),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"550px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"auto"}},[a("el-form-item",{attrs:{label:"Shipping Address",prop:"address"}},[a("el-input",{attrs:{placeholder:"Please enter address"},model:{value:e.temp.address,callback:function(t){e.$set(e.temp,"address",t)},expression:"temp.address"}})],1),a("el-form-item",{attrs:{label:"Payment Method",prop:"payment"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select payment method"},model:{value:e.temp.payment,callback:function(t){e.$set(e.temp,"payment",t)},expression:"temp.payment"}},e._l(e.paymentList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})})),1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(" Cancel ")]),a("el-button",{attrs:{type:"primary"},on:{click:e.updateData}},[e._v(" Confirm ")])],1)],1)],1)},i=[],r=a("7484"),o=a("6724"),s=a("333d"),l={name:"MerchandiseManagement",components:{Pagination:s["a"]},directives:{waves:o["a"]},data:function(){return{tableKey:0,list:[],total:0,listLoading:!0,listQuery:{page:1,limit:8},temp:{id:void 0,name:"",address:"",payment:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Add a Merchandise"},paymentList:[{id:1,name:"Wechat"},{id:2,name:"Alipay"},{id:3,name:"Credit card"}],rules:{address:[{required:!0,message:"address is required",trigger:"blur"},{min:1,max:50,message:"The length should below 50 characters",trigger:"blur"}],payment:[{required:!0,message:"payment method is required",trigger:"change"}]}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,Object(r["a"])(this.listQuery).then((function(t){var a=t.data;e.list=a.list,e.total=a.total,e.listLoading=!1}),(function(e){console.log(e.message)})),this.listLoading=!1},resetTemp:function(){this.temp={id:void 0,name:"",address:"",payment:""}},handleUpdate:function(e){var t=this;this.temp=Object.assign({},e),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){var a=Object.assign({},e.temp);Object(r["c"])(a).then((function(){e.getList(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})}))}}))},viewDetails:function(e){this.$router.push({path:"/order-history/index",query:{userId:e}})}}},u=l,c=a("2877"),d=Object(c["a"])(u,n,i,!1,null,null,null);t["default"]=d.exports},"333d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},i=[];a("a9e3");Math.easeInOutQuad=function(e,t,a,n){return e/=n/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function o(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(e,t,a){var n=s(),i=e-n,l=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=l;var s=Math.easeInOutQuad(u,n,i,t);o(s),u<t?r(e):a&&"function"===typeof a&&a()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&l(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},c=u,d=(a("5660"),a("2877")),p=Object(d["a"])(c,n,i,!1,null,"6af373ef",null);t["a"]=p.exports},5660:function(e,t,a){"use strict";a("7a30")},6724:function(e,t,a){"use strict";a("8d41");var n="@@wavesContext";function i(e,t){function a(a){var n=Object.assign({},t.value),i=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),r=i.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var o=r.getBoundingClientRect(),s=r.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":(s=document.createElement("span"),s.className="waves-ripple",s.style.height=s.style.width=Math.max(o.width,o.height)+"px",r.appendChild(s)),i.type){case"center":s.style.top=o.height/2-s.offsetHeight/2+"px",s.style.left=o.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(a.pageY-o.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(a.pageX-o.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=i.color,s.className="waves-ripple z-active",!1}}return e[n]?e[n].removeHandle=a:e[n]={removeHandle:a},a}var r={bind:function(e,t){e.addEventListener("click",i(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[n].removeHandle,!1),e.addEventListener("click",i(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[n].removeHandle,!1),e[n]=null,delete e[n]}},o=function(e){e.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(o)),r.install=o;t["a"]=r},7484:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return s}));var n=a("5530"),i=a("072b");function r(e){return Object(i["a"])({url:"/get-customer.php",method:"get",params:e})}function o(e){return Object(i["a"])({url:"/update-customer.php",method:"post",data:e})}function s(e,t){return Object(i["a"])({url:"/get-order-history.php",method:"get",params:Object(n["a"])({customerId:e},t)})}},"7a30":function(e,t,a){},"8d41":function(e,t,a){}}]);