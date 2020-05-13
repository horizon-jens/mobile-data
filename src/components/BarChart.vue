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
  name: "BarChart",
  components: {
    ChartTtile
  },
  props: {
    name: {
      type: String,
      default: "柱状图"
    },
    data: {
      type: Array,
      default: function() {
        return [];
      }
    },
    hideX: {
      type: Boolean,
      default: false
    },
    transpose: {
      type: Boolean,
      default: true
    },
    padding: {
      type: Array,
      default: () => [ 0, 'auto', 'auto', 'auto']
    },
    color: {
      type: Array,
      default: () => ["l(0) 0:#83bff6 0.5:#188df0 1:#188df0"]
    },
    showLabel: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    data() {
      // this.chart.changeData(this.data);
      this.init();
    }
  },
  methods: {
    init() {
      let chart = (this.chart = new F2.Chart({
        id: "myChart",
        width: window.innerWidth,
        height: (3 / 4) * window.innerWidth,
        pixelRatio: window.devicePixelRatio,
        padding: this.padding
      }));

      chart.source(this.data, {
        y: {
          tickCount: 4,
          min: 0,
          alias: "数量"
        }
      });
      if(this.transpose) {
        chart.coord({
          transposed: true
        });
      }

      chart.tooltip(false);
      chart.legend(false);

      chart.axis("x", {
        label: () => {
          const cfg = {};
          cfg.fill = "#b1c8fb";
          cfg.fontSize = "14";
          return cfg;
        },
        grid: null
      });

      chart.axis("y", {
        label: () => {
          const cfg = {};
          cfg.fill = "#b1c8fb";
          cfg.fontSize = "12";
          return this.hideX ? null : cfg;
        },
        line: this.hideX ? null : {}
      });

      chart
        .interval()
        .position("x*y")
        .color(this.color);

      chart.render();

      if(this.showLabel) {
        const canvas = chart.get("canvas");
        const group = canvas.addGroup();
        const shapes = {};
        this.data.forEach(function(obj) {
          const point = chart.getPosition(obj);
          const text = group.addShape("text", {
            attrs: {
              x: point.x + 15,
              y: point.y + 6,
              text: obj.label || obj.y,
              textAlign: "center",
              textBaseline: "bottom",
              fill: "#b1c8fb"
            }
          });
  
          shapes[obj.y] = text;
        });
      }else{
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
      }

    }
  }
};
</script>

<style scoped lang="less">
.chart-box {
  width: 100%;
}
</style>
