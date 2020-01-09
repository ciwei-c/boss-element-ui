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
import BossButtonGroup from '../packages/button-group/index.js';
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
import BossUpload from '../packages/upload/index.js';
import BossProgress from '../packages/progress/index.js';
import BossBadge from '../packages/badge/index.js';
import BossDropdown from '../packages/dropdown/index.js';
import BossDropdownMenu from '../packages/dropdown-menu/index.js';
import BossDropdownItem from '../packages/dropdown-item/index.js';
import BossTransfer from '../packages/transfer/index.js';
import BossPopover from '../packages/popover/index.js';
import BossCarousel from '../packages/carousel/index.js';
import BossCarouselItem from '../packages/carousel-item/index.js';
import BossCollapse from '../packages/collapse/index.js';
import BossCollapseItem from '../packages/collapse-item/index.js';
import BossCalendar from '../packages/calendar/index.js';
import BossDrawer from '../packages/drawer/index.js';
import BossCard from '../packages/card/index.js';
import BossPopconfirm from '../packages/popconfirm/index.js';
import BossTimeline from '../packages/timeline/index.js';
import BossTimelineItem from '../packages/timeline-item/index.js';
import BossAutocomplete from '../packages/autocomplete/index.js';
import BossAvatar from '../packages/avatar/index.js';
import BossDivider from '../packages/divider/index.js';
import BossIcon from '../packages/icon/index.js';
import BossImage from '../packages/image/index.js';
import BossInfiniteScroll from '../packages/infinite-scroll/index.js';
import BossLink from '../packages/link/index.js';
import BossColorPicker from '../packages/color-picker/index.js';
import BossRate from '../packages/rate/index.js';
import BossPageHeader from '../packages/page-header/index.js';
import BossContainer from '../packages/container/index.js';
import BossHeader from '../packages/header/index.js';
import BossAside from '../packages/aside/index.js';
import BossMain from '../packages/main/index.js';
import BossFooter from '../packages/footer/index.js';
import BossDownload from '../packages/download/index.js';

const components = {
  BossDownload,
  BossFooter,
  BossMain,
  BossAside,
  BossHeader,
  BossContainer,
  BossColorPicker,
  BossRate,
  BossPageHeader,
  BossInput,
  BossAutocomplete,
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
  BossButtonGroup,
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
  BossStep,
  BossUpload,
  BossProgress,
  BossBadge,
  BossDropdown,
  BossDropdownItem,
  BossDropdownMenu,
  BossTransfer,
  BossPopover,
  BossCarousel,
  BossCarouselItem,
  BossCollapse,
  BossCollapseItem,
  BossCalendar,
  BossDrawer,
  BossCard,
  BossPopconfirm,
  BossTimeline,
  BossTimelineItem,
  BossAvatar,
  BossDivider,
  BossIcon,
  BossImage,
  BossLink
};

function install(Vue, opts = {}) {
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });

  Vue.use(BossLoading.directive);
  Vue.use(BossPopover.directive);
  Vue.use(BossInfiniteScroll);

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
  version,
  BossLoading,
  BossInfiniteScroll,
  BossAlert,
  BossMessage,
  BossMessageBox,
  BossNotification,
},components)

export default DEFAULT_EXPORTS