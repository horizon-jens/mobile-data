<template>
  <div class="home">
    <p class="title">建档统计分析</p>
    <BarChart name="建档数&建档率统计" :data="source" :hideX="true" />
  </div>
</template>

<script>
import BarChart from "@/components/BarChart";

export default {
  name: "EHRRate",
  components: {
    BarChart
  },
  data() {
    return {
      source: [
        {
          x: "新登镇",
          y: 13748,
          label: "13,748(83%)"
        },
        {
          x: "渌渚镇",
          y: 7349,
          label: "7,349(74%)"
        },
        {
          x: "灵桥镇",
          y: 6355,
          label: "6,355(78%)"
        },
        {
          x: "大源镇",
          y: 8378,
          label: "8,378(93%)"
        },
        {
          x: "龙门镇",
          y: 3341,
          label: "3,341(95%)"
        },
        {
          x: "银湖街道",
          y: 10348,
          label: "10,348(88%)"
        },
        {
          x: "东洲街道",
          y: 7343,
          label: "7,342(92%)"
        },
        {
          x: "鹿山街道",
          y: 6348,
          label: "6,348(76%)"
        },
        {
          x: "春江街道",
          y: 9348,
          label: "9,348(83%)"
        },
        {
          x: "富春街道",
          y: 10820,
          label: "10,820(89%)"
        }
      ]
    };
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
