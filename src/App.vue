<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>

  <el-button type="primary">主要按钮</el-button>
  <div class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
  <hr>
  <ArrayList/>
  <hr>
  <ComputeDemo/>
  <hr>
  <ClassDemo/>
  <hr>
  <StyleDemo/>
  <hr>
  <WatchDemo/>
  <hr>
  <ModelDemo/>
  <hr>
  <RefDemo/>
  <hr>
  <MyCompoent/>
  <hr>
  <Header/>
  <Main/>
  <Aside/>
  <hr>
  <Parent/>
  <hr>
  <ComA/>
  <hr>
  <Mains/>
  <hr>
  <ComponentA/>
  <hr>
  <Api/>

  <SlotA>
    <div>
      <h3>插槽标题</h3>
      <p>插槽的内容。</p>
    </div>
  </SlotA>
  <hr>
  <SlotB>
    <template v-slot:header="slogProps">
      <h3>{{ message }}--{{ slogProps.msgB }}</h3>
    </template>

    <template #main>
      <p>内容</p>
    </template>
  </SlotB>
  <hr>
  <SlotC v-slot="msg">
    <H3>{{ msg.msg }}</H3>
  </SlotC>
  <hr>
  <ShengMing/>
  <hr>
  <keep-alive>
    <component :is="tabQiehuan"></component>
  </keep-alive>
  <button @click="qiehuan">切换组件</button>
  <hr>
  <Test/>
</template>

<script>
// import Header from "@/pages/Header.vue";
import ArrayList from "./components/ArrayList.vue";
import ComputeDemo from "./components/ComputeDemo.vue";
import ClassDemo from "@/components/ClassDemo.vue";
import StyleDemo from "@/components/StyleDemo.vue";
import WatchDemo from "@/components/WatchDemo.vue";
import ModelDemo from "@/components/ModelDemo.vue";
import RefDemo from "@/components/RefDemo.vue";
import MyCompoent from "@/components/MyCompoent.vue";
import Main from "@/pages/Main.vue";
import Aside from "@/pages/Aside.vue";
import Parent from "@/components/Parent.vue";
import ComA from "@/components/ComA.vue";
import Mains from "@/components/Main.vue";

import ComponentA from "@/props/ComponentA.vue";
import Api from "@/props/Api.vue";
import SlotA from "@/slot/SlotA.vue";
import SlotB from "@/slot/SlotB.vue";

import SlotC from "@/slot/SlotC.vue";
import ShengMing from "@/views/ShengMing.vue";
import QieHuanA from "@/views/QieHuanA.vue";
import Test  from "@/views/Test.vue";
// import QieHuanB from "@/views/QieHuanB.vue";
//异步加载组件
import { defineAsyncComponent } from "vue";
const QieHuanB = defineAsyncComponent(() => import("@/views/QieHuanB.vue"));

import * as echarts from 'echarts';


export default {
  components: {
    ArrayList,
    ComputeDemo,
    ClassDemo,
    StyleDemo,
    WatchDemo,
    ModelDemo,
    RefDemo,
    MyCompoent,
    Main,
    Aside,
    Parent,
    ComA,
    Mains,
    ComponentA,
    Api,
    SlotA,
    SlotB,
    SlotC,
    ShengMing,
    QieHuanA,
    QieHuanB,
    Test
  },





  data() {
    return {
      message: "我是父组件的数据",
      tabQiehuan: "QieHuanA",
      xxx: "爷爷辈财产"
    }
  },
  /**
   * provide 提供的数据，在后代组件QieHuanC.vue中通过 inject 来接收 只能由上往下传递数据
   * @returns {{xxx: string}}
   */
// provide: {
  //   xxx: "爷爷辈财产"
  // },
  provide(){
    return {
      xxx:this.xxx
    }
  },


  methods: {
    qiehuan() {
      this.tabQiehuan = this.tabQiehuan == "QieHuanA" ? "QieHuanB" : "QieHuanA";
    }
  }

}


</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


</style>
