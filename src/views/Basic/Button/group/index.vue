<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="以按钮组的方式出现，常用于多项类似操作。"
    :codeDesc="codeDesc"
  >
    <boss-row>
      <boss-button-group>
        <boss-button type="primary" icon="boss-icon-arrow-left">上一页</boss-button>
        <boss-button type="primary">
          下一页
          <i class="boss-icon-arrow-right boss-icon--right"></i>
        </boss-button>
      </boss-button-group>
    </boss-row>
    <boss-row>
      <boss-button-group>
        <boss-button icon="boss-icon-edit"></boss-button>
        <boss-button icon="boss-icon-share"></boss-button>
        <boss-button icon="boss-icon-delete"></boss-button>
      </boss-button-group>
    </boss-row>
    <boss-row>
      <boss-button-group>
        <boss-button icon="boss-icon-edit" disabled></boss-button>
        <boss-button icon="boss-icon-share" disabled></boss-button>
        <boss-button icon="boss-icon-delete" disabled></boss-button>
      </boss-button-group>
    </boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      size: "default",
      currentTheme: ""
    };
  },
  created() {
    this.currentTheme = this.$store.state.app.theme;
  }
};
</script>
