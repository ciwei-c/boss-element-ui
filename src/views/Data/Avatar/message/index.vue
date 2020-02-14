<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc
  >
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
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      squareUrl: require("@/assets/avatar-round.png"),
    };
  }
};
</script>