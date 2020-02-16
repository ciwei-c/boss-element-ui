<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="除了默认尺寸外，提供了 medium、small、mini 三种尺寸的数字输入框"
  >
    <div style="margin:10px 0">默认尺寸</div>
    <boss-input-number v-model="num1"></boss-input-number>
    <div style="margin:10px 0">大尺寸</div>
    <boss-input-number size="medium" v-model="num2"></boss-input-number>
    <div style="margin:10px 0">小尺寸</div>
    <boss-input-number size="small" v-model="num3"></boss-input-number>
    <div style="margin:10px 0">迷你尺寸</div>
    <boss-input-number size="mini" v-model="num4"></boss-input-number>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      num1: 1,
      num2: 1,
      num3: 1,
      num4: 1
    };
  }
};
</script>