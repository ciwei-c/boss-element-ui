<script>
import BossInput from "boss-element-ui/packages/input";
import BossSelect from "boss-element-ui/packages/select";
import BossDatePicker from "boss-element-ui/packages/date-picker";
import BossInputNumber from "boss-element-ui/packages/input-number";
import BossSelectTree from "boss-element-ui/packages/select-tree";
export default {
  components: { BossInput, BossSelect, BossDatePicker, BossInputNumber, BossSelectTree },
  render() {
    let widget = this.getWidget(this.$parent.widget);
    let { componentOptions = {}, data = {} } = widget;
    componentOptions.listeners = componentOptions.listeners || {};
    Object.assign(componentOptions.listeners, {
      focus: this.onFocusEdit,
      blur: this.onBlurEdit,
      input: v => (this.$parent.value = v)
    });
    Object.assign(componentOptions.propsData, this.getCamelCaseWidgetProps(this.$parent.widgetProps), {
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
    getCamelCaseWidgetProps(widgetProps) {
      let props = {};
      Object.keys(widgetProps).forEach(k => {
        let v = widgetProps[k]
        k = k.split("-").filter(v => !!v).map((v, i) => i ? v[0].toUpperCase() + v.substring(1, v.length) : v).join("");
        props[k] = v
      });
      return props
    },
    blur() {
      this.$refs.widget.blur();
    },
    onBlurEdit() {
      this.$parent.editorBasic.onEndEdit(
        this.$parent.row,
        this.$parent.$index,
        this.$parent.column
      );
    },
    onFocusEdit() {
      this.$parent.editorBasic.onBeginEdit(
        this.$parent.row,
        this.$parent.$index,
        this.$parent.column
      );
    },
    getWidget(widget) {
      const widgetsMap = {
        input() {
          return <boss-input />;
        },
        select() {
          return (
            <boss-select>
              {(this.$parent.widgetProps.options || []).map(item => {
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
              valueFormat="yyyy-MM-dd"
            />
          );
        },
        "input-number"() {
          return <boss-input-number />;
        },
        "select-tree"() {
          return <boss-select-tree />;
        }
      };
      let fn = widgetsMap[widget] || (() => null);
      return fn.call(this);
    }
  }
};
</script>