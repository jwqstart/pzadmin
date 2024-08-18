<template>
  <h3>componentB</h3>
  <p>{{title}}</p>
  <p>{{onEvent('子类传递的参数')}}</p>
</template>

<script>

export default {


  data() {
    return {

    }
  },
  props: {
    title: String,
    onEvent: Function
  }


}
</script>

<style scoped>

</style>