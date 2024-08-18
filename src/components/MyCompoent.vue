<template>
  <div id="container">{{message}}</div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue!',
    }
  },
  methods: {

  }
}

</script>
<!--scoped : 样式只在当前组件生效-->
<style scoped>
#container{
  color: aqua;
  font-size: 20px;
}
</style>