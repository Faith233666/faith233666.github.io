(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28fee0c3"],{"34a6":function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"listbar"},[a("router-link",{attrs:{to:t.path||"#"}},[a("div",[t._v(t._s(t.label))]),a("div",{staticClass:"tips"},[t._v(" "+t._s(t.tips)+" "),a("span",{staticClass:"iconfont iconjiantou1"})])])],1)},s=[],o={props:["label","tips","path"]},i=o,r=(a("3751"),a("2877")),c=Object(r["a"])(i,e,s,!1,null,null,null);n["a"]=c.exports},3751:function(t,n,a){"use strict";var e=a("8828"),s=a.n(e);s.a},"5ef8":function(t,n,a){"use strict";var e=a("621d"),s=a.n(e);s.a},"621d":function(t,n,a){},8828:function(t,n,a){},a3af:function(t,n,a){"use strict";var e=a("ce38"),s=a.n(e);s.a},ce38:function(t,n,a){},fb5e:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("NaigateBar",{attrs:{title:"编辑资料",showHome:"false"}}),a("div",{staticClass:"avator"},[a("img",{attrs:{src:t.$axios.defaults.baseURL+t.userInfo.head_img}}),a("van-uploader",{staticClass:"upload",attrs:{"after-read":t.afterRead}})],1),a("ListBar",{attrs:{label:"昵称",tips:t.userInfo.nickname},nativeOn:{click:function(n){t.show=!0}}}),a("van-dialog",{attrs:{title:"昵称修改","show-cancel-button":""},on:{confirm:t.handleEditChangeNickname},model:{value:t.show,callback:function(n){t.show=n},expression:"show"}},[a("van-field",{attrs:{placeholder:"请输入昵称"},model:{value:t.nickname,callback:function(n){t.nickname=n},expression:"nickname"}})],1),a("ListBar",{attrs:{label:"密码",tips:"******"},nativeOn:{click:function(n){t.showPassword=!0}}}),a("van-dialog",{attrs:{title:"密码修改","show-cancel-button":""},on:{confirm:t.handleEditChangePassword},model:{value:t.showPassword,callback:function(n){t.showPassword=n},expression:"showPassword"}},[a("van-field",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}})],1),a("ListBar",{attrs:{label:"性别",tips:["女","男"][t.userInfo.gender]},nativeOn:{click:function(n){t.showGender=!0}}}),a("van-action-sheet",{attrs:{actions:t.actions,"close-on-click-action":""},on:{select:t.onSelect},model:{value:t.showGender,callback:function(n){t.showGender=n},expression:"showGender"}})],1)},s=[],o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"nav"},[a("i",{staticClass:"iconfont iconjiantou2",on:{click:function(n){return t.$router.back()}}}),a("div",[t._v(t._s(t.title))]),1==t.showHome?a("i",{staticClass:"iconfont iconshouye",on:{click:function(n){return t.$router.push("/login")}}}):a("i",{staticClass:"iconfont iconshouye",staticStyle:{opacity:"0"}})])},i=[],r={props:["title","showHome"]},c=r,l=(a("a3af"),a("2877")),u=Object(l["a"])(c,o,i,!1,null,"595d720f",null),d=u.exports,h=a("34a6"),f={data:function(){return{userJson:"",userInfo:"",show:!1,nickname:"",showPassword:!1,password:"",actions:[{name:"男",value:1},{name:"女",value:0}],showGender:!1}},mounted:function(){var t=this,n=JSON.parse(localStorage.getItem("userInfo"))||[];this.userJson=n,this.$axios({url:"/user/"+n.user.id,headers:{Authorization:n.token}}).then((function(n){console.log(n),t.userInfo=n.data.data}))},methods:{afterRead:function(t){var n=this,a=new FormData;a.append("file",t.file),this.$axios({method:"post",url:"/upload",headers:{Authorization:this.userJson.token},data:a}).then((function(t){var a=t.data.data.url;n.userInfo.head_img=a,n.handleEdit({head_img:a})}))},handleEdit:function(t){var n=this;return this.$axios({method:"post",url:"/user_update/"+this.userInfo.id,headers:{Authorization:this.userJson.token},data:t}).then((function(t){console.log(t),n.$toast.success("修改成功")}))},handleEditChangeNickname:function(){var t=this,n=this.handleEdit({nickname:this.nickname});n.then((function(){t.userInfo.nickname=t.nickname,t.nickname=""}))},handleEditChangePassword:function(){var t=this,n=this.handleEdit({password:this.password});n.then((function(){t.password=""}))},onSelect:function(t){var n=this,a=this.handleEdit({gender:t.value});a.then((function(){n.userInfo.gender=t.value}))}},components:{NaigateBar:d,ListBar:h["a"]}},p=f,v=(a("5ef8"),Object(l["a"])(p,e,s,!1,null,"0381b3f8",null));n["default"]=v.exports}}]);
//# sourceMappingURL=chunk-28fee0c3.97b297c5.js.map