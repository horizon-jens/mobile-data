<template>
  <div class="home">
    <p class="title">年龄分布</p>
    <PieChart name="患者年龄分布" :data="source" />
  </div>
</template>

<script>
import PieChart from "@/components/PieChart2";

export default {
  name: "ageDistribute",
  components: {
    PieChart
  },
  data() {
    return {
      source: [
        {
          cat: "14岁以下",
          y: 182,
        },
        {
          cat: "15-24岁",
          y: 146,
        },
        {
          cat: "25-45岁",
          y: 252,
        },
        {
          cat: "46-69岁",
          y: 220,
        },
        {
          cat: "69岁以上",
          y: 104,
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
