<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="通过 shape 和 size 设置头像的形状和大小。"
  >
    <boss-row>
      <boss-col :span="12">
        <boss-row style="display: flex;align-items: center;">
          <div style="margin-right:20px" class="block"><boss-avatar :size="64" :src="circleUrl"></boss-avatar></div>
          <div style="margin-right:20px" class="block" v-for="size in sizeList" :key="size">
            <boss-avatar :size="size" :src="circleUrl"></boss-avatar>
          </div>
        </boss-row>
      </boss-col>  
      <boss-col :span="12">
        <boss-row style="display: flex;align-items: center;">
          <div style="margin-right:20px" :span="9" class="block"><boss-avatar shape="square" :size="64" :src="squareUrl"></boss-avatar></div>
          <div style="margin-right:20px" :span="5" class="block" v-for="size in sizeList" :key="size">
            <boss-avatar shape="square" :size="size" :src="squareUrl"></boss-avatar>
          </div>
        </boss-row>
      </boss-col> 
    </boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data () {
    return {
      circleUrl: require("@/assets/avatar-circel.png"),
      squareUrl: require("@/assets/avatar-round.png"),
      sizeList: ["large", "medium", "small"]
    }
  }
};
</script>