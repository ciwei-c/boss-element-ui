<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：transition 属性可以定制显隐的动画效果，默认为fade-in-linear。 如果需要关闭 tooltip 功能，disabled 属性可以满足这个需求，它接受一个Boolean，设置为true即可。"
  >
    <boss-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">
      <boss-button @click="disabled = !disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</boss-button>
    </boss-tooltip>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      disabled: false
    };
  }
};
</script>