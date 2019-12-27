import BossInput from '../packages/input/index.js';
import BossInputNumber from '../packages/input-number/index.js';
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

const components = {
  BossInput,
  BossInputNumber,
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
  BossSelectTable
};

function install(Vue, opts = {}) {
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });
};

const version = '0.0.1'

const DEFAULT_EXPORTS = Object.assign({
  install,
  version
},components)

export default DEFAULT_EXPORTS