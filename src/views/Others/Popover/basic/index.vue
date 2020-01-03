<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="Popover 的属性与 Tooltip 很类似，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。"
  >
    <boss-popover
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <boss-button slot="reference">hover 激活</boss-button>
    </boss-popover>

    <boss-popover
      placement="bottom"
      title="标题"
      width="200"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <boss-button slot="reference">click 激活</boss-button>
    </boss-popover>

    <boss-popover
      ref="popover"
      placement="right"
      title="标题"
      width="200"
      trigger="focus"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    ></boss-popover>
    <boss-button v-popover:popover>focus 激活</boss-button>

    <boss-popover
      placement="bottom"
      title="标题"
      width="200"
      trigger="manual"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      v-model="visible"
    >
      <boss-button slot="reference" @click="visible = !visible">手动激活</boss-button>
    </boss-popover>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      visible: false
    };
  }
};
</script>