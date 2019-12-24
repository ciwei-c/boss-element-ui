<template>
  <div>
    <boss-row>
      <boss-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :format="(val)=>{return `#${val}`}"></boss-input-number>
    </boss-row>
    <boss-row>
      <boss-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" format="money"></boss-input-number>
    </boss-row>
    <boss-row>
      <boss-input-number v-model="num" @change="handleChange" :precision="2" :min="1" label="描述文字" format="percent"></boss-input-number>
    </boss-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
      }
    }
  };
</script>