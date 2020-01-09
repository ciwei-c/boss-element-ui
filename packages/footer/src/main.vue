<template>
  <footer class="boss-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'BossFooter',

    componentName: 'BossFooter',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
