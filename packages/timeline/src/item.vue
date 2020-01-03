<template>
  <li class="boss-timeline-item">
    <div class="boss-timeline-item__tail"></div>

    <div v-if="!$slots.dot"
      class="boss-timeline-item__node"
      :class="[
        `boss-timeline-item__node--${size || ''}`,
        `boss-timeline-item__node--${type || ''}`
      ]"
      :style="{
        backgroundColor: color
      }"
    >
      <i v-if="icon"
        class="boss-timeline-item__icon"
        :class="icon"
      ></i>
    </div>
    <div v-if="$slots.dot" class="boss-timeline-item__dot">
      <slot name="dot"></slot>
    </div>

    <div class="boss-timeline-item__wrapper">
      <div v-if="!hideTimestamp && placement === 'top'"
        class="boss-timeline-item__timestamp is-top">
        {{timestamp}}
      </div>

      <div class="boss-timeline-item__content">
        <slot></slot>
      </div>

      <div v-if="!hideTimestamp && placement === 'bottom'"
        class="boss-timeline-item__timestamp is-bottom">
        {{timestamp}}
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'BossTimelineItem',

    inject: ['timeline'],

    props: {
      timestamp: String,

      hideTimestamp: {
        type: Boolean,
        default: false
      },

      placement: {
        type: String,
        default: 'bottom'
      },

      type: String,

      color: String,

      size: {
        type: String,
        default: 'normal'
      },

      icon: String
    }
  };
</script>
