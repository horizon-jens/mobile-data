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
    }
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
        padding: [ 0, 'auto', 'auto', 'auto']
      }));

      chart.source(this.data, {
        y: {
          tickCount: 5
        }
      });

      chart.coord({
        transposed: true
      });

      chart.tooltip(false);

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
          return cfg;
        }
      });

      chart
        .interval()
        .position("x*y")
        .color("#a8d8b9");

      chart.render();

      const canvas = chart.get("canvas");
      const group = canvas.addGroup();
      const shapes = {};
      this.data.forEach(function(obj) {
        const point = chart.getPosition(obj);
        const text = group.addShape("text", {
          attrs: {
            x: point.x + 15,
            y: point.y + 6,
            text: obj.y,
            textAlign: "center",
            textBaseline: "bottom",
            fill: "#b1c8fb"
          }
        });

        shapes[obj.y] = text;
      });

    }
  }
};
</script>

<style scoped lang="less">
.chart-box {
  width: 100%;
}
</style>
