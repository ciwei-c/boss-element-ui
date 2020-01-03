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
          <boss-col :span="6" class="block"><boss-avatar :size="50" :src="circleUrl"></boss-avatar></boss-col>
          <boss-col :span="6" class="block" v-for="size in sizeList" :key="size">
            <boss-avatar :size="size" :src="circleUrl"></boss-avatar>
          </boss-col>
        </boss-row>
      </boss-col>  
      <boss-col :span="12">
        <boss-row style="display: flex;align-items: center;">
          <boss-col :span="6" class="block"><boss-avatar shape="square" :size="50" :src="squareUrl"></boss-avatar></boss-col>
          <boss-col :span="6" class="block" v-for="size in sizeList" :key="size">
            <boss-avatar shape="square" :size="size" :src="squareUrl"></boss-avatar>
          </boss-col>
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