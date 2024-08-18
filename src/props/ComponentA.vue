<template>
  <h3>componentA</h3>
  <ComB  title="标题" :onEvent="dataFn"/>
</template>

<script >
import ComB from "@/props/ComponentB.vue";
export default {
  data() {
    return {}
  },
  components:{
    ComB
  },
  methods:{
    dataFn(data){
      console.log(data)
    }
  },
  mounted() {
  }

}
</script>

<style scoped>

</style>