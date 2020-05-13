<template>
  <p class="chart-title"><van-icon name="photo" class="chart-icon"/>{{name}}</p>
</template>

<script>
import { Icon } from 'vant';

export default {
  name: "ChartTitle",
  components: {
    [Icon.name]: Icon,
  },
  props: {
    name: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped lang="less">
.chart-title {
  padding: 0 15px;
  font-size: 16px;
  color: #33ccff;
  line-height: 24px;
  font-weight: 600;
}
.chart-icon{
  float: left;
  font-size: 22px;
}
</style>
