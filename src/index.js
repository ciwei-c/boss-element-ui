import BossInput from '../packages/input/index.js';
import BossInputNumber from '../packages/input-number/index.js';
import BossRadio from '../packages/radio/index.js';
import BossSwitch from '../packages/switch/index.js';
import BossRadioButton from '../packages/radio-button/index.js';
import BossRadioGroup from '../packages/radio-group/index.js';
import BossCheckbox from '../packages/checkbox/index.js';
import BossCheckboxButton from '../packages/checkbox-button/index.js';
import BossCheckboxGroup from '../packages/checkbox-group/index.js';
import BossTable from '../packages/table/index.js';
import BossTableColumn from '../packages/table-column/index.js';
import BossToolTip from '../packages/tooltip/index.js';
import BossScrollbar from '../packages/scrollbar/index.js';
import BossTag from '../packages/tag/index.js';
import BossOption from '../packages/option/index.js';
import BossOptionGroup from '../packages/option-group/index.js';
import BossSelect from '../packages/select/index.js';
import BossPagination from '../packages/pagination/index.js';
import BossButton from '../packages/button/index.js';
import BossDatePicker from '../packages/date-picker/index.js';
import BossTimePicker from '../packages/time-picker/index.js';
import BossTimeSelect from '../packages/time-select/index.js';
import BossDialog from '../packages/dialog/index.js';
import BossRow from '../packages/row/index.js';
import BossCol from '../packages/col/index.js';
import BossBackTop from '../packages/backtop/index.js';
import BossTree from '../packages/tree/index.js';
import BossSelectTree from '../packages/select-tree/index.js';
import BossSelectTable from '../packages/select-table/index.js';
import BossAlert from '../packages/alert/index.js';
import BossLoading from '../packages/loading/index.js';
import BossMessage from '../packages/message/index.js';
import BossMessageBox from '../packages/message-box/index.js';
import BossNotification from '../packages/notification/index.js';
import BossCascader from '../packages/cascader/index.js';
import BossSlider from '../packages/slider/index.js';
import BossForm from '../packages/form/index.js';
import BossFormItem from '../packages/form-item/index.js';
import BossTabs from '../packages/tabs/index.js';
import BossTabPane from '../packages/tab-pane/index.js';
import BossBreadcrumb from '../packages/breadcrumb/index.js';
import BossBreadcrumbItem from '../packages/breadcrumb-item/index.js';
import BossMenu from '../packages/menu/index.js';
import BossMenuItem from '../packages/menu-item/index.js';
import BossMenuItemGroup from '../packages/menu-item-group/index.js';
import BossSubmenu from '../packages/submenu/index.js';
import BossSteps from '../packages/steps/index.js';
import BossStep from '../packages/step/index.js';

const components = {
  BossInput,
  BossInputNumber,
  BossRadio,
  BossRadioButton,
  BossRadioGroup,
  BossCheckbox,
  BossCheckboxButton,
  BossCheckboxGroup,
  BossTable,
  BossTableColumn,
  BossToolTip,
  BossScrollbar,
  BossTag,
  BossOption,
  BossOptionGroup,
  BossSelect,
  BossPagination,
  BossButton,
  BossDatePicker,
  BossTimePicker,
  BossTimeSelect,
  BossDialog,
  BossRow,
  BossCol,
  BossBackTop,
  BossTree,
  BossSelectTree,
  BossSelectTable,
  BossAlert,
  BossLoading:BossLoading.service,
  BossMessage,
  BossMessageBox,
  BossNotification,
  BossSwitch,
  BossCascader,
  BossSlider,
  BossForm,
  BossFormItem,
  BossTabs,
  BossTabPane,
  BossBreadcrumb,
  BossBreadcrumbItem,
  BossMenu,
  BossMenuItem,
  BossMenuItemGroup,
  BossSubmenu,
  BossSteps,
  BossStep
};

function install(Vue, opts = {}) {
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });

  Vue.use(BossLoading.directive);

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  Vue.prototype.$loading = BossLoading.service;
  Vue.prototype.$msgbox = BossMessageBox;
  Vue.prototype.$alert = BossMessageBox.alert;
  Vue.prototype.$confirm = BossMessageBox.confirm;
  Vue.prototype.$prompt = BossMessageBox.prompt;
  Vue.prototype.$notify = BossNotification;
  Vue.prototype.$message = BossMessage;

};

const version = '0.0.1'

const DEFAULT_EXPORTS = Object.assign({
  install,
  version
},components)

export default DEFAULT_EXPORTS