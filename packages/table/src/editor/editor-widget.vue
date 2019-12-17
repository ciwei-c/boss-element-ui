<script>
import BossInput from "boss-element-ui/packages/input";
import BossSelect from "boss-element-ui/packages/select";
import BossDatePicker from "boss-element-ui/packages/date-picker";
export default {
  components: { BossInput, BossSelect, BossDatePicker },
  render() {
    let widget = this.getWidget(this.$parent.widget);
    let { componentOptions = {}, data = {} } = widget;
    componentOptions.listeners = componentOptions.listeners || {};
    Object.assign(componentOptions.listeners, {
      focus: this.onFocusEdit,
      blur: this.onBlurEdit,
      input: v => (this.$parent.value = v)
    });
    Object.assign(componentOptions.propsData, {
      value: this.$parent.value
    });
    Object.assign(data, { ref: "widget" });
    return widget;
  },
  created() {
    this.$nextTick(() => {
      this.$refs.widget.focus();
    });
  },
  methods: {
    blur(){
      this.$refs.widget.blur();
    },
    onBlurEdit() {
      this.$parent.editorBasic.onEndEdit(this.$parent.row, this.$parent.$index, this.$parent.column);
    },
    onFocusEdit() {
      this.$parent.editorBasic.onBeginEdit(this.$parent.row, this.$parent.$index, this.$parent.column);
    },
    getWidget(widget) {
      const widgetsMap = {
        input() {
          return <boss-input />;
        },
        select() {
          return (
            <boss-select>
              {this.$parent.widgetOptions.map(item => {
                return (
                  <boss-option
                    key={item.value}
                    label={item.label}
                    value={item.value}
                  />
                );
              })}
            </boss-select>
          );
        },
        "date-picker"() {
          return (
            <boss-date-picker
              editable={false}
              clearable={false}
              value-format="yyyy-MM-dd"
            />
          );
        }
      };
      let fn = widgetsMap[widget] || (() => null);
      return fn.call(this);
    }
  }
};
</script>