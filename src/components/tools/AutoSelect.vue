<template>
  <div>
    <el-autocomplete class="inline-input"
                     ref="myAutocomplete"
                     v-bind="$attrs"
                     :fetch-suggestions="querySearch"
                     :placeholder="placeholder"
                     v-model="option"
                     size="mini"
                     :disabled="disabled"
                     @select="handleSelect"
                     @clear="handleClear"
                     clearable></el-autocomplete>
  </div>
</template>
<script>
import { Autocomplete } from "element-ui";
export default {
  name: "auto-select",
  components: {
    ElAutocomplete: Autocomplete
  },
  inheritAttrs: false,
  model: {
    //  用于与父组件定义的的v-model绑定，event就是当子组件触发select，发送给父组件时定义的事件名
    prop: "value",
    event: "select"
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    value: {
      //model 定义了之后，props也要定义一下，这样watch就能监听到了
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },

  data () {
    return {
      option: "",
      optionValue: '',
      dataList: []
    };
  },
  created () { },
  mounted () {
    this.$refs.myAutocomplete.handleChange = value => {
      this.$emit("change", value);
    };
  },
  methods: {
    init () {
      this.dataList = [];
      this.list.forEach(item => {
        var tempStr = {
          value: item.label,
          id: item.value
        };
        this.dataList.push(tempStr);
      });
    },
    querySearch: function (queryString, cb) {
      var dataList = this.dataList;
      var results = queryString
        ? dataList.filter(this.createFilter(queryString))
        : dataList;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter (queryString) {
      return dataList => {
        return (
          dataList.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect (item) {
      this.$emit("select", item.id); //  对应model中event的select，发送给父组件时定义的事件名
    },
    handleClear () {
      this.handleSelect({ id: "" });
      this.$refs.myAutocomplete.$refs.input.blur()
    }
  },
  watch: {
    list: {
      handler: function (newValue, oldValue) {
        this.init();
      },
      immediate: true
    },
    value (newValue, oldValue) {
      this.optionValue = newValue;
      this.dataList.forEach((item) => {
        if (item.id == newValue) {
          this.option = item.value;
        }
      });
      if (!newValue) {
        this.option = "";
      }
    }
  }
};
</script>
<style></style>
