<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button @click="increment">
    count is :{{ count.count }}---{{ x }}
    {{ count1? 'yes': 'no'}}
  </button>
  <div ref="chart" id="api"></div>

  <input type="text" placeholder="请输入城市名称" v-model="city1">
  <button class="iconfont icon-sousuo" @click="search"></button>
  <p>{{ city2 }}</p>

  <div class="mb-4">
    <el-button round>Default</el-button>
    <el-button round type="primary">Primary</el-button>
    <el-button round type="success">Success</el-button>
    <el-button round type="info">Info</el-button>
    <el-button round type="warning">Warning</el-button>
    <el-button round type="danger">Danger</el-button>
  </div>
  <div>
    <el-button :icon="Search" circle/>
    <el-button type="primary" :icon="Edit" circle/>
    <el-button type="success" :icon="Check" circle/>
    <el-button type="info" :icon="Message" circle/>
    <el-button type="warning" :icon="Star" circle/>
    <el-button type="danger" :icon="Delete" circle/>
  </div>
</template>

<script setup>
import {ref, onMounted, watch, reactive} from 'vue';
import * as echarts from 'echarts';
import axios from "axios";

const count1 = ref(10);
const count = reactive({
  count: 10,
})

const x = ref(`a`)
const chart = ref()

const city1 = ref('北京')
const city2 = ref('北京')

const search = async () => {
  city2.value = city1.value
  //实时天气
  let res = await axios.get(`https://devapi.qweather.com/v7/weather/3d`,
      {
        params: {
          location: '101010100',
          key: '3e16fb35beb847b3998e7aaac6b12ddb'
        }
      })
  console.log(res.data)
}

function increment() {
  count.count++;
  count1.value++;
}

function charInit() {
  //基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(chart.value);

  // 指定图表的配置项和数据
  var option = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
      data: ['销量1']
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
      name: '销量1',
      type: 'bar',
      data: [50, 20, 36, 10, 10, 20]
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

}

watch(count, (newValue, oldValue) => {
  console.log(`count change from ${oldValue} to ${newValue}`);
  console.log(`count is ${count.count}`)
})

onMounted(() => {
  // 请求数据
  console.log(`count is ${count.count}`);
  charInit()
})

import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>

<style scoped>

#api {
  width: 600px;
  height: 400px;
}

</style>