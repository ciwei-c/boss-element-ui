<template>
  <span class="boss-select-tree__multiple-tags__input" :class="{
    'boss-input--medium':parent.size === 'medium',
    'boss-input--small':parent.size === 'small',
    'boss-input--mini':parent.size === 'mini'
  }" :style="{width:`${width}px`}">
    <input v-if="isSearching" @blur="onBlur" @input="onInput" ref="input" type="text" class="boss-input__inner" style="background:transparent"/>
    <span ref="mirror" class="boss-select-tree__multiple-tags__input-mirror">{{inputValue}}</span>
  </span>
</template>
<script>
import BossInput from "boss-element-ui/packages/input";
export default {
  components:{
    BossInput
  },
  props:{
    parent:Object,
    isSearching:Boolean,
    value:Array
  },
  data(){
    return {
      width:4,
      inputValue:""
    }
  },
  mounted(){
  },
  watch:{
    value(val){
      this.$nextTick(()=>{
        this.inputValue = ""
        this.$refs.input && (this.$refs.input.value = "")
      })
    },
    isSearching:{
      handler(val){
        this.$nextTick(()=>{
          try {
            if(val){
              let height = this.$refs.input.offsetHeight
              this.$refs.input.style.height = `${height - 2}px`
              this.$refs.input.style.lineHeight = `${height - 2}px`
              this.$refs.input.focus()
            }else{
              this.$refs.input.blur()
            }
          } catch (error) {
            
          }
          this.$emit("searching")
        })
      },
      immediate:true
    },
    inputValue(val){
      this.parent.searchPlaceholder = val
      this.$nextTick(()=>{
        setTimeout(()=>{
          this.width = Math.max(this.$refs.mirror.offsetWidth + 14, 4)
          this.$emit("searching")
          this.parent.$refs["tree-popper"].getTree().filter(val)
        })
      })
    }
  },
  methods:{
    onBlur(){
      if(this.isSearching) {
        this.$refs.input.focus()
      }
    },
    onInput(e){
      this.inputValue = e.target.value
    }
  }
}
</script>