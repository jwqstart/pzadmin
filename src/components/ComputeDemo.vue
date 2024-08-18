<template>
  <h3>{{ itbz.name }}</h3>
  <p>{{ itbz.content.length > 0 ? 'yes' : 'no' }}</p>
  <p>{{ itbzcontent }}</p>
  <p>{{ itbzcontents() }}</p>
  <p>{{ itbzcontents() }}</p>
</template>
<script>

export default {
  data() {
    return {
      itbz: {
        name: "itbz",
        content: ["1", "2", "3"]
      }
    }
  },
  //计算函数:计算属性的值会基于期响应式依赖被缓存,一个计算属性只会在其依赖更新时变化。
  computed: {
    itbzcontent() {
      return this.itbz.content.length > 0 ? 'yes' : 'no';
    }
  },
  //方法或者函数:方法调用总是会在其重新渲染时再次触发调用。
  // 相比之下，计算属性只有在它的响应式依赖更新时才会重新求值。
  methods: {
    itbzcontents() {
      return this.itbz.content.length > 0 ? 'yes' : 'no';
    }
  },
  mounted() {

  },
  watch: {},
  created() {
  }
}
</script>