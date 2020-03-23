<template>
  <div class="wrapper">
  <div class="fill">
    <div class="ct-chart ct-perfect-fourth my-chart"></div>
  </div>
  </div>
</template>

<script>
import Chartist from 'chartist';

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
      var _exposures = {}
      this.summaries.forEach( (s) => _exposures[s.day] = s.exposures)
      this.days.forEach(day => {
        var d = _exposures[day]
        result.push(d || 0)
      })
      return result
    },
    conversions: function() {
      var result = []
      var _conversions = {}
      this.summaries.forEach( (s) => _conversions[s.day] = s.conversions)
      this.days.forEach(day => {
        var d = _conversions[day]
        result.push(d || 0)
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
