let code = `<template>
  <boss-row>
    <boss-badge :value="1">
      <boss-avatar shape="square" :src="squareUrl"></boss-avatar>
    </boss-badge>
  </boss-row>
  <boss-row>
    <boss-badge is-dot>
      <boss-avatar shape="square" :src="squareUrl"></boss-avatar>
    </boss-badge>
  </boss-row>
</template>
<script>
export default {
  data() {
    return {
      squareUrl: require("@/assets/avatar-round.png"),
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
        id:"message",
        title:"新消息"
      }
    }
  }
}