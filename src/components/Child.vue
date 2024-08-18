<template>
  <h3>child</h3>
  <p>{{ msg }}</p>
  <p>{{ demo }}</p>
  <p>{{ age }}</p>
  <ul>
    <li v-for="(item,index) of name" :key="index"> {{ item }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['msg', 'demo', 'age', 'name']


}

</script>

<style scoped>

</style>