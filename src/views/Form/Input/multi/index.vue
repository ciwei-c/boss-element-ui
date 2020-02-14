<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="输入框基础用法"
  >
    <div class="multi-input-demo">
      <div>
        <boss-input placeholder="请输入内容" v-model="input1">
          <template slot="prepend">Http://</template>
        </boss-input>
      </div>
      <div style="margin-top: 15px;">
        <boss-input placeholder="请输入内容" v-model="input2">
          <template slot="append">.com</template>
        </boss-input>
      </div>
      <div style="margin-top: 15px;">
        <boss-input placeholder="请输入内容" v-model="input3" class="input-with-select">
          <boss-select v-model="select" slot="prepend" placeholder="请选择">
            <boss-option label="餐厅名" value="1"></boss-option>
            <boss-option label="订单号" value="2"></boss-option>
            <boss-option label="用户电话" value="3"></boss-option>
          </boss-select>
          <boss-button slot="append" icon="boss-icon-search"></boss-button>
        </boss-input>
      </div>
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
      select: ""
    };
  }
};
</script>
<style lang="scss">
.multi-input-demo {
  .boss-select .boss-input {
    width: 130px;
  }
  .input-with-select .boss-input-group__prepend {
    background-color: #fff;
  }
}
</style>