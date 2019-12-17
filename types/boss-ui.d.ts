import Vue from 'vue'
import { BossUIComponent } from './component'

import { BossInput } from './components/input'

export interface InstallationOptions {}

/** The version of element-ui */
export const version: string

/**
 * Install all boss-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(BossUI)` to install.
 */
export function install (vue: typeof Vue, options: InstallationOptions): void

/** BossUI component common definition */
export type Component = BossUIComponent

/** Input Component */
export class Input extends BossInput {}
