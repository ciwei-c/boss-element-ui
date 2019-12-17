<template>
  <transition
    :name="options.transition"
    :onAfterLeave="options.onAfterLeave">
    <div
      @mouseleave="options.onMouseleave ? options.onMouseleave : ()=>{}"
      @mouseenter="options.onMouseenter ? options.onMouseenter : ()=>{}"
      :role="options.tooltip"
      :id="options.tooltipId"
      :aria-hidden="(options.disabled || !options.showPopper) ? 'true' : 'false'"
      v-show="!options.disabled && options.showPopper"
      :class="`boss-tooltip__popper is-${options.effect||''} ${options.popperClass||''}`">
      <slot name="content">{{options.content}}</slot>
    </div>
  </transition>
</template>
<script>
export default {
  name:'BossPopperVm',
  props:{
    transition:{
      type:String,
      default:""
    }
  },
  data(){
    return {
      options:{},
      show:false
    }
  }
}
</script>