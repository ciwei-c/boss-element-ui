let code = `<template>
  <boss-calendar v-model="value"></boss-calendar>
</template>
<script>
export default {
  data() {
    return {
      value: new Date()
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"设置 value 来指定当前显示的月份。如果 value 未指定，则显示当月。value 支持 v-model 双向绑定。",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}