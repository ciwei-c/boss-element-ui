<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="带有图标标记输入类型"
  >
    <div>
      属性方式：
      <boss-input placeholder="请选择日期" suffix-icon="boss-icon-date" v-model="input1"></boss-input>
      <boss-input placeholder="请输入内容" prefix-icon="boss-icon-search" v-model="input2"></boss-input>
    </div>
    <div>
      slot 方式：
      <boss-input placeholder="请选择日期" v-model="input3">
        <i slot="suffix" class="boss-input__icon boss-icon-date"></i>
      </boss-input>
      <boss-input placeholder="请输入内容" v-model="input4">
        <i slot="prefix" class="boss-input__icon boss-icon-search"></i>
      </boss-input>
    </div>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      input4: ""
    };
  }
};
</script>
<style lang="scss" scoped>
.boss-input {
  margin: 10px 0;
}
</style>