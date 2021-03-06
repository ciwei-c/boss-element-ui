<template>
  <div
    class="boss-switch"
    :class="{ 'is-disabled': switchDisabled, 'is-checked': checked }"
    role="switch"
    :aria-checked="checked"
    :aria-disabled="switchDisabled"
    @click.prevent="switchValue"
  >
    <input
      class="boss-switch__input"
      type="checkbox"
      @change="handleChange"
      ref="input"
      :id="id"
      :name="name"
      :true-value="activeValue"
      :false-value="inactiveValue"
      :disabled="switchDisabled"
      @keydown.enter="switchValue"
    />
    <span
      :class="['boss-switch__label', 'boss-switch__label--left', !checked ? 'is-active' : '']"
      v-if="inactiveIconClass || inactiveText"
    >
      <i :class="[inactiveIconClass]" v-if="inactiveIconClass"></i>
      <span v-if="!inactiveIconClass && inactiveText" :aria-hidden="checked">{{ inactiveText }}</span>
    </span>
    <span
      class="boss-switch__core"
      :class="{ 'is-disabled': switchDisabled, 'is-checked': checked }"
      ref="core"
      :style="{ 'width': coreWidth ?  coreWidth + 'px' : '' }"
    ></span>
    <span
      :class="['boss-switch__label', 'boss-switch__label--right', checked ? 'is-active' : '']"
      v-if="activeIconClass || activeText"
    >
      <i :class="[activeIconClass]" v-if="activeIconClass"></i>
      <span v-if="!activeIconClass && activeText" :aria-hidden="!checked">{{ activeText }}</span>
    </span>
  </div>
</template>
<script>
import emitter from "boss-element-ui/src/mixins/emitter";
import Focus from "boss-element-ui/src/mixins/focus";
import Migrating from "boss-element-ui/src/mixins/migrating";
import Wave from "boss-element-ui/src/mixins/wave";

export default {
  name: "BossSwitch",
  mixins: [Focus("input"), Migrating, emitter, Wave],
  inject: {
    bossForm: {
      default: ""
    }
  },
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: Number,
    activeIconClass: {
      type: String,
      default: ""
    },
    inactiveIconClass: {
      type: String,
      default: ""
    },
    activeText: String,
    inactiveText: String,
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    name: {
      type: String,
      default: ""
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    id: String
  },
  data() {
    return {
      coreWidth: this.width
    };
  },
  created() {
    if (!~[this.activeValue, this.inactiveValue].indexOf(this.value)) {
      this.$emit("input", this.inactiveValue);
    }
  },
  computed: {
    checked() {
      return this.value === this.activeValue;
    },
    switchDisabled() {
      return this.disabled || (this.bossForm || {}).disabled;
    }
  },
  watch: {
    checked() {
      this.$refs.input.checked = this.checked;
      if (this.activeColor || this.inactiveColor) {
        this.setBackgroundColor();
      }
      if (this.validateEvent) {
        this.dispatch("BossFormItem", "boss.form.change", [this.value]);
      }
    }
  },
  methods: {
    handleChange(event) {
      const val = this.checked ? this.inactiveValue : this.activeValue;
      this.$emit("input", val);
      this.$emit("change", val);
      this.$nextTick(() => {
        // set input's checked property
        // in case parent refuses to change component's value
        this.$refs.input.checked = this.checked;
      });
    },
    setBackgroundColor() {
      let newColor = this.checked ? this.activeColor : this.inactiveColor;
      this.$refs.core.style.borderColor = newColor;
      this.$refs.core.style.backgroundColor = newColor;
    },
    switchValue() {
      !this.switchDisabled && this.handleChange();
      let color = this.checked ? this.inactiveColor : this.activeColor
      if(!color) {
        setTimeout(()=>{
          this.wave(
            this.$refs.core,
            document.defaultView.getComputedStyle(this.$refs.core).backgroundColor
          );
        },150)
      }else{
        this.wave(
          this.$refs.core,
          color
        );
      }
    },
    getMigratingConfig() {
      return {
        props: {
          "on-color": "on-color is renamed to active-color.",
          "off-color": "off-color is renamed to inactive-color.",
          "on-text": "on-text is renamed to active-text.",
          "off-text": "off-text is renamed to inactive-text.",
          "on-value": "on-value is renamed to active-value.",
          "off-value": "off-value is renamed to inactive-value.",
          "on-icon-class": "on-icon-class is renamed to active-icon-class.",
          "off-icon-class": "off-icon-class is renamed to inactive-icon-class."
        }
      };
    }
  },
  mounted() {
    /* istanbul ignore if */
    this.coreWidth = this.width;
    if (this.activeColor || this.inactiveColor) {
      this.setBackgroundColor();
    }
    this.$refs.input.checked = this.checked;
  }
};
</script>
