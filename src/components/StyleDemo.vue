<template>
  <p :style="{color:activeColor,fontSize:activeFontSize}">style 绑定</p>
  <p :style="styleObject">style 绑定</p>
  <p :style="[styleObject]">style 绑定</p>
</template>

<script>
export default {
  data() {
    return {
      activeColor:'red',
      activeFontSize:'30px',
      styleObject:{
        color:'red',
        fontSize:'30px',
      },

    }
  }
}
</script>

<style>

</style>