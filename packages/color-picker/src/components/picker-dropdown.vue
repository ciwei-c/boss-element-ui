<template>
  <transition name="boss-zoom-in-top" @after-leave="doDestroy">
    <div
      class="boss-color-dropdown"
      v-show="showPopper">
      <div class="boss-color-dropdown__main-wrapper">
        <hue-slider ref="hue" :color="color" vertical style="float: right;"></hue-slider>
        <sv-panel ref="sl" :color="color"></sv-panel>
      </div>
      <alpha-slider v-if="showAlpha" ref="alpha" :color="color"></alpha-slider>
      <predefine v-if="predefine" :color="color" :colors="predefine"></predefine>
      <div class="boss-color-dropdown__btns">
        <span class="boss-color-dropdown__value">
          <boss-input
            v-model="customInput"
            @keyup.native.enter="handleConfirm"
            @blur="handleConfirm"
            :validate-event="false"
            size="mini">
          </boss-input>
        </span>
        <boss-button
          size="mini"
          type="text"
          class="boss-color-dropdown__link-btn"
          @click="$emit('clear')">
          {{ t('boss.colorpicker.clear') }}
        </boss-button>
        <boss-button
          plain
          size="mini"
          class="boss-color-dropdown__btn"
          @click="confirmValue">
          {{ t('boss.colorpicker.confirm') }}
        </boss-button>
      </div>
    </div>
  </transition>
</template>

<script>
  import SvPanel from './sv-panel';
  import HueSlider from './hue-slider';
  import AlphaSlider from './alpha-slider';
  import Predefine from './predefine';
  import Popper from 'boss-element-ui/src/utils/vue-popper';
  import Locale from 'boss-element-ui/src/mixins/locale';
  import BossInput from 'boss-element-ui/packages/input';
  import BossButton from 'boss-element-ui/packages/button';

  export default {
    name: 'boss-color-picker-dropdown',

    mixins: [Popper, Locale],

    components: {
      SvPanel,
      HueSlider,
      AlphaSlider,
      BossInput,
      BossButton,
      Predefine
    },

    props: {
      color: {
        required: true
      },
      showAlpha: Boolean,
      predefine: Array
    },

    data() {
      return {
        customInput: ''
      };
    },

    computed: {
      currentColor() {
        const parent = this.$parent;
        return !parent.value && !parent.showPanelColor ? '' : parent.color.value;
      }
    },

    methods: {
      confirmValue() {
        this.$emit('pick');
      },

      handleConfirm() {
        this.color.fromString(this.customInput);
      }
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$el;
    },

    watch: {
      showPopper(val) {
        if (val === true) {
          this.$nextTick(() => {
            const { sl, hue, alpha } = this.$refs;
            sl && sl.update();
            hue && hue.update();
            alpha && alpha.update();
          });
        }
      },

      currentColor: {
        immediate: true,
        handler(val) {
          this.customInput = val;
        }
      }
    }
  };
</script>
