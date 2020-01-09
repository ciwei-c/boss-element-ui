<template>
  <header class="boss-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'BossHeader',

    componentName: 'BossHeader',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
