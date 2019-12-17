<template>
  <div>
    <boss-time-select
      v-model="value"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }"
      placeholder="选择时间">
    </boss-time-select>
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

