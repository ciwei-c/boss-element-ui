<template>
  <date-range-panel ref="panel" v-if="type === 'daterange' || type === 'datetimerange'" />
  <month-range-panel ref="panel" v-else-if="type === 'monthrange'" />
  <time-panel ref="panel" v-else-if="type==='time'" />
  <time-range-panel ref="panel" v-else-if="type==='timerange'" />
  <time-select-panel ref="panel" v-else-if="type==='time-select'" />
  <date-panel ref="panel" v-else />
</template>
<script>
import DatePanel from "./date";
import DateRangePanel from "./date-range";
import MonthRangePanel from "./month-range";
import TimePanel from "./time";
import TimeRangePanel from "./time-range";
import TimeSelectPanel from "../panel/time-select";
import Popper from "boss-element-ui/src/utils/vue-popper";
export default {
  mixins: [Popper],
  components: {
    DatePanel,
    DateRangePanel,
    MonthRangePanel,
    TimePanel,
    TimeRangePanel,
    TimeSelectPanel
  },
  computed: {
    type() {
      return this.$parent.type;
    }
  },
  mounted() {
    this.referenceElm = this.$parent.$refs.reference.$el;
    this.$parent.popperElm = this.popperElm = this.$el;
    this.$on("updatePopper", () => {
      if (this.visible) this.updatePopper();
    });
    this.$on("destroyPopper", this.destroyPopper);
  },
  methods: {
    getPanel() {
      return this.$refs.panel;
    }
  }
};
</script>