<template>
  <slot :msg="childmessage"></slot>
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