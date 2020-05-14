<template>
  <div class="chart-box">
    <ChartTtile :name="name" />
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import F2 from "@antv/f2/lib/index-all";
import ChartTtile from "./ChartTitle";

export default {
  name: "PieChart",
  components: {
    ChartTtile
  },
  props: {
    name: {
      type: String,
      default: "趋势图"
    },
    data: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let chart = new F2.Chart({
        id: "myChart",
        width: window.innerWidth,
        height: (3 / 4) * window.innerWidth,
        pixelRatio: window.devicePixelRatio,
        //padding: [20, 'auto', 'auto', 'auto']
      });
      chart.source(this.data);
      chart.coord("polar", {
        radius: 1,
      });
      chart.axis(false);
      chart.legend(false);
      chart.tooltip({
        alwaysShow: false,
        triggerOn: ["touchstart", "touchmove"],
        triggerOff: "touchend",
        showCrosshairs: true,
        crosshairsStyle: {
          stroke: "rgba(255,255,255,0.5)",
          lineWidth: 1
        }
      });
      
      
      chart
        .interval()
        .position("cat*y")
        .adjust("stack")
        .color("cat",["#2083E8", "#7316dc", "#cf4acd", "#cda23c", "#2ca04f"])
        .style({
          lineWidth: 1,
          stroke: 'rgba(255, 255, 255, 0.4)'
        });
      
      chart.pieLabel({
        anchorOffset: -80,
        inflectionOffset: 0,
        sidePadding: 40,
        activeShape: true,
        label1: function label1(data) {
          return {
            text: data.y + "（人）",
            fill: "#f9f9f9",
            fontSize: 12,
            fontWeight: "bold"
          };
        },
        label2: function label2(data) {
          return {
            text: data.cat,
            fill: "#ddd"
          };
        }
      });

      chart.render();
    }
  }
};
</script>

<style scoped lang="less">
.chart-box {
  width: 100%;
}
</style>
