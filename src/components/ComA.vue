<template>
  <h3>ComA</h3>
  <p>{{title}}</p>
  <button @click="updataPar">修改数据</button>
  <ComB :title="title" @changeTitle="getHandle"/>
</template>

<script>
import ComB from "@/components/ComB.vue";
export default {
  components: { ComB },

  data() {
     return {
      title: 1,
    }
  },
  methods: {
    updataPar() {
      this.title='我是修改后的数据'
    },
    getHandle(data){
      this.title=data
      console.log(data)
    }
  },




}
</script>

<style scoped>

</style>