<template>
  <div class="chart-box">
    <ChartTtile :name="name"/>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import F2 from "@antv/f2";
import ChartTtile from "./ChartTitle"

export default {
  name: "LineChart",
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
        pixelRatio: window.devicePixelRatio
      });
      chart.source(this.data, {
        y: {
          tickCount: 5,
          min: 0,
          alias: "门诊量"
        },
        x: {
          range: [0, 1]
        }
      });
      chart
        .line()
        .position("x*y")
        .shape("smooth")
        .color("#f75c2f");

      chart
        .point()
        .position("x*y")
        .color("#f75c2f")
        .style({
          stroke: "#fff",
          lineWidth: 1
        });

      chart.scale("x", {
        type: "timeCat",
        isRounding: true,
        sortable: false
      });

      chart.axis("x", {
        label: () => {
          const cfg = {};
          cfg.fill = "#b1c8fb";
          cfg.fontSize = "12"
          return cfg;
        }
      });

      chart.axis("y", {
        label: () => {
          const cfg = {};
          cfg.fill = "#b1c8fb";
          cfg.fontSize = "12"
          return cfg;
        }
      });

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
