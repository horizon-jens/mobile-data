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
        pixelRatio: window.devicePixelRatio
      });
      chart.source(this.data);
      chart.coord("polar", {
        transposed: true,
        radius: 0.75,
        innerRadius: 0.45
      });
      chart.axis(false);
      chart.legend(false);
      chart.tooltip(false);
      chart.guide().html({
        position: ["50%", "50%"],
        html:
          '<div style="text-align: center;width:150px;height: 50px;">\n      <p style="font-size: 12px;color: #f1f1f1;margin: 0" id="title"></p>\n      <p style="font-size: 18px;color: #fff;margin: 0;font-weight: bold;" id="money"></p>\n      </div>'
      });
      chart
        .interval()
        .position("a*y")
        .adjust("stack")
        .color("cat", [
          "#2083E8",
          "#175ef0",
          "#7316dc",
          "#9800f8",
          "#cf4acd",
          "#da7f5b",
          "#cda23c",
          "#76ae2e",
          "#13b77b",
          "#2ca04f"
        ]);
      chart.pieLabel({
        sidePadding: 30,
        activeShape: true,
        label1: function label1(data) {
          return {
            text: "￥" + data.y,
            fill: "#f9f9f9",
            fontWeight: "bold"
          };
        },
        label2: function label2(data) {
          return {
            text: data.cat,
            fill: "#ddd"
          };
        },
        onClick: function onClick(ev) {
          const data = ev.data;
          if (data) {
            document.getElementById("title").innerText = data.cat;
            document.getElementById("money").innerText = data.y;
          }
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
