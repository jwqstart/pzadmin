<template>
  <h3>数组变化监听</h3>
  <button v-on:click="addListHandle">添加数据</button>
  <ul>
    <li v-for="(item,index) of names" :key="index">{{ item }}</li>
  </ul>

  <button @click="concatnum">合并数组</button>
  <h3>数组1</h3>
  <p v-for="(item,index) of numb1" :key="index">{{ item }}</p>


  <h3>数组2</h3>
  <p v-for="(item,index) of numb2" :key="index">{{ item }}</p>
</template>

<script>

export default {
  data() {
    return {
      names: ["John", "Jane", "Bob", "Alice"],
      numb1:[1,2,3,4,5],
      numb2:[6,7,8,9]
    }
  },

  methods: {
    addListHandle() {
      //引起UI自动更新 push() pop() shift() unshift() splice() sort() reverse()
      this.names.push("Mike")

      //不会引起UI自动更新 concat() filter() slice() map()
      // this.names=this.names.concat(["cevs"])
      // console.log(this.names.concat(["cevs"]))
    },
    concatnum(){

      this.numb1=this.numb1.concat(this.numb2)
      console.log(this.numb1.concat(this.numb2))
    }
  }


}


</script>

