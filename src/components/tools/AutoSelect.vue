<template>
  <div>
    <el-autocomplete
      class="inline-input"
      ref="myAutocomplete"
      v-bind="$attrs"
      :fetch-suggestions="querySearch"
      :placeholder="placeholder"
      v-model="option"
      size="mini"
      @select="handleSelect"
      @clear="handleClear"
      clearable
    ></el-autocomplete>
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
  props: {
    list: "",
    placeholder: {
      type: String,
      default: "请输入内容"
    }
  },

  data() {
    return {
      option: "",
      dataList: []
    };
  },
  created() {
    this.init();
  },
  mounted() {
    this.$refs.myAutocomplete.handleChange = value => {
      this.$emit("change", value);
    };
  },
  methods: {
    init() {
      this.list.forEach(item => {
        var tempStr = {
          value: item.label,
          id: item.value
        };
        this.dataList.push(tempStr);
      });
    },
    querySearch: function(queryString, cb) {
      var dataList = this.dataList;
      var results = queryString
        ? dataList.filter(this.createFilter(queryString))
        : dataList;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return dataList => {
        return (
          dataList.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      setTimeout(() => {
        this.$emit("select", item);
      }, 0);
    },
    handleClear() {
      this.handleSelect({ id: "" });
    }
  }
};
</script>
<style></style>
