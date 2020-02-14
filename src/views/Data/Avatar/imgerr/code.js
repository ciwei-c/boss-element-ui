let code = `<template>
  <boss-row>
    <boss-col :span="12">
      <boss-row style="display: flex;align-items: center;">
        <boss-col :span="6" class="block"><boss-avatar :size="64" :src="circleUrl"></boss-avatar></boss-col>
        <boss-col :span="6" class="block" v-for="size in sizeList" :key="size">
          <boss-avatar :size="size" :src="circleUrl"></boss-avatar>
        </boss-col>
      </boss-row>
    </boss-col>  
    <boss-col :span="12">
      <boss-row style="display: flex;align-items: center;">
        <boss-col :span="6" class="block"><boss-avatar shape="square" :size="64" :src="squareUrl"></boss-avatar></boss-col>
        <boss-col :span="6" class="block" v-for="size in sizeList" :key="size">
          <boss-avatar shape="square" :size="size" :src="squareUrl"></boss-avatar>
        </boss-col>
      </boss-row>
    </boss-col> 
  </boss-row>
</template>
<script>
export default {
  data () {
    return {
      circleUrl: require("@/assets/avatar-circel.png"),
      squareUrl: require("@/assets/avatar-round.png"),
      sizeList: ["large", "medium", "small"]
    }
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
        id:"imgerr",
        title:"图片加载失败回调"
      }
    }
  }
}