<script>
  export default {
    name: 'BossTimeline',

    props: {
      reverse: {
        type: Boolean,
        default: false
      }
    },

    provide() {
      return {
        timeline: this
      };
    },

    render() {
      const reverse = this.reverse;
      const classes = {
        'boss-timeline': true,
        'is-reverse': reverse
      };
      let slots = this.$slots.default || [];
      if (reverse) {
        slots = slots.reverse();
      }
      return (<ul class={ classes }>
        { slots }
      </ul>);
    }
  };
</script>
