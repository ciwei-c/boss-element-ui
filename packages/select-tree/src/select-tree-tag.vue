<template>
  <div class="boss-select-tree__multiple-tags boss-select-tree__multiple-tags--collapsetags" v-if="collapseTags && enableTag" ref="collapsetags">
    <boss-tag type="info" closable @close="onCloseTag(0)">{{ getValue(value[0]) }}</boss-tag>
    <boss-tag type="info" v-if="value.length > 1">+{{value.length - 1}}</boss-tag>
  </div>
  <transition-group class="boss-select-tree__multiple-tags" @after-leave="resetInputHeight" v-else-if="!collapseTags && enableTag" ref="tags">
    <boss-tag type="info" v-for="(val,idx) in value" :key="val" closable  @close="onCloseTag(idx)">{{ getValue(val) }}</boss-tag>
  </transition-group>
</template>
<script>
import BossTag from "boss-element-ui/packages/tag";
export default {
  components:{BossTag},
  props:{
    collapseTags:Boolean,
    getValue:Function,
    value:Array,
    setValue:Function,
    resetInputHeight:Function
  },
  data(){
    return {
      treePopper:null
    }
  },
  computed:{
    enableTag(){
      return this.treePopper && this.value && this.value.length
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