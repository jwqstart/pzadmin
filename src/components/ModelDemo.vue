<template>
  <h3>表单输入绑定</h3>
  <form action="">
    <input type="text" v-model.lazy="message">
    <p>{{message}}</p>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{checked}}</label>
  </form>
</template>
<script>
// v-model 将表单输入数据同步到js中相对应的变量.手动连接值绑定和更改监听器可能很麻烦,v-model指令帮我们简化了这一操作
// v-model 提供的修饰符 .lazy .number .trim
export default {
  name: 'ModelDemo',
  data() {
    return {
      message:'',
      checked:false

    }
  },
  methods(){

  },
  created() {
  },
  computed: {},
  watch: {},

  components: {},
  mounted() {},

}
</script>