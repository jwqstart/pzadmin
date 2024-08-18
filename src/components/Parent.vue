<template>
  <h3>parent</h3>
  <Child :msg="message" demo="test" :age="age" :name="names"/>
</template>


<script>
import Child from "@/components/Child.vue";
export default {
   components: {Child},
  data() {
    return{
      message: 'xxxabc',
      age: 18,
      names:['a','b','c']
    }
  },
  props: {

  }
}
/**
 * 子组件接收props
 * 子组件通过props接收父组件传递的数据
 */
</script>

<style scoped>

</style>


