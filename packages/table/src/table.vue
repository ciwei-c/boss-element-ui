<template>
  <div 
    class="boss-table-container"
    :style="{
      'width':`${/^\d+$/g.test(width) ? width+'px' : width}`,
      'min-width':`${/^\d+$/g.test(minWidth) ? minWidth+'px' : minWidth}`
    }"
  >
    <div class="boss-table__title" v-if="title || $slots.title"><slot name="title">{{title}}</slot></div>
    <div class="boss-table"
      :class="[{
        'boss-table--fit': fit,
        'boss-table--striped': stripe,
        'boss-table--border': border || isGroup,
        'boss-table--hidden': isHidden,
        'boss-table--group': isGroup,
        'boss-table--fluid-height': maxHeight,
        'boss-table--scrollable-x': layout.scrollX,
        'boss-table--scrollable-y': layout.scrollY,
        'boss-table--enable-row-hover': !store.states.isComplex,
        'boss-table--enable-row-transition': (store.states.data || []).length !== 0 && (store.states.data || []).length < 100
      }, tableSize ? `boss-table--${ tableSize }` : '']"
      @mouseleave="handleMouseLeave($event)">
      <div class="hidden-columns" ref="hiddenColumns"><slot></slot></div>
      <div
        v-if="showHeader"
        v-mousewheel="handleHeaderFooterMousewheel"
        class="boss-table__header-wrapper"
        ref="headerWrapper">
        <table-header
          ref="tableHeader"
          :store="store"
          :border="border"
          :default-sort="defaultSort"
          :style="{
            width: layout.bodyWidth ? layout.bodyWidth + 'px' : ''
          }">
        </table-header>
      </div>
      <div
        class="boss-table__body-wrapper"
        ref="bodyWrapper"
        :class="[layout.scrollX ? `is-scrolling-${scrollPosition}` : 'is-scrolling-none']"
        :style="[bodyHeight]">
        <table-body
          :context="context"
          :store="store"
          :stripe="stripe"
          :row-class-name="rowClassName"
          :row-style="rowStyle"
          :highlight="highlightCurrentRow"
          :style="{
            width: bodyWidth
          }">
        </table-body>
        <div
          v-if="!data || data.length === 0"
          class="boss-table__empty-block"
          ref="emptyBlock"
          :style="emptyBlockStyle">
          <span class="boss-table__empty-text" >
            <slot name="empty">{{ emptyText || t('boss.table.emptyText') }}</slot>
          </span>
        </div>
        <div
          v-if="$slots.append"
          class="boss-table__append-wrapper"
          ref="appendWrapper">
          <slot name="append"></slot>
        </div>
      </div>
      <div
        v-if="showSummary"
        v-show="data && data.length > 0"
        v-mousewheel="handleHeaderFooterMousewheel"
        class="boss-table__footer-wrapper"
        ref="footerWrapper">
        <table-footer
          :store="store"
          :border="border"
          :sum-text="sumText || t('boss.table.sumText')"
          :summary-method="summaryMethod"
          :default-sort="defaultSort"
          :style="{
            width: layout.bodyWidth ? layout.bodyWidth + 'px' : ''
          }">
        </table-footer>
      </div>
      <div
        v-if="fixedColumns.length > 0"
        v-mousewheel="handleFixedMousewheel"
        class="boss-table__fixed"
        ref="fixedWrapper"
        :style="[{
          width: layout.fixedWidth ? layout.fixedWidth + 'px' : ''
        },
        fixedHeight]">
        <div
          v-if="showHeader"
          class="boss-table__fixed-header-wrapper"
          ref="fixedHeaderWrapper" >
          <table-header
            ref="fixedTableHeader"
            fixed="left"
            :border="border"
            :store="store"
            :style="{
              width: bodyWidth
            }"></table-header>
        </div>
        <div
          class="boss-table__fixed-body-wrapper"
          ref="fixedBodyWrapper"
          :style="[{
            top: layout.headerHeight + 'px'
          },
          fixedBodyHeight]">
          <table-body
            fixed="left"
            :store="store"
            :stripe="stripe"
            :highlight="highlightCurrentRow"
            :row-class-name="rowClassName"
            :row-style="rowStyle"
            :style="{
              width: bodyWidth
            }">
          </table-body>
          <div
            v-if="$slots.append"
            class="boss-table__append-gutter"
            :style="{ height: layout.appendHeight + 'px'}"></div>
        </div>
        <div
          v-if="showSummary"
          v-show="data && data.length > 0"
          class="boss-table__fixed-footer-wrapper"
          ref="fixedFooterWrapper">
          <table-footer
            fixed="left"
            :border="border"
            :sum-text="sumText || t('boss.table.sumText')"
            :summary-method="summaryMethod"
            :store="store"
            :style="{
              width: bodyWidth
            }"></table-footer>
        </div>
      </div>
      <div
        v-if="rightFixedColumns.length > 0"
        v-mousewheel="handleFixedMousewheel"
        class="boss-table__fixed-right"
        ref="rightFixedWrapper"
        :style="[{
          width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : '',
          right: layout.scrollY ? (border ? layout.gutterWidth : (layout.gutterWidth || 0)) + 'px' : ''
        },
        fixedHeight]">
        <div v-if="showHeader"
          class="boss-table__fixed-header-wrapper"
          ref="rightFixedHeaderWrapper">
          <table-header
            ref="rightFixedTableHeader"
            fixed="right"
            :border="border"
            :store="store"
            :style="{
              width: bodyWidth
            }"></table-header>
        </div>
        <div
          class="boss-table__fixed-body-wrapper"
          ref="rightFixedBodyWrapper"
          :style="[{
            top: layout.headerHeight + 'px'
          },
          fixedBodyHeight]">
          <table-body
            fixed="right"
            :store="store"
            :stripe="stripe"
            :row-class-name="rowClassName"
            :row-style="rowStyle"
            :highlight="highlightCurrentRow"
            :style="{
              width: bodyWidth
            }">
          </table-body>
          <div
            v-if="$slots.append"
            class="boss-table__append-gutter"
            :style="{ height: layout.appendHeight + 'px' }"></div>
        </div>
        <div
          v-if="showSummary"
          v-show="data && data.length > 0"
          class="boss-table__fixed-footer-wrapper"
          ref="rightFixedFooterWrapper">
          <table-footer
            fixed="right"
            :border="border"
            :sum-text="sumText || t('boss.table.sumText')"
            :summary-method="summaryMethod"
            :store="store"
            :style="{
              width: bodyWidth
            }"></table-footer>
        </div>
      </div>
      <div
        v-if="rightFixedColumns.length > 0"
        class="boss-table__fixed-right-patch"
        ref="rightFixedPatch"
        :style="{
          width: layout.scrollY ? layout.gutterWidth + 'px' : '0',
          height: layout.headerHeight + 'px'
        }"></div>
      <div class="boss-table__column-resize-proxy" ref="resizeProxy" v-show="resizeProxyVisible"></div>
    </div>
    <div class="boss-table__bottom" v-if="bottom || $slots.bottom"><slot name="bottom">{{bottom}}</slot></div>
    <table-pagination 
      :table="layout.table"
      :store="layout.store"
      :pagination="pagination"
      ref="pagination"
    />
  </div>
</template>

<script type="text/babel">
  import BossCheckbox from 'boss-element-ui/packages/checkbox';
  import DynamicTable from './utils/dynamic-table'
  import TablePagination from './pagination'
  import { debounce, throttle } from 'throttle-debounce';
  import { addResizeListener, removeResizeListener } from 'boss-element-ui/src/utils/resize-event';
  import Mousewheel from 'boss-element-ui/src/directives/mousewheel';
  import Locale from 'boss-element-ui/src/mixins/locale';
  import Migrating from 'boss-element-ui/src/mixins/migrating';
  import { createStore, mapStates } from './store/helper';
  import TableLayout from './table-layout';
  import TableBody from './table-body';
  import TableHeader from './table-header';
  import TableFooter from './table-footer';
  import { parseHeight, deepClone, getExpandData } from './utils/util';

  let tableIdSeed = 1;

  export default {
    name: 'BossTable',

    mixins: [Locale, Migrating, DynamicTable],

    directives: {
      Mousewheel
    },

    props: {
      sourceData: Array,

      url:String,

      pagination: Object,

      size: String,

      editable:{
        type:Boolean,
        default:false
      },

      title: String,

      bottom: String,

      width: [String, Number],

      minWidth: [String, Number],

      height: [String, Number],

      maxHeight: [String, Number],

      fit: {
        type: Boolean,
        default: true
      },

      stripe: Boolean,

      border: Boolean,

      rowKey: [String, Function],

      context: {},

      showHeader: {
        type: Boolean,
        default: true
      },

      showSummary: Boolean,

      sumText: String,

      summaryMethod: Function,

      rowClassName: [String, Function],

      rowStyle: [Object, Function],

      cellClassName: [String, Function],

      cellStyle: [Object, Function],

      headerRowClassName: [String, Function],

      headerRowStyle: [Object, Function],

      headerCellClassName: [String, Function],

      headerCellStyle: [Object, Function],

      highlightCurrentRow: Boolean,

      currentRowKey: [String, Number],

      emptyText: String,

      expandRowKeys: Array,

      defaultExpandAll: Boolean,

      defaultSort: Object,

      tooltipEffect: String,

      spanMethod: Function,
      
      beforeBeginEdit: Function,

      beforeSelect: Function,

      keyUpEditor:{
        type:String | Number | Array,
        default(){
          return ['ctrl','up']
        }
      },
      keyDownEditor:{
        type:String | Number | Array,
        default(){
          return ['ctrl','down']
        }
      },
      keyLeftEditor:{
        type:String | Number | Array,
        default(){
          return ['ctrl','left']
        }
      },
      keyRightEditor:{
        type:String | Number | Array,
        default(){
          return ['ctrl','right']
        }
      },
      keyNextEditor:{
        type:String | Number | Array,
        default:'tab'
      },
      keyPrevEditor:{
        type:String | Number | Array,
        default(){
          return ['shift','tab']
        }
      },
      keySpecEnabled:Boolean,

      selectOnIndeterminate: {
        type: Boolean,
        default: true
      },

      indent: {
        type: Number,
        default: 16
      },

      treeProps: {
        type: Object,
        default() {
          return {
            hasChildren: 'hasChildren',
            children: 'children'
          };
        }
      },

      lazy: Boolean,

      load: Function
    },

    components: {
      TableHeader,
      TableFooter,
      TableBody,
      TablePagination,
      BossCheckbox
    },

    methods: {
      getMigratingConfig() {
        return {
          events: {
            expand: 'expand is renamed to expand-change'
          }
        };
      },

      setCurrentRow(row) {
        this.store.commit('setCurrentRow', row);
      },

      toggleRowSelection(row, selected) {
        this.store.toggleRowSelection(row, selected, false);
        this.store.updateAllSelected();
      },

      toggleRowExpansion(row, expanded) {
        this.store.toggleRowExpansionAdapter(row, expanded);
      },

      clearSelection() {
        this.store.clearSelection();
      },

      clearFilter(columnKeys) {
        this.store.clearFilter(columnKeys);
      },

      clearSort() {
        this.store.clearSort();
      },

      handleMouseLeave() {
        this.store.commit('setHoverRow', null);
        if (this.hoverState) this.hoverState = null;
      },

      updateScrollY() {
        const changed = this.layout.updateScrollY();
        if (changed) {
          this.layout.updateColumnsWidth();
        }
      },

      handleFixedMousewheel(event, data) {
        const bodyWrapper = this.bodyWrapper;
        if (Math.abs(data.spinY) > 0) {
          const currentScrollTop = bodyWrapper.scrollTop;
          if (data.pixelY < 0 && currentScrollTop !== 0) {
            event.preventDefault();
          }
          if (data.pixelY > 0 && bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop) {
            event.preventDefault();
          }
          bodyWrapper.scrollTop += Math.ceil(data.pixelY / 5);
        } else {
          bodyWrapper.scrollLeft += Math.ceil(data.pixelX / 5);
        }
      },

      handleHeaderFooterMousewheel(event, data) {
        const { pixelX, pixelY } = data;
        if (Math.abs(pixelX) >= Math.abs(pixelY)) {
          this.bodyWrapper.scrollLeft += data.pixelX / 5;
        }
      },

      // TODO 使用 CSS transform
      syncPostion: throttle(20, function() {
        const { scrollLeft, scrollTop, offsetWidth, scrollWidth } = this.bodyWrapper;
        const { headerWrapper, footerWrapper, fixedBodyWrapper, rightFixedBodyWrapper } = this.$refs;
        if (headerWrapper) headerWrapper.scrollLeft = scrollLeft;
        if (footerWrapper) footerWrapper.scrollLeft = scrollLeft;
        if (fixedBodyWrapper) fixedBodyWrapper.scrollTop = scrollTop;
        if (rightFixedBodyWrapper) rightFixedBodyWrapper.scrollTop = scrollTop;
        const maxScrollLeftPosition = scrollWidth - offsetWidth - 1;
        if (scrollLeft >= maxScrollLeftPosition) {
          this.scrollPosition = 'right';
        } else if (scrollLeft === 0) {
          this.scrollPosition = 'left';
        } else {
          this.scrollPosition = 'middle';
        }
      }),

      bindEvents() {
        this.bodyWrapper.addEventListener('scroll', this.syncPostion, { passive: true });
        if (this.fit) {
          addResizeListener(this.$el, this.resizeListener);
        }
      },

      unbindEvents() {
        this.bodyWrapper.removeEventListener('scroll', this.syncPostion, { passive: true });
        if (this.fit) {
          removeResizeListener(this.$el, this.resizeListener);
        }
      },

      resizeListener() {
        if (!this.$ready) return;
        let shouldUpdateLayout = false;
        const el = this.$el;
        const { width: oldWidth, height: oldHeight } = this.resizeState;

        const width = el.offsetWidth;
        if (oldWidth !== width) {
          shouldUpdateLayout = true;
        }

        const height = el.offsetHeight;
        if ((this.height || this.shouldUpdateHeight) && oldHeight !== height) {
          shouldUpdateLayout = true;
        }

        if (shouldUpdateLayout) {
          this.resizeState.width = width;
          this.resizeState.height = height;
          this.doLayout();
        }
      },

      doLayout() {
        if (this.shouldUpdateHeight) {
          this.layout.updateElsHeight();
        }
        this.layout.updateColumnsWidth();
      },

      sort(prop, order) {
        this.store.commit('sort', { prop, order });
      },

      toggleAllSelection() {
        this.store.commit('toggleAllSelection');
      },

      // 获取当前编辑器
      getEditor(){
        return this.store.states.editorCellComponent
      },
      // 获取所有列
      getColumns(){
        return this.columns
      },
      // 获取所有选中行
      getSelections(){
        return this.store.states.selection
      },
      // 获取选中的第一行
      getSelected(){
        return this.store.states.selection[0]
      },
      // 获取选中的第一行的索引
      getSelectedRowIndex(){
        let index = this.data.indexOf(this.getSelected())
        return index > -1 ? index : null
      },
      // 某行是否被选中
      isSelectedRow(index){
        return this.getSelections().indexOf(this.data[index]) > -1
      },
      // 获取当前展示的数据
      getData(){
        return deepClone(this.data)
      },
      // 获取当前编辑器所在行的数据
      getCurrentEditRowData(){
        return deepClone(this.getEditor().row)
      },
      // 获取当前编辑器所在行的索引
      getCurrentEditRowIndex(){
        return this.getEditor().$index
      },
      // 获取当前行
      getCurrentRowData(){
        return deepClone(this.store.getCurrentRow())
      },
      // 获取
      getCurrentRowIndex(){
        return this.data.indexOf(this.getCurrentRowData())
      },

      nextRow(){
        this.setCurrentRow(this.data[this.getCurrentRowIndex + 1])
      },

      getFooterRows(){
        let { pageSize } = this.getCurrentPager()
        return this.data[pageSize - 1]
      },

      getRows(){
        return getExpandData(this.data)
      },

      getDataByRowIndex(index){
        return this.getRows()[index]
      },

      getRowByParam(key, value){
        let index = this.data.findIndex(v => v[key] === value)
        if(index > -1) return this.getDataByRowIndex(index)
        return null
      },

      getRowByFilter(cb){
        return this.getRows().filter((row,index) => cb(row,index))
      },

      getRowIndex(node){
        let index = this.data.indexOf(node)
        return index > -1 ? index : null
      },

      getSummaryRow(){
        return this.summaryRow
      },

      getCurrentPager(){
        return deepClone(this.$refs.pagination.pageConfig)
      },

      getPageIndex(){
        return this.getCurrentPager().currentPage
      },

      reload(){
        this.getSyncData()
      },
      
      refreshData(){
        if(this.sourceData){
          this.data = deepClone(this.sourceData)
        }else{
          this.getSyncData()
        }
      },

      beginEdit(index, row){

      }
    },

    computed: {
      tableSize() {
        return this.size || (this.$ELEMENT || {}).size;
      },

      bodyWrapper() {
        return this.$refs.bodyWrapper;
      },

      shouldUpdateHeight() {
        return this.height ||
          this.maxHeight ||
          this.fixedColumns.length > 0 ||
          this.rightFixedColumns.length > 0;
      },

      bodyWidth() {
        const { bodyWidth, scrollY, gutterWidth } = this.layout;
        return bodyWidth ? bodyWidth - (scrollY ? gutterWidth : 0) + 'px' : '';
      },

      bodyHeight() {
        const { headerHeight = 0, bodyHeight, footerHeight = 0} = this.layout;
        if (this.height) {
          return {
            height: bodyHeight ? bodyHeight + 'px' : ''
          };
        } else if (this.maxHeight) {
          const maxHeight = parseHeight(this.maxHeight);
          if (typeof maxHeight === 'number') {
            return {
              'max-height': (maxHeight - footerHeight - (this.showHeader ? headerHeight : 0)) + 'px'
            };
          }
        }
        return {};
      },

      fixedBodyHeight() {
        if (this.height) {
          return {
            height: this.layout.fixedBodyHeight ? this.layout.fixedBodyHeight + 'px' : ''
          };
        } else if (this.maxHeight) {
          let maxHeight = parseHeight(this.maxHeight);
          if (typeof maxHeight === 'number') {
            maxHeight = this.layout.scrollX ? maxHeight - this.layout.gutterWidth : maxHeight;
            if (this.showHeader) {
              maxHeight -= this.layout.headerHeight;
            }
            maxHeight -= this.layout.footerHeight;
            return {
              'max-height': maxHeight + 'px'
            };
          }
        }
        return {};
      },

      fixedHeight() {
        if (this.maxHeight) {
          if (this.showSummary) {
            return {
              bottom: 0
            };
          }
          return {
            bottom: (this.layout.scrollX && this.data.length) ? this.layout.gutterWidth + 'px' : ''
          };
        } else {
          if (this.showSummary) {
            return {
              height: this.layout.tableHeight ? this.layout.tableHeight + 'px' : ''
            };
          }
          return {
            height: this.layout.viewportHeight ? this.layout.viewportHeight + 'px' : ''
          };
        }
      },

      emptyBlockStyle() {
        if (this.data && this.data.length) return null;
        let height = '100%';
        if (this.layout.appendHeight) {
          height = `calc(100% - ${this.layout.appendHeight}px)`;
        }
        return {
          width: this.bodyWidth,
          height
        };
      },
      
      ...mapStates({
        selection: 'selection',
        columns: 'columns',
        tableData: 'data',
        fixedColumns: 'fixedColumns',
        rightFixedColumns: 'rightFixedColumns'
      })
    },

    watch: {
      sourceData:{
        immediate: true,
        handler(value) {
          this.data = deepClone(value);
        }
      },

      height: {
        immediate: true,
        handler(value) {
          this.layout.setHeight(value);
        }
      },

      maxHeight: {
        immediate: true,
        handler(value) {
          this.layout.setMaxHeight(value);
        }
      },

      currentRowKey: {
        immediate: true,
        handler(value) {
          if (!this.rowKey) return;
          this.store.setCurrentRowKey(value);
        }
      },

      data: {
        immediate: true,
        handler(value) {
          this.store.commit('setData', value, true);
          this.$emit("on-data-change")
        }
      },

      expandRowKeys: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            this.store.setExpandRowKeysAdapter(newVal);
          }
        }
      }
    },

    created() {
      this.tableId = 'boss-table_' + tableIdSeed++;
      this.debouncedUpdateLayout = debounce(50, () => this.doLayout());
    },

    mounted() {
      this.bindEvents();
      this.store.updateColumns();
      this.doLayout();
      this.resizeState = {
        width: this.$el.offsetWidth,
        height: this.$el.offsetHeight
      };

      // init filters
      this.store.states.columns.forEach(column => {
        if (column.filteredValue && column.filteredValue.length) {
          this.store.commit('filterChange', {
            column,
            values: column.filteredValue,
            silent: true
          });
        }
      });

      this.$ready = true;
    },

    destroyed() {
      this.unbindEvents();
    },

    data() {
      const { hasChildren = 'hasChildren', children = 'children' } = this.treeProps;
      this.store = createStore(this, {
        rowKey: this.rowKey,
        defaultExpandAll: this.defaultExpandAll,
        selectOnIndeterminate: this.selectOnIndeterminate,
        // TreeTable 的相关配置
        indent: this.indent,
        lazy: this.lazy,
        lazyColumnIdentifier: hasChildren,
        childrenColumnName: children
      });
      const layout = new TableLayout({
        store: this.store,
        table: this,
        fit: this.fit,
        showHeader: this.showHeader
      });
      return {
        layout,
        data:[],
        isHidden: false,
        renderExpanded: null,
        resizeProxyVisible: false,
        resizeState: {
          width: null,
          height: null
        },
        // 是否拥有多级表头
        isGroup: false,
        scrollPosition: 'left',
        // 本地npm模块测试时，发现 computed 下的 mapStates 不是响应式的，导致页面只能按照初始值渲染，为 this.store.states 绑定一个响应式数据就可以
        states:this.store.states,
        // 合计行row
        summaryRow:{}
      };
    }
  };
</script>