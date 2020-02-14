let code = `<template>

  <div>
    <boss-checkbox v-model="checked1" label="备选项1" border></boss-checkbox>
    <boss-checkbox v-model="checked2" label="备选项2" border></boss-checkbox>
  </div>
  <div style="margin-top: 20px">
    <boss-checkbox v-model="checked3" label="备选项1" border size="medium"></boss-checkbox>
    <boss-checkbox v-model="checked4" label="备选项2" border size="medium"></boss-checkbox>
  </div>
  <div style="margin-top: 20px">
    <boss-checkbox-group v-model="checkboxGroup1" size="small">
      <boss-checkbox label="备选项1" border></boss-checkbox>
      <boss-checkbox label="备选项2" border disabled></boss-checkbox>
    </boss-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <boss-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
      <boss-checkbox label="备选项1" border></boss-checkbox>
      <boss-checkbox label="备选项2" border></boss-checkbox>
    </boss-checkbox-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked1: true,
      checked2: false,
      checked3: false,
      checked4: true,
      checkboxGroup1: [],
      checkboxGroup2: []
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"设置border属性可以渲染为带有边框的多选框。",
      anchor:{
        id:"border",
        title:"带有边框"
      }
    }
  }
}