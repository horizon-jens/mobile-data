<template>
  <div class="home">
    <p class="title">7日门诊量</p>
    <LineChart name="7日门诊量分析" :data="source" />
  </div>
</template>

<script>
import LineChart from "@/components/LineChart";

export default {
  name: "sevenDayVisit",
  components: {
    LineChart
  },
  data() {
    return {
      source: [
        {
          x: "2020/05/01",
          y: 300
        },
        {
          x: "2020/05/02",
          y: 400
        },
        {
          x: "2020/05/03",
          y: 350
        },
        {
          x: "2020/05/04",
          y: 500
        },
        {
          x: "2020/05/05",
          y: 490
        },
        {
          x: "2020/05/06",
          y: 600
        },
        {
          x: "2020/05/07",
          y: 900
        }
      ]
    };
  },
  computed: {},
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
