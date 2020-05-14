<template>
  <div class="home">
    <p class="title">症状分析</p>
    <BarChart name="患者症状分析" :data="source" :color="color"/>
  </div>
</template>

<script>
import BarChart from "@/components/BarChart";

export default {
  name: "sevenDayVisit",
  components: {
    BarChart
  },
  data() {
    return {
      source: [
        {
          x: "发热",
          y: 152
        },
        {
          x: "咳嗽、呼吸不畅",
          y: 281
        },
        {
          x: "胸闷、心悸",
          y: 51
        },
        {
          x: "恶心、呕吐、腹胀",
          y: 46
        },
        {
          x: "肌肉酸痛、乏力",
          y: 130
        },
        {
          x: "皮肤瘙痒、红肿",
          y: 31
        },
        {
          x: "食欲不振",
          y: 46
        },
        {
          x: "腹泻",
          y: 22
        },
        {
          x: "口干咽燥",
          y: 156
        },
        {
          x: "其他",
          y: 79
        }
      ],
      color: ['#F56C6C']
    };
  },
  mounted() {
    this.source.sort((a,b) => {
      return a.y - b.y
    })
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
