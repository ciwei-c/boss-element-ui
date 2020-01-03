<template>
  <transition name="boss-zoom-in-top" @after-leave="doDestroy">
    <div
      v-show="showPopper"
      class="boss-autocomplete-suggestion boss-popper"
      :class="{ 'is-loading': !parent.hideLoading && parent.loading }"
      :style="{ width: dropdownWidth }"
      role="region">
      <boss-scrollbar
        tag="ul"
        wrap-class="boss-autocomplete-suggestion__wrap"
        view-class="boss-autocomplete-suggestion__list">
        <li v-if="!parent.hideLoading && parent.loading"><i class="boss-icon-loading"></i></li>
        <slot v-else>
        </slot>
      </boss-scrollbar>
    </div>
  </transition>
</template>
<script>
  import Popper from 'boss-element-ui/src/utils/vue-popper';
  import Emitter from 'boss-element-ui/src/mixins/emitter';
  import BossScrollbar from 'boss-element-ui/packages/scrollbar';

  export default {
    components: { BossScrollbar },
    mixins: [Popper, Emitter],

    componentName: 'BossAutocompleteSuggestions',

    data() {
      return {
        parent: this.$parent,
        dropdownWidth: ''
      };
    },

    props: {
      options: {
        default() {
          return {
            gpuAcceleration: false
          };
        }
      },
      id: String
    },

    methods: {
      select(item) {
        this.dispatch('BossAutocomplete', 'item-click', item);
      }
    },

    updated() {
      this.$nextTick(_ => {
        this.popperJS && this.updatePopper();
      });
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$refs.input.$refs.input;
      this.referenceList = this.$el.querySelector('.boss-autocomplete-suggestion__list');
      this.referenceList.setAttribute('role', 'listbox');
      this.referenceList.setAttribute('id', this.id);
    },

    created() {
      this.$on('visible', (val, inputWidth) => {
        this.dropdownWidth = inputWidth + 'px';
        this.showPopper = val;
      });
    }
  };
</script>
