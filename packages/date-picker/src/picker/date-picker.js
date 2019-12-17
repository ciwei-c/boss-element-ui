import Picker from '../picker';

export default {
  mixins: [Picker],

  name: 'BossDatePicker',

  props: {
    type: {
      type: String,
      default: 'date'
    },
    timeArrowControl: Boolean
  },

  watch: {
    type() {
      if (this.picker) {
        this.unmountPicker();
        this.mountPicker();
      }
    }
  },
};
