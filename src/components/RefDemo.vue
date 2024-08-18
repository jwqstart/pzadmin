<template>
  <div ref="container" class="container">{{ container }}</div>
  <input type="text" ref="username">
  <button @click="getEleHandle">获取元素</button>
</template>
<script >
export default {
  name: 'RefDemo',
  components: {

  },
  data() {
    return{
      container:"内容",
    }
  },

  methods: {
    getEleHandle(){
      console.log(this.$refs.container.innerHTML="hahaha")
      console.log(this.$refs.username.value)
    },
  }
}
</script>
/**
 * 内容改变: {{ 模板语法}}
 * 属性改变: v-bind: 指令 或 : 指令
 * 事件改变: v-on: 指令 或 @ 指令
 * 双向绑定: v-model
 * 条件渲染: v-if v-else v-show
 * 列表渲染: v-for
 * 事件修饰符: .stop .prevent .capture .self .once
 * 按键修饰符: .enter .tab .delete (捕获“删除”和“退格”键) .esc .space .up .down .left .right
 * 系统修饰键: .ctrl .alt .shift .meta (用于keyup事件时表示是否同时按下ctrl/command键)
 * 鼠标按钮修饰符: .left .right .middle
 * 表单修饰符: .lazy .number .trim
 * 组件基础: components
 * 组件注册: components
 * 组件传值: props
 * 组件传值校验: props
 * 组件插槽: slots
 * 组件生命周期: created
 * 组件生命周期: mounted
 * 组件生命周期: updated
 * 组件生命周期: destroyed
 * 组件生命周期: activated
 * 组件生命周期: deactivated
 * 组件生命周期: errorCaptured
 * 组件生命周期: renderTracked
 * 组件生命周期: renderTriggered
 * 组件生命周期: serverPrefetch
 * 组件生命周期: watch
 * 组件生命周期: provide/inject
 * 组件生命周期: mixins
 * 组件生命周期: extends
 * 组件生命周期: name
 * 组件生命周期: delimiters
 * 组件生命周期: functional
 * 组件生命周期: model
 * 组件生命周期: inheritAttrs
 * 组件生命周期: propsData
 * 组件生命周期: computed
 */
