export default class EditorBasic {
  constructor(options) {
    this.store = null
    this.table = null
    this.editorCellMap = []
    this.storeFilterEditorCellMap = []
    this.currentKeys = []
    this.commonKeyCodeMap = {
      ctrl: 17,
      alt: 18,
      shift: 16,
      tab: 9,
      left: 37,
      right: 39,
      up: 38,
      down: 40
    }
    for (let name in options) {
      if (options.hasOwnProperty(name)) {
        this[name] = options[name];
      }
    }
  }

  clearEditorMap() {
    this.editorCellMap = []
  }
  
  getkeyCode(key){
    if (typeof key === "string") {
      key = this.commonKeyCodeMap[key] || "";
    }
    if (Array.isArray(key)){
      key = key.map(k => this.getkeyCode(k)).join(",");
    }
    return `${key}`;
  }

  setEditorMap(editable, $index, cellIndex) {
    if (editable) {
      if (!this.editorCellMap[$index]) this.editorCellMap[$index] = {
        $index,
        cellIndexs: []
      }
      this.editorCellMap[$index].cellIndexs[cellIndex] = cellIndex
    } else {
      if (!this.editorCellMap[$index]) this.editorCellMap[$index] = null
    }
  }

  updateEditCellPosition({editable, $index, cellIndex, row, column}){
    if(!editable) return

    let canUpdate = true

    if( this.isFunction(this.table.beforeBeginEdit) ){
      canUpdate = this.table.beforeBeginEdit(row, $index, column.property)
    }

    if(canUpdate !== false){
      this.store.updateEditCellPosition({$index,cellIndex})
    } else {
      this.currentKeys = []
      return canUpdate
    }
  }
  
  onEndEdit(row, $index, column){
    this.table.$emit('on-end-edit', row, $index, column.property)
  }

  onBeginEdit(row,$index, column){
    this.table.$emit('on-begin-edit', row, $index, column.property)
  }

  get storeEditorCellMap() {
    return this.store.states.editorCellMap
  }

  isFunction(v){
    return v && typeof v === 'function'
  }

  isFalse(v) {
    return !v && v !== 0
  }

  update() {
    this.store.updateEditorCellMap(this.editorCellMap)
    this.storeFilterEditorCellMap = []
    this.storeEditorCellMap.filter(v => !!v).forEach((v) => {
      if (v.cellIndexs) {
        v.cellIndexs.filter(c => !!c).forEach(c => {
          this.storeFilterEditorCellMap.push(`${v.$index}-${c}`)
        })
      }
    })
  }

  setValue(val, maxValue) {
    return val < 0 ? maxValue : (val > maxValue ? 0 : val)
  }

  findDirectionEditor($index, cellIndex, type) {
    let calc = ['up', 'left'].includes(type) ? -1 : 1
    const next = (cb) => {
      while( this.storeFilterEditorCellMap.indexOf(`${$index}-${cellIndex}`) < 0 ){
        cb()
      }
    }
    if( type === 'up' || type === 'down'){
      $index += calc
      next(()=>{
        $index = this.setValue($index + calc, this.storeEditorCellMap.length - 1)
      })
    }

    if( type === 'left' || type === 'right' ){
      cellIndex += calc
      next(()=>{
        cellIndex = this.setValue(cellIndex + calc, this.storeEditorCellMap[$index].cellIndexs.length - 1)
      })
    }

    return { $index, cellIndex }
  }

  findLinkEditor($index, cellIndex, type){
    let calc = type === 'prev' ? - 1 : 1
    if (this.storeFilterEditorCellMap.length > 1) {
      let idx = this.storeFilterEditorCellMap.indexOf(`${$index}-${cellIndex}`);
      idx = this.setValue(idx + calc, this.storeFilterEditorCellMap.length - 1);
      [$index, cellIndex] = this.storeFilterEditorCellMap[idx].split("-").map(v => Number(v));
    }

    return {
      $index,
      cellIndex
    }
  }

  moveToUpEditor() {
    return this.findDirectionEditor(...arguments, 'up')
  }

  moveToDownEditor() {
    return this.findDirectionEditor(...arguments, 'down')
  }

  moveToLeftEditor() {
    return this.findDirectionEditor(...arguments, 'left')
  }

  moveToRightEditor() {
    return this.findDirectionEditor(...arguments, 'right')
  }

  moveToPrevEditor() {
    return this.findLinkEditor(...arguments,'prev')
  }

  moveToNextEditor() {
    return this.findLinkEditor(...arguments,'next')
  }
}