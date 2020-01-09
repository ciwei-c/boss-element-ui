<template>
  <aside class="boss-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'BossAside',

    componentName: 'BossAside',

    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>
