<template>
  <div class="boss-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
    <div class="boss-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="boss-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BossCard',
    props: {
      header: {},
      bodyStyle: {},
      shadow: {
        type: String
      }
    }
  };
</script>
