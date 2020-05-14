<template>
  <div class="home">
    <van-grid :column-num="3">
      <van-grid-item v-for="value in nav" :key="value.route" :icon="value.icon" :text="value.text" @click="$router.push({name: value.route})"/>
    </van-grid>
    <LineChart name="7日门诊量分析" :data="source" class="part-gap"/>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vant';
import LineChart from "@/components/LineChart";

export default {
  name: "home",
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    LineChart
  },
  data() {
    return {
      nav: [
        {
          text: '疾病排行',
          icon: 'photo-o',
          route: 'diseaseRank'
        },
        {
          text: '年龄分布',
          icon: 'photo-o',
          route: 'ageDistribute'
        },
        {
          text: '症状分析',
          icon: 'photo-o',
          route: 'symptomAnalyse'
        },
        {
          text: '建档统计分析',
          icon: 'photo-o',
          route: 'EHRRate'
        },
        {
          text: '住院分析',
          icon: 'photo-o',
          route: 'hospitalizedAnalyse'
        },
        {
          text: '收入分析',
          icon: 'photo-o',
          route: 'incomeAnalyse'
        },
      ],
      source: [
        {
          x: "2020/05/01",
          y: 600,
          type: '门诊总量'
        },
        {
          x: "2020/05/02",
          y: 500,
          type: '门诊总量'
        },
        {
          x: "2020/05/03",
          y: 450,
          type: '门诊总量'
        },
        {
          x: "2020/05/04",
          y: 580,
          type: '门诊总量'
        },
        {
          x: "2020/05/05",
          y: 610,
          type: '门诊总量'
        },
        {
          x: "2020/05/06",
          y: 720,
          type: '门诊总量'
        },
        {
          x: "2020/05/07",
          y: 900,
          type: '门诊总量'
        },
        {
          x: "2020/05/01",
          y: 400,
          type: '普通'
        },
        {
          x: "2020/05/02",
          y: 300,
          type: '普通'
        },
        {
          x: "2020/05/03",
          y: 350,
          type: '普通'
        },
        {
          x: "2020/05/04",
          y: 380,
          type: '普通'
        },
        {
          x: "2020/05/05",
          y: 420,
          type: '普通'
        },
        {
          x: "2020/05/06",
          y: 550,
          type: '普通'
        },
        {
          x: "2020/05/07",
          y: 730,
          type: '普通'
        },
        {
          x: "2020/05/01",
          y: 200,
          type: '急诊'
        },
        {
          x: "2020/05/02",
          y: 200,
          type: '急诊'
        },
        {
          x: "2020/05/03",
          y: 100,
          type: '急诊'
        },
        {
          x: "2020/05/04",
          y: 200,
          type: '急诊'
        },
        {
          x: "2020/05/05",
          y: 190,
          type: '急诊'
        },
        {
          x: "2020/05/06",
          y: 170,
          type: '急诊'
        },
        {
          x: "2020/05/07",
          y: 170,
          type: '急诊'
        }
      ]
    };
  },
  computed: {
  },
  methods: {
  }
};
</script>

<style scoped lang="less">
.home{
  /deep/ .van-grid-item__content{
    background-color: transparent
  }
  /deep/ .van-grid-item__text{
    color: #b1c8fb;
  }
}
.part-gap{
  margin: 15px 0;
}
</style>
