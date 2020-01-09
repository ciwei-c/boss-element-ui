<template>
  <div 
    :class="{
      'boss-download':true
    }"
  >
    <div class="boss-download__action" @click="onDownload">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import download from "./download"
export default {
  name: "BossDownload",
  props:{
    data:String | Array | Object | Number,
    filename:{
      type:String,
      default:"download.text"
    },
    mimeType:{
      type:String,
      default:"text/plain"
    }
  },
  methods:{
    onDownload(){
      download(this.data, this.filename, this.mimeType)
    }
  }
};
</script>