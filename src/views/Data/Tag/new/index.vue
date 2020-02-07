<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="可新增标签"
  >
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
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
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
</style>