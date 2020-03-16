<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="当有多层评价时，可以用不同类型的 icon 区分评分层级"
  >
    <boss-rate
      v-model="value"
      :icon-classes="iconClasses"
      void-icon-class="icon-rate-face-off"
      :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
    ></boss-rate>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      value: null,
      iconClasses: ["icon-rate-face-1", "icon-rate-face-2", "icon-rate-face-3"]
    };
  }
};
</script>