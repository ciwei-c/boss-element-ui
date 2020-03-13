let code = `<template>
  <boss-upload
    action="https://jsonplaceholder.typicode.com/posts/"
    list-type="picture-card"
    :on-preview="handlePictureCardPreview"
    :on-remove="handleRemove"
  >
    <i class="boss-icon-plus"></i>
  </boss-upload>
  <boss-dialog :visible.sync="dialogVisible">
    <img width="100%" :src="dialogImageUrl" alt />
  </boss-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
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
        id:"type",
        title:"照片墙"
      }
    }
  }
}