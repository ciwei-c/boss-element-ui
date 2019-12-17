<template>
  <div>
    <boss-select v-model="value" placeholder="请选择">
      <boss-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></boss-option>
    </boss-select>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      options: [
        {
          value: "黄金糕"
        },
        {
          value: "双皮奶"
        },
        {
          value: "蚵仔煎"
        },
        {
          value: "龙须面"
        },
        {
          value: "北京烤鸭"
        }
      ],
      value: ""
    };
  },
  created() {
  },
  methods: {
  }
};
</script>

