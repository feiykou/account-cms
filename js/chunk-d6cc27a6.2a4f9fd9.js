(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d6cc27a6"],{"22ff":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"lin-container"},[i("div",{staticClass:"lin-title"},[t._v("多重输入")]),i("div",{staticClass:"lin-wrap-ui"},[i("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"50px","padding-bottom":"20px"}},[i("div",{staticClass:"block-box"},[t.list.length?t._e():i("i",{staticClass:"iconfont icon-jia plus",on:{click:t.addContent}}),t._l(t.list,function(n,e){return i("el-row",{key:e,staticClass:"input-row"},[i("el-input",{staticClass:"input-detail",attrs:{placeholder:"请输入内容",size:"medium"},model:{value:n.text,callback:function(i){t.$set(n,"text",i)},expression:"item.text"}}),i("div",{staticClass:"function"},[i("i",{staticClass:"iconfont icon-jian1 minus",on:{click:function(n){return t.removeContent(e)}}}),e===t.list.length-1?i("i",{staticClass:"iconfont icon-jia plus",on:{click:t.addContent}}):t._e()])],1)})],2),i("el-collapse",[i("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[i("div",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.base))])])],1)],1)],1)])},s=[],l={data:function(){return{base:'\n        <div class="block-box">\n          <i class="iconfont icon-jia plus" v-if="!list.length" @click="addContent"></i>\n          <el-row class="input-row" v-for="(item,index) in list" :key="index">\n            <el-input\n              v-model="item.text"\n              placeholder="请输入内容"\n              size="medium"\n              class="input-detail"\n              ></el-input>\n            <div class="function">\n              <i class="iconfont icon-jian1 minus" @click="removeContent(index)"></i>\n              <i class="iconfont icon-jia plus" v-if="index === list.length-1" @click="addContent"></i>\n            </div>\n          </el-row>\n        </div>\n        <script>\n        export default {\n          methods: {\n            addContent() {\n              this.list.push({\n                text: \'\',\n                type: \'plus\',\n              })\n            },\n            removeContent(index) {\n              this.list.splice(index, 1)\n            }\n          },\n        }\n        <\/script>',list:[]}},methods:{addContent:function(){this.list.push({text:"",type:"plus"})},removeContent:function(t){this.list.splice(t,1)}}},a=l,c=(i("f07b"),i("2877")),o=Object(c["a"])(a,e,s,!1,null,"5b4288a4",null);n["default"]=o.exports},a9ab:function(t,n,i){},f07b:function(t,n,i){"use strict";var e=i("a9ab"),s=i.n(e);s.a}}]);