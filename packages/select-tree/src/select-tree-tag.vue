<template>
  <div class="boss-select-tree__multiple-tags boss-select-tree__multiple-tags--collapsetags" v-if="collapseTags && enableTag && value.length" ref="collapsetags">
    <boss-tag type="info" closable @close="onCloseTag(0)">{{ getValue(value[0]) }}</boss-tag>
    <boss-tag type="info" v-if="value.length > 1">+{{value.length - 1}}</boss-tag>
    <tag-input key="input" :isSearching="isSearching" :parent="parent" :value="value" @searching="resetInputHeight"/>
  </div>
  <transition-group class="boss-select-tree__multiple-tags" @after-leave="resetInputHeight" v-else-if="!collapseTags && enableTag" ref="tags">
    <boss-tag type="info" v-for="(val,idx) in value" :key="val" closable  @close="onCloseTag(idx)">{{ getValue(val) }}</boss-tag>
    <tag-input key="input" :isSearching="isSearching" :parent="parent" :value="value" @searching="resetInputHeight"/>
  </transition-group>
</template>
<script>
import BossTag from "boss-element-ui/packages/tag";
import TagInput from "./select-tree-tag-input"
export default {
  components:{BossTag, TagInput},
  props:{
    collapseTags:Boolean,
    getValue:Function,
    value:Array,
    isSearching:Boolean,
    parent:Object,
    setValue:Function,
    resetInputHeight:Function
  },
  data(){
    return {
      treePopper:null,
      inputValue:""
    }
  },
  computed:{
    enableTag(){
      return this.treePopper
    }
  },
  created(){},
  mounted(){
    this.$nextTick(()=>{
      this.treePopper = this.$parent.$refs['tree-popper']
    })
  },
  methods:{
    getHeight(){
      return this.$el.offsetHeight
    },
    onCloseTag(idx){
      let value = this.value.filter((v,i)=>i !== idx)
      let tree = this.treePopper.getTree()
      this.setValue(value.map(v=>tree.getNode(v)))
      setTimeout(() => {
        this.treePopper.update()
      });
    },
  }
}
</script>