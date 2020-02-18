<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="允许定义递增递减的步数控制"
  >
    <boss-row>
      <div style="margin:10px 0;">基础步数</div>
      <boss-input-number v-model="num" :step="2"></boss-input-number>
      <div style="margin:10px 0;">严格步数（设置 step-strictly 属性，值只能为步数的倍数，不为倍数时向上取倍数）</div>
      <boss-input-number v-model="num1" :step="2" step-strictly></boss-input-number>
    </boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      num: 1,
      num1: 1
    };
  }
};
</script>