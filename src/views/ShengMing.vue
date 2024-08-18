<template>
  <h3>生命周期</h3>
  <p>
    {{message}}
  </p>
  <button @click="update">更新数据</button>
</template>

<script >

/**
 * 生命周期
 * 创建期:
 * 更新期:
 * 销毁期:
 * 1.beforeCreate: 实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用
 * 2.created: 实例创建完成之后被调用，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算，
 * watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见
 *
 * 3.beforeMount: 在挂载开始之前被调用：相关的 render 函数首次被调用。
 * 4.mounted: el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
 * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。
 * 注意 mounted 不会保证所有的子组件也都被挂载完成。如果你希望等到整个视图都渲染完毕，可以在 mounted 内部使用 vm.$nextTick：
 *
 * 5.beforeUpdate: 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
 * 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
 * 6.updated: 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
 * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，
 * 你应该避免在此期间更改状态，因为这可能会导致更新无限循环。
 *
 * 7.activated: keep-alive 组件激活时调用。
 *
 * 8.deactivated: keep-alive 组件停用时调用。
 *
 * 9.beforeDestroy: 实例销毁之前调用。在这一步，实例仍然完全可用。
 * 10.destroyed: Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
 *
 *
 */

export default {
  data() {
    return {
      message:'更新之前'
    }
  },
  methods:{
    update(){
      this.message = '更新之后'
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },
  beforeUnmount() {
    console.log('beforeDestroy')
  },
  unmounted() {
    console.log('destroyed')
  }
}

</script>

<style scoped>

</style>