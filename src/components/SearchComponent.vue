<template>
   搜索:<input type="text" v-model="search">
</template>

<script>
  export default {

    data() {
      return {
        search: ''
      }
    },
    watch: {
      search(newvalue,oldvalue) {
        this.$emit("termChange", newvalue)
      }
    }



  }
</script>

<style scoped>

</style>