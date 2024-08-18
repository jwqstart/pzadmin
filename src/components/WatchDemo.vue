<template>
  <h3>侦听器</h3>
  <p>{{message}}</p>
  <button @click="updateHandle">修改数据</button>
</template>

<script>

export default {
  data() {
    return {
      message:'hello world',

    }
  },
  watch: {
    message(newval,oldval){
      console.log("新:"+newval,"旧:"+oldval)
    }
  },
  methods:{
    updateHandle(){
      this.message = 'hello vue'
    }
  },
  created() {
  },
  computed:{

  },
  mounted() {
  },
  components:{

  },
  props:{
  },
  mixins:[],
  filters:{},
  directives:{

  },
}
</script>