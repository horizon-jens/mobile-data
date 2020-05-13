<template>
  <div class="home">
    <p class="title">疾病排行</p>
    <BarChart name="全区疾病排名(前十)" :data="source" />
  </div>
</template>

<script>
import BarChart from "@/components/BarChart";

export default {
  name: "diseaseRank",
  components: {
    BarChart
  },
  data() {
    return {
      source: [
        {
          x: "高血压病3级(高危)",
          y: 821
        },
        {
          x: "上呼吸道感染",
          y: 762
        },
        {
          x: "高血压",
          y: 496
        },
        {
          x: "支气管炎",
          y: 402
        },
        {
          x: "急性上呼吸道感染",
          y: 373
        },
        {
          x: "2型糖尿病",
          y: 316
        },
        {
          x: "急性支气管炎",
          y: 250
        },
        {
          x: "慢性胃炎",
          y: 230
        },
        {
          x: "糖尿病",
          y: 192
        },
        {
          x: "高血压病3级(中危)",
          y: 221
        }
      ]
    };
  },
  mounted() {
    this.source.sort((a,b) => {
      return a.y - b.y
    })
  },
  methods: {}
};
</script>

<style scoped lang="less">
.title{
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 3px;
  padding-bottom: 20px;
}
</style>
