<template>
  <div
    class="boss-table-editor"
    @keydown.tab.stop.prevent.exact="()=>{}"
    @keydown.alt.stop.prevent.exact="()=>{}"
    @keydown="onKeyDown"
    @keyup="onKeyUp"
  >
    <editor-widget ref="widget"/>
    <div class="boss-table-editor__button">
      <boss-button type="text" @click.stop="onConfirmEdit"><i class="boss-icon-check"></i></boss-button>
      <boss-button type="text" @click.stop="onCancelEdit"><i class="boss-icon-close"></i></boss-button>
    </div>
  </div>
</template>
<script>
import BossButton from "bosssoft-ui/packages/button";
import EditorWidget from "./editor-widget"
export default {
  components: { BossButton, EditorWidget},
  props: {
    $index: {
      type: Number,
      require: true
    },
    cellIndex: {
      type: Number,
      require: true
    },
    row: {
      type: Object,
      require: true
    },
    column: {
      type: Object,
      require: true
    },
    store: {
      type: Object,
      require: true
    },
    editorBasic: {
      type: Object,
      default() {
        return {};
      }
    },
    table: {
      type: Object,
      require: true
    }
  },
  computed:{
    widget(){
      return this.column.editWidget
    },
    widgetOptions(){
      return this.column.editWidgetOptions
    }
  },
  created(){
    this.value = this.row[this.column.property];
    this.$nextTick(() => {
      this.store.updateEditCellVueComponent(this);
      window.onblur = () => (this.editorBasic.currentKeys = []);
    });
  },
  beforeDestroy(){
    window.onblur = null;
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onConfirmEdit() {
      if(this.row[this.column.property] !== this.value){
        this.row[this.column.property] = this.value;
      }
      this.store.destoryEditorCell();
    },
    onCancelEdit() {
      this.editorBasic.onEndEdit(this.row, this.$index, this.column);
      this.store.destoryEditorCell();
    },
    onKeyDown(e) {
      if (!this.table.keySpecEnabled) return;
      let { keyCode } = e;
      if(keyCode === 13) return this.onConfirmEdit()
      let { moveToLeftEditor, moveToUpEditor, moveToRightEditor, moveToDownEditor, moveToNextEditor, moveToPrevEditor, currentKeys } = this.editorBasic;
      let {keyUpEditor,keyDownEditor,keyLeftEditor,keyRightEditor,keyNextEditor,keyPrevEditor} = this.table;
      let strategy = {
        keyUpEditor: moveToUpEditor,
        keyDownEditor: moveToDownEditor,
        keyLeftEditor: moveToLeftEditor,
        keyRightEditor: moveToRightEditor,
        keyPrevEditor: moveToPrevEditor,
        keyNextEditor: moveToNextEditor
      };
      let position = null;
      if(currentKeys.indexOf(keyCode) < 0) currentKeys.push(keyCode)
      let tempMoveFunction;
      Object.entries({keyUpEditor,keyDownEditor,keyLeftEditor,keyRightEditor,keyNextEditor,keyPrevEditor}).forEach(([k, v]) => {
        if (currentKeys.join(",") === this.editorBasic.getkeyCode(v)) {
          tempMoveFunction = strategy[k];
          if (tempMoveFunction)
            position = tempMoveFunction.call(
              this.editorBasic,
              this.$index,
              this.cellIndex
            );
        }
      });
      if (position) {
        let canUpdate = this.editorBasic.updateEditCellPosition({
          editable: true,
          $index: position.$index,
          cellIndex: position.cellIndex,
          row: this.row,
          column: this.column
        });
        if (!canUpdate) {
          this.$refs.widget.blur();
        }
      }
    },
    onKeyUp(e) {
      let keyCodeIndex = this.editorBasic.currentKeys.indexOf(e.keyCode);
      if (keyCodeIndex > -1) this.editorBasic.currentKeys.splice(keyCodeIndex, 1);
    }
  }
};
</script>

