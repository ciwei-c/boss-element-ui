import Picker from '../picker';

export default {
  mixins: [Picker],

  name: 'BossTimePicker',

  props: {
    isRange: Boolean,
    arrowControl: Boolean
  },

  data() {
    return {
      type: ''
    };
  },

  watch: {
    isRange(isRange) {
      if (this.picker) {
        this.unmountPicker();
        this.type = isRange ? 'timerange' : 'time';
        this.mountPicker();
      } else {
        this.type = isRange ? 'timerange' : 'time';
      }
    }
  },

  created() {
    this.type = this.isRange ? 'timerange' : 'time';
  }
};
