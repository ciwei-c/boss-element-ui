<script>
  export default {
    name: 'BossTag',
    props: {
      text: String,
      closable: Boolean,
      type: String,
      hit: Boolean,
      disableTransitions: {
        type:Boolean,
        default:true
      },
      color: String,
      size: String,
      effect: {
        type: String,
        default: 'light',
        validator(val) {
          return ['dark', 'light', 'plain'].indexOf(val) !== -1;
        }
      }
    },
    methods: {
      handleClose(event) {
        event.stopPropagation();
        this.$emit('close', event);
      },
      handleClick(event) {
        this.$emit('click', event);
      }
    },
    computed: {
      tagSize() {
        return this.size || (this.$ELEMENT || {}).size;
      }
    },
    render(h) {
      const { type, tagSize, hit, effect } = this;
      const classes = [
        'boss-tag',
        type ? `boss-tag--${type}` : '',
        tagSize ? `boss-tag--${tagSize}` : '',
        effect ? `boss-tag--${effect}` : '',
        hit && 'is-hit'
      ];
      let style = { backgroundColor: this.color }
      if(this.closable) style.paddingRight = "20px";
      const tagEl = (
        <span
          class={ classes }
          style={ style }
          on-click={ this.handleClick }>
          { this.$slots.default }
          {
            this.closable && <i class="boss-tag__close boss-icon-close" on-click={ this.handleClose }></i>
          }
        </span>
      );

      return this.disableTransitions ? tagEl : <transition name="boss-zoom-in-center">{ tagEl }</transition>;
    }
  };
</script>
