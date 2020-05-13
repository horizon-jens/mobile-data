<template>
  <div class="home">
    <van-grid :column-num="3">
      <van-grid-item v-for="value in nav" :key="value.route" :icon="value.icon" :text="value.text" @click="$router.push({name: value.route})"/>
    </van-grid>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vant';

export default {
  name: "home",
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  },
  data() {
    return {
      nav: [
        {
          text: '7日门诊量分析',
          icon: 'photo-o',
          route: 'sevenDayVisit'
        },
        {
          text: '疾病排行',
          icon: 'photo-o',
          route: 'diseaseRank'
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
</style>
