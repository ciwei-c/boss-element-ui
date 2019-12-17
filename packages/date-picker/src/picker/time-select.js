import Picker from '../picker';

export default {
  mixins: [Picker],

  name: 'BossTimeSelect',

  componentName: 'BossTimeSelect',

  props: {
    type: {
      type: String,
      default: 'time-select'
    }
  }
};
