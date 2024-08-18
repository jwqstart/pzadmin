<template>
  <h3>数组变化侦听</h3>
  <ul>
    <li v-for="(item,index) of name" :key="index">{{ item }}</li>
  </ul>
  <button v-on:click="addData">添加数据</button>
  <h3>数组1</h3>
  <button @click="concatnum">合并数组</button>
  <ul>
    <li v-for="(item,index) in num1" :key="index">
      {{ item }}
    </li>
  </ul>
  <h3>数组2</h3>
  <ul>
    <li v-for="(item,index) of num2" :key="index">
      {{ item }}
    </li>
  </ul>

  <h3>{{ this.name[0] }}</h3>
  <h3>{{ component1 }}</h3>

  <form action="">
    <input type="text" v-model="message" />
    <p>{{message}}</p>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{checked}}</label>
  </form>

</template>

<script>
export default {

  data() {
    return {
      name: ['张三', '李四', '王五'],
      num1: [1, 2, 3],
      num2: [4, 5, 6],
      message:'',
      checked:false,
    }
  },

  methods: {
    //引起UI自动更新 push() pop() shift() unshift() splice() sort() reverse()
    //this.names.push("Mike")

    //不会引起UI自动更新 concat() filter() slice() map()
    addData() {
      this.name.push('赵六')
    },
    concatnum() {
      this.num1 = this.num1.concat(this.num2)
    }
  },

//计算函数:计算函数会基于响应式被缓存,一个计算属性只会在其依赖更新时变化
  computed: {
    component1() {
      return this.name[0] === '张三' ? 'yes' : 'no'
    }
  },

  watch:{
    num1(newValue,oldValue){
      console.log('newValue:'+newValue+' oldValue:'+oldValue)
    }
  }
}


</script>

<!--scoped 样式只能在当前页面使用-->
<style scoped>

</style>
//test
//test1