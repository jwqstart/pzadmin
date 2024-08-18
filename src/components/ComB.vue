<template>
  <h3>ComB</h3>
  <p>{{ title }}</p>
  <p v-for="(item,index) of names" :key="index">{{item}}</p>
  <button @click="updataPar">修改父元素传递过来的数据</button>
</template>

<script>
/**
 * 组件之间传递数据的方案
 * 父传子: props
 * 子传父: this.$emit('changeTitle', '子类修改后的数据') 自定义事件
 */
export default {
  data() {
    return {}
  },
  props: {
    title: {
      type: [String, Number, Array, Object],
      default: '默认值'
    },
  //   数字和字符串可以直接default设置默认值,对象和数组,必须通过工厂模式返回
    names:{
      default(){
        return ['default1','default2']
      }
    }
  },
  methods: {
    updataPar() {
     //错误操作,不允许修改父元素传递过来的数据
      // this.title='我是修改后的数据'
      this.$emit('changeTitle', '子类修改后的数据')
    }
  }


}
</script>

<style scoped>

</style>