<template>
  <div>
    <boss-date-picker
      v-model="value"
      type="date"
      placeholder="选择日期">
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

