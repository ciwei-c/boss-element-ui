let code = `<template>
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
</template>
<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      select: ''
    }
  }
};
</script>
<style>
  .boss-select .boss-input {
    width: 130px;
  }
  .input-with-select .boss-input-group__prepend {
    background-color: #fff;
  }
</style>
`
export default {
  data(){
    return {
      code,
      codeDesc:"可通过 slot 来指定在 input 中前置或者后置内容。",
      anchor:{
        id:"multi",
        title:"复合型输入框"
      }
    }
  }
}