let code = `<template>
  <boss-steps :active="active" finish-status="success">
    <boss-step title="步骤 1"></boss-step>
    <boss-step title="步骤 2"></boss-step>
    <boss-step title="步骤 3"></boss-step>
  </boss-steps>
  <boss-button style="margin-top: 12px;" @click="next">下一步</boss-button>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },

  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    }
  }
};
</script>

`
export default {
  data(){
    return {
      code,
      codeDesc:"设置active属性，接受一个Number，表明步骤的 index，从 0 开始。需要定宽的步骤条时，设置space属性即可，它接受Boolean，单位为px，如果不设置，则为自适应。设置finish-status属性可以改变已经完成的步骤的状态。",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}