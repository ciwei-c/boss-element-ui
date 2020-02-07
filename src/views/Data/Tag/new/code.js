let code = `<template>
  <boss-row>
    <boss-tag
      v-for="(tag, idx) in tags"
      :key="tag.name"
      closable
      @close="onCloseTag(idx)"
    >{{tag.name}}</boss-tag>
    <boss-button icon="boss-icon-plus" size="mini" @click="edit = !edit" v-show="!edit">New Tag</boss-button>
    <boss-input v-model="newTag" @blur="onAddTag" size="mini" v-show="edit" style="width:100px"></boss-input>
  </boss-row>
</template>
<script>
export default {
  data() {
    return {
      newTag: "",
      edit: false,
      tags: [{ name: "标签一" }]
    };
  },
  methods: {
    onAddTag() {
      if (this.newTag) {
        this.tags.push({
          name: this.newTag
        });
      }
      this.newTag = "";
      this.edit = false;
    },
    onCloseTag(idx) {
      this.tags.splice(idx, 1);
    }
  }
};
</script>
<style lang="scss" scoped>
  .boss-tag {
    margin-right: 10px;
  }
</style>`
export default {
  data(){
    return {
      code,
      codeDesc:"设置closable属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置disable-transitions属性，它接受一个Boolean，true 为关闭。",
      anchor:{
        id:"new",
        title:"动态标签"
      }
    }
  }
}