let code = `<template>
  <div>
    <boss-radio v-model="radio1" label="1" border>备选项1</boss-radio>
    <boss-radio v-model="radio1" label="2" border>备选项2</boss-radio>
  </div>
  <div style="margin-top: 20px">
    <boss-radio v-model="radio2" label="1" border size="medium">备选项1</boss-radio>
    <boss-radio v-model="radio2" label="2" border size="medium">备选项2</boss-radio>
  </div>
  <div style="margin-top: 20px">
    <boss-radio-group v-model="radio3" size="small">
      <boss-radio label="1" border>备选项1</boss-radio>
      <boss-radio label="2" border disabled>备选项2</boss-radio>
    </boss-radio-group>
  </div>
  <div style="margin-top: 20px">
    <boss-radio-group v-model="radio4" size="mini" disabled>
      <boss-radio label="1" border>备选项1</boss-radio>
      <boss-radio label="2" border>备选项2</boss-radio>
    </boss-radio-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio1: "1",
      radio2: "1",
      radio3: "1",
      radio4: "1"
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"设置border属性可以渲染为带有边框的单选框。",
      anchor:{
        id:"border",
        title:"带有边框"
      }
    }
  }
}