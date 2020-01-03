<template>
  <i :class="'boss-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'BossIcon',

    props: {
      name: String
    }
  };
</script>
