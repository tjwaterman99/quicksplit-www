<template>
  <div class="wrapper">
  <div class="fill">
    <div class="ct-chart ct-perfect-fourth my-chart"></div>
  </div>
  </div>
</template>

<script>
import Chartist from 'chartist';
console.log(Chartist)

export default {
  name: "ExposuresChart",
  props: {
   summaries: Array
  },
  methods: {
    formatIsoDate(date) {
      return date.toISOString().slice(0, 10)
    },
    renderChart: function() {
      var data = {
        labels: this.days,
        series: [
          this.exposures,
          this.conversions
        ]
      };
      new Chartist.Line('.ct-chart', data);
    }
  },
  computed: {
    days: function() {
      var result = [];
      for (var i=1; i<8; i++) {
          var d = new Date();
          d.setDate(d.getDate() - i);
          result.push(this.formatIsoDate(d))
      }
      return result.reverse()
    },
    exposures: function() {
      var result = []
      this.days.forEach( day => {
        this.summaries.forEach( summary =>  {
          if (summary.day == day) {
            result.push(summary.exposures)
          } else {
            result.push(0)
          }
        })
      })
      return result
    },
    conversions: function() {
      var result = []
      this.days.forEach( day => {
        this.summaries.forEach( summary =>  {
          if (summary.day == day) {
            result.push(summary.conversions)
          } else {
            result.push(0)
          }
        })
      })
      return result
    },
  },
  mounted: function() {
    this.renderChart()
  },
  watch: {
   summaries: function() {
     this.renderChart()
   }
  }
}
</script>

<style lang="scss">
@import "@/assets/variables.scss";
@import "chartist/dist/scss/chartist.scss";

.wrapper {
  height: 13em;
  margin-top: 2em
}

.fill {
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
}

.my-chart {
  flex: 1 0;
  overflow: hidden;
  height: auto;
}


</style>
