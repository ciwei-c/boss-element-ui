<template>
  <div>
    <boss-date-picker
      v-model="value"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </boss-date-picker>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      value: ""
    };
  },
  created() {
  },
  methods: {
  }
};
</script>

