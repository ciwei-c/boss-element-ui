<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="对不同章节的文本段落进行分割。"
  >
    <div>
      <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
      <boss-divider></boss-divider>
      <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
    </div>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>