<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="进度条基础用法"
  >
    <boss-row>
      <boss-col :span="8">
        <boss-progress :percentage="percentage" :color="customColor"></boss-progress>
      </boss-col>
      <boss-col :span="8">
        <boss-progress :percentage="percentage" :color="customColorMethod" type="circle"></boss-progress>
      </boss-col>
      <boss-col :span="8">
        <boss-progress :percentage="percentage" :color="customColors" type="dashboard"></boss-progress>
      </boss-col>
    </boss-row>
    <div>
      <boss-button-group>
        <boss-button icon="boss-icon-minus" @click="decrease"></boss-button>
        <boss-button icon="boss-icon-plus" @click="increase"></boss-button>
      </boss-button-group>
    </div>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      percentage: 20,
      customColor: "#409eff",
      customColors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 }
      ]
    };
  },
  methods: {
    customColorMethod(percentage) {
      if (percentage < 30) {
        return "#909399";
      } else if (percentage < 70) {
        return "#e6a23c";
      } else {
        return "#67c23a";
      }
    },
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    }
  }
};
</script>