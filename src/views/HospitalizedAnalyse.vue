<template>
  <div class="home">
    <p class="title">住院管理</p>
    <BarChart name="病人管理" :data="source" :transpose=false :padding="padding" :color="color" :showLabel=false />
    <ChartTtile name="床位使用率"/>
    <div class="rate">
      <van-circle v-model="currentRate" :stroke-width="80" :rate="78.2" :speed="100" :text="text" size="200px" :color="gradientColor"/>
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/BarChart";
import ChartTtile from "@/components/ChartTitle";
import { Circle } from 'vant';

export default {
  name: "incomeAnalyse",
  components: {
    BarChart,
    ChartTtile,
    [Circle.name]: Circle
  },
  data() {
    return {
      source: [
        {
          x: "今日入院",
          y: 22,
        },
        {
          x: "今日出院",
          y: 19,
        },
        {
          x: "现有住院",
          y: 78,
        }
      ],
      currentRate: 0,
      padding: [40, 40, 'auto', 40],
      color: ['l(90) 0:#1890ff 1:#70cdd0'],
      text: '床位使用率:78.2%',
      gradientColor: {
        '0%': '#70cdd0',
        '100%': '#1890ff',
      },
    };
  },
  mounted() {
    this.source.sort((a, b) => {
      return a.y - b.y;
    });
  },
  methods: {}
};
</script>

<style scoped lang="less">
.title {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 3px;
  padding-bottom: 20px;
}
.rate{
  text-align: center;
  /deep/ .van-circle__text{
    color: #b1c8fb;
  }
}
</style>
