<template>
  <p :class="{'active':isactive,'text-danger':hasError }">class样式绑定对象1</p>
  <p :class="classObjece">class样式绑定对象2</p>
  <p :class="[arrActive,arrDanger]">class样式绑定数组</p>
  <p :class="isactive?'active':''">class样式绑定三元运算</p>
</template>
<script>
export default {
  data() {
    return {

      isactive: true,
      hasError: true,
      classObjece: {
        'active': true,
        'text-danger': true
      },
      arrActive: ['active'],
      arrDanger: ['text-danger'],

    }

  }
}
</script>

<style>

.active {
  color: red;
  font-size: 20px;
}
</style>