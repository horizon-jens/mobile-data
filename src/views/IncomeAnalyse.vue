<template>
  <div class="home">
    <p class="title">收入分析</p>
    <PieChart name="全区收入分析" :data="source" />
  </div>
</template>

<script>
import PieChart from "@/components/PieChart";

export default {
  name: "incomeAnalyse",
  components: {
    PieChart
  },
  data() {
    return {
      source: [
        {
          cat: "化学药品",
          y: 159785.24,
          a: "1"
        },
        {
          cat: "中成药",
          y: 110818.85,
          a: "1"
        },
        {
          cat: "一般诊疗费",
          y: 71715,
          a: "1"
        },
        {
          cat: "疫苗费",
          y: 53574,
          a: "1"
        },
        {
          cat: "治疗费",
          y: 26738,
          a: "1"
        },
        {
          cat: "化验费",
          y: 20648.2,
          a: "1"
        },
        {
          cat: "中草药",
          y: 14460,
          a: "1"
        },
        {
          cat: "放射费",
          y: 7037.64,
          a: "1"
        },
        {
          cat: "彩超",
          y: 6940,
          a: "1"
        },
        {
          cat: "其他",
          y: 11155.51,
          a: "1"
        }
      ]
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
</style>
