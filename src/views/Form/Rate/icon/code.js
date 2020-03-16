let code = `<template>
  <boss-rate
    v-model="value"
    :icon-classes="iconClasses"
    void-icon-class="icon-rate-face-off"
    :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
  ></boss-rate>
</template>
<script>
export default {
  data() {
    return {
      value: null,
      iconClasses: ["icon-rate-face-1", "icon-rate-face-2", "icon-rate-face-3"]
    };
  }
};
</script>
`
export default {
  data(){
    return {
      code,
      codeDesc:"设置icon-classes属性可以自定义不同分段的图标。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名。本例还使用void-icon-class指定了未选中时的图标类名。",
      anchor:{
        id:"icon",
        title:"自定义icon"
      }
    }
  }
}