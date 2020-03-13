let code = `<template>
  <boss-upload
    drag
    action="https://jsonplaceholder.typicode.com/posts/"
    multiple
  >
    <i class="boss-icon-upload"></i>
    <div class="boss-upload__text">
      将文件拖到此处，或
      <em>点击上传</em>
    </div>
    <div class="boss-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
  </boss-upload>
</template>
`
export default {
  data(){
    return {
      code,
      codeDesc:"",
      anchor:{
        id:"drag",
        title:"拖拽上传"
      }
    }
  }
}