<template>
  <slot name="header"  :msgB="childmessage" ></slot>
  <hr>
  <slot name="main"></slot>

</template>

<script >

export default {
  data() {
    return {
      childmessage: 'ziyuansu'
    }
  }
}

</script>