<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="按钮样式的单选组合。"
  >
    <div>
      <boss-radio-group v-model="radio1">
        <boss-radio-button label="上海"></boss-radio-button>
        <boss-radio-button label="北京"></boss-radio-button>
        <boss-radio-button label="广州"></boss-radio-button>
        <boss-radio-button label="深圳"></boss-radio-button>
      </boss-radio-group>
    </div>
    <div style="margin-top: 20px">
      <boss-radio-group v-model="radio2" size="medium">
        <boss-radio-button label="上海"></boss-radio-button>
        <boss-radio-button label="北京"></boss-radio-button>
        <boss-radio-button label="广州"></boss-radio-button>
        <boss-radio-button label="深圳"></boss-radio-button>
      </boss-radio-group>
    </div>
    <div style="margin-top: 20px">
      <boss-radio-group v-model="radio3" size="small">
        <boss-radio-button label="上海"></boss-radio-button>
        <boss-radio-button label="北京" disabled></boss-radio-button>
        <boss-radio-button label="广州"></boss-radio-button>
        <boss-radio-button label="深圳"></boss-radio-button>
      </boss-radio-group>
    </div>
    <div style="margin-top: 20px">
      <boss-radio-group v-model="radio4" disabled size="mini">
        <boss-radio-button label="上海"></boss-radio-button>
        <boss-radio-button label="北京"></boss-radio-button>
        <boss-radio-button label="广州"></boss-radio-button>
        <boss-radio-button label="深圳"></boss-radio-button>
      </boss-radio-group>
    </div>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      radio1: "上海",
      radio2: "上海",
      radio3: "上海",
      radio4: "上海"
    };
  }
};
</script>