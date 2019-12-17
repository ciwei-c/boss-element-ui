import Vue from 'vue'

/** BossUI component common definition */
export declare class BossUIComponent extends Vue {
  /** Install component into Vue */
  static install (vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type BossUIComponentSize = 'large' | 'medium' | 'small' | 'mini'

/** Horizontal alignment */
export type BossUIHorizontalAlignment = 'left' | 'center' | 'right'
