<template>
  <div class="boss-page-header">
    <div class="boss-page-header__left" @click="$emit('back')">
      <i class="boss-icon-back"></i>
      <div class="boss-page-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="boss-page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script>
import { t } from 'boss-element-ui/src/locale';
export default {
  name: 'BossPageHeader',

  props: {
    title: {
      type: String,
      default() {
        return t('boss.pageHeader.title');
      }
    },
    content: String
  }
};
</script>
