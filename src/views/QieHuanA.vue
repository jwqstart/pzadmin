<template>
  <H3>QieHuanA</H3>
  <p>{{message}}</p>
  <button @click="cli">更新</button>
  <QieHuanC/>
</template>

<script>
import QieHuanC from './QieHuanC.vue'
export default {

  components: {
    QieHuanC
  },

  data() {
    return {
      message:"老数据"
    }
  },
  methods: {
    cli(){
      this.message="新数据"
    }
  },

  beforeUnmount() {
    console.log('QieHuanA beforeUnmount')
  },

  unmounted() {
    console.log('QieHuanA unmounted')
  },

}

</script>

<style>

</style>