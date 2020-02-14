let code = `<template>
  <boss-row>
    <boss-col :span="8">
      <boss-avatar icon="boss-icon-user-solid"></boss-avatar>
    </boss-col>
    <boss-col :span="8">
      <boss-avatar :src="src"></boss-avatar>
    </boss-col>
    <boss-col :span="8">
      <boss-avatar>user</boss-avatar>
    </boss-col>
  </boss-row>
</template>
<script>
export default {
  data() {
    return {
      src: require("@/assets/avatar.png")
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"",
      anchor:{
        id:"display",
        title:"不同展示"
      }
    }
  }
}