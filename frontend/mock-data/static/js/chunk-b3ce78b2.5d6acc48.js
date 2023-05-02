(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3ce78b2"],{"072b":function(e,t,n){"use strict";n("d3b7");var a=n("bc3a"),i=n.n(a),r=n("5c96"),o=n("4360"),s=i.a.create({baseURL:"../..",timeout:5e3});s.interceptors.request.use((function(e){return e}),(function(e){return console.log(e),Promise.reject(e)})),s.interceptors.response.use((function(e){var t=e.data;return 2e4!==t.code?(Object(r["Message"])({message:t.message||"Error",type:"error",duration:5e3}),50008!==t.code&&50012!==t.code&&50014!==t.code||r["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){o["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("err"+e),Object(r["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=s},"0ae0":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"}),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"Customer ID",prop:"id",align:"center",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.id))])]}}])}),n("el-table-column",{attrs:{label:"Customer Name",width:"240px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.name))])]}}])}),n("el-table-column",{attrs:{label:"Shipping Address",prop:"address",align:"center",width:"360"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.address))])]}}])}),n("el-table-column",{attrs:{label:"Payment Method",width:"245px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("span",[e._v(e._s(a.payment))])]}}])}),n("el-table-column",{attrs:{label:"Order History",align:"center",width:"180","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("el-button",{attrs:{type:"primary",plain:!0,size:"mini"},on:{click:function(t){return e.viewDetails(a.id)}}},[e._v(" View Details ")])]}}])}),n("el-table-column",{attrs:{label:"Operations",align:"center",width:"120","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.handleUpdate(a)}}},[e._v(" Edit ")])]}}])})],1),n("el-row",{staticClass:"pagination",attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:24}},[n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],staticClass:"flex-center",attrs:{total:e.total,"page-size":8,layout:"total, prev, pager, next, jumper",page:e.listQuery.page},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},pagination:e.getList}})],1)],1),n("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"dataForm",staticStyle:{width:"550px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"auto"}},[n("el-form-item",{attrs:{label:"Shipping Address",prop:"address"}},[n("el-input",{attrs:{placeholder:"Please enter address"},model:{value:e.temp.address,callback:function(t){e.$set(e.temp,"address",t)},expression:"temp.address"}})],1),n("el-form-item",{attrs:{label:"Payment Method",prop:"payment"}},[n("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select payment method"},model:{value:e.temp.payment,callback:function(t){e.$set(e.temp,"payment",t)},expression:"temp.payment"}},e._l(e.paymentList,(function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})})),1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(" Cancel ")]),n("el-button",{attrs:{type:"primary"},on:{click:e.updateData}},[e._v(" Confirm ")])],1)],1)],1)},i=[],r=(n("c740"),n("a434"),n("2423")),o=n("7484"),s=n("6724"),l=n("333d"),u={name:"MerchandiseManagement",components:{Pagination:l["a"]},directives:{waves:s["a"]},data:function(){return{tableKey:0,list:[],total:0,listLoading:!0,listQuery:{page:1,limit:8},temp:{id:void 0,name:"",address:"",payment:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Add a Merchandise"},paymentList:[{id:1,name:"Wechat"},{id:2,name:"Alipay"},{id:3,name:"Credit card"}],rules:{address:[{required:!0,message:"address is required",trigger:"blur"},{min:1,max:50,message:"The length should below 50 characters",trigger:"blur"}],payment:[{required:!0,message:"payment method is required",trigger:"change"}]}}},created:function(){this.getList()},methods:{getList:function(){this.listLoading=!0;for(var e=0;e<8;e++)this.list.push({id:1,name:"123",address:"xjtlu",payment:"Wechat"}),this.total=this.list.length;this.listLoading=!1},resetTemp:function(){this.temp={id:void 0,name:"",address:"",payment:""}},handleUpdate:function(e){var t=this;this.temp=Object.assign({},e),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){var n=Object.assign({},e.temp);Object(o["a"])(n).then((function(){e.getList(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})})),Object(r["d"])(n).then((function(){var t=e.list.findIndex((function(t){return t.id===e.temp.id}));e.list.splice(t,1,e.temp),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})}))}}))},viewDetails:function(e){this.$router.push({path:"/order-history/index",query:{userId:e}})}}},c=u,d=n("2877"),p=Object(d["a"])(c,a,i,!1,null,null,null);t["default"]=p.exports},2423:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return s}));var a=n("b775");function i(e){return Object(a["a"])({url:"/vue-element-admin/article/list",method:"get",params:e})}function r(e){return Object(a["a"])({url:"/vue-element-admin/article/pv",method:"get",params:{pv:e}})}function o(e){return Object(a["a"])({url:"/vue-element-admin/article/create",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/vue-element-admin/article/update",method:"post",data:e})}},"333d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[n("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},i=[];n("a9e3");Math.easeInOutQuad=function(e,t,n,a){return e/=a/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function o(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(e,t,n){var a=s(),i=e-a,l=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=l;var s=Math.easeInOutQuad(u,a,i,t);o(s),u<t?r(e):n&&"function"===typeof n&&n()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&l(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},c=u,d=(n("5660"),n("2877")),p=Object(d["a"])(c,a,i,!1,null,"6af373ef",null);t["a"]=p.exports},5660:function(e,t,n){"use strict";n("7a30")},6724:function(e,t,n){"use strict";n("8d41");var a="@@wavesContext";function i(e,t){function n(n){var a=Object.assign({},t.value),i=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),r=i.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var o=r.getBoundingClientRect(),s=r.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":(s=document.createElement("span"),s.className="waves-ripple",s.style.height=s.style.width=Math.max(o.width,o.height)+"px",r.appendChild(s)),i.type){case"center":s.style.top=o.height/2-s.offsetHeight/2+"px",s.style.left=o.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(n.pageY-o.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(n.pageX-o.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=i.color,s.className="waves-ripple z-active",!1}}return e[a]?e[a].removeHandle=n:e[a]={removeHandle:n},n}var r={bind:function(e,t){e.addEventListener("click",i(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[a].removeHandle,!1),e.addEventListener("click",i(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[a].removeHandle,!1),e[a]=null,delete e[a]}},o=function(e){e.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(o)),r.install=o;t["a"]=r},7484:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("5530");var a=n("072b");function i(e){return Object(a["a"])({url:"/update-customer.php",method:"post",data:e})}},"7a30":function(e,t,n){},"8d41":function(e,t,n){},c740:function(e,t,n){"use strict";var a=n("23e7"),i=n("b727").findIndex,r=n("44d2"),o=n("ae40"),s="findIndex",l=!0,u=o(s);s in[]&&Array(1)[s]((function(){l=!1})),a({target:"Array",proto:!0,forced:l||!u},{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r(s)}}]);