<template>
  <div class="component-demo">
    <boss-checkbox v-model="checkValue"></boss-checkbox>
    <boss-checkbox-group v-model="checkValues">
      <boss-checkbox-button label="1"></boss-checkbox-button>
      <boss-checkbox-button label="2"></boss-checkbox-button>
      <boss-checkbox-button label="3"></boss-checkbox-button>
    </boss-checkbox-group>
    <boss-checkbox-group v-model="checkValues" @change="onchange">
      <boss-checkbox label="1"></boss-checkbox>
      <boss-checkbox label="2"></boss-checkbox>
      <boss-checkbox label="3"></boss-checkbox>
    </boss-checkbox-group>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      checkValue: true,
      checkValues: []
    };
  },
  created() {
  },
  methods: {
    onchange(v) {
    }
  }
};
</script>

