<template>
  <h3>Main 主页面</h3>
  <p>
    搜索内容为:
    {{search}}
  </p>
  <SearchComponent @termChange="getHandle"/>
</template>

<script>
import SearchComponent from "@/components/SearchComponent.vue";

export default {
  data() {
    return {
      search:''
    }
  },
  name: "Main",
  components: {
        SearchComponent
      },
  methods: {
    getHandle(data){
      this.search=data;
      // console.log(this.search)
    }
  }

}
</script>

<style scoped>

</style>