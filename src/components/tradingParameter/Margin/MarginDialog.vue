<template>
  <div>
    <el-dialog :title="title"
               :visible.sync="dialogVisible"
               width="800px"
               @closed="closeDialog">
      <div class="dialog_container">
        <div class="dialog_wapper">
          <el-form label-width="160px"
                   class="xu_form"
                   :model="applyForm"
                   :rules="rules"
                   ref="applyForm"
                   :hide-required-asterisk="true">
            <el-form-item label="交易所："
                          prop="ExchangeID"
                          class="form-item-box">
              <auto-select class="inline-input"
                           :list="exchangeList"
                           :disabled="flag == 'edit'"
                           v-model="applyForm.ExchangeID"
                           @select="selectExchange"
                           placeholder="请选择"></auto-select>
            </el-form-item>
            <div style="width:100px;"><span>&nbsp;</span></div>
            <el-form-item label="经纪公司："
                          prop="BrokerID"
                          class="form-item-box">
              <auto-select class="inline-input"
                           :list="brokerList"
                           :disabled="flag == 'edit'"
                           v-model="applyForm.BrokerID"
                           placeholder="请选择"></auto-select>
            </el-form-item>

            <el-form-item label="模板代码："
                          prop="TemplateID"
                          class="form-item-box">
              <el-input v-model="applyForm.TemplateID"
                        placeholder="请输入内容"
                        :disabled="flag == 'edit'"
                        size="mini"></el-input>
            </el-form-item>
            <el-form-item label="合约："
                          prop="SecurityID"
                          class="form-item-box">
              <auto-select class="inline-input"
                           :list="securityList"
                           :disabled="flag == 'edit'"
                           v-model="applyForm.SecurityID"
                           placeholder="请选择"></auto-select>
            </el-form-item>
            <el-form-item label="业务类别："
                          prop="BizClass"
                          class="form-item-box">
              <el-select v-model="applyForm.BizClass"
                         :disabled="flag == 'edit'"
                         size="mini"
                         placeholder="请选择">
                <el-option v-for="item in bizClassList"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="保证金率："
                          prop="MarginByMoney"
                          class="form-item-box">
              <el-input v-model="applyForm.MarginByMoney"
                        placeholder="请输入保证金率(按金额)"
                        size="mini"
                        clearable></el-input>
            </el-form-item>
            <el-form-item label="保证金费："
                          prop="MarginByVolume"
                          class="form-item-box">
              <el-input v-model="applyForm.MarginByVolume"
                        placeholder="请输入保证金费(按手数)"
                        size="mini"
                        clearable></el-input>
            </el-form-item>
            <el-form-item label="交易所保证金率："
                          prop="ExchMarginByMoney"
                          class="form-item-box">
              <el-input v-model="applyForm.ExchMarginByMoney"
                        placeholder="请输入(按金额)"
                        size="mini"
                        clearable></el-input>
            </el-form-item>
            <el-form-item label="交易所保证金费："
                          prop="ExchMarginByVolume"
                          class="form-item-box">
              <el-input v-model="applyForm.ExchMarginByVolume"
                        placeholder="请输入(按手数)"
                        size="mini"
                        clearable></el-input>
            </el-form-item>
          </el-form>
          <div class="dialog_option_row">
            <el-button size="mini"
                       @click.native="dialogVisible = false">取消</el-button>
            <el-button type="primary"
                       size="mini"
                       @click.native="submit">确定</el-button>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { enum_BizClass } from "@/assets/js/commonEnum.js";
export default {
  name: "margin-dialog",
  components: {},
  props: {
    title: {
      type: String,
      default: "弹框"
    },
    flag: {
      // 标识位：'edit':修改，'add'：新增
      type: String,
      default: "add"
    },
    openFlag: {
      type: Boolean,
      default: false
    },
    item: {
      // 如果是编辑的话，需要传入参数获取编辑内容
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      dialogVisible: false,
      bizClassList: enum_BizClass(),
      applyForm: {
        ApplyID: "",
        BrokerID: "",
        ExchangeID: "",
        TemplateID: "",
        SecurityID: "",
        BizClass: "",
        MarginByMoney: "",
        MarginByVolume: "",
        ExchMarginByMoney: "",
        ExchMarginByVolume: "",
        VersionNo: '12345',
      },
      rules: {
        BrokerID: [
          { required: true, message: "经济公司不可为空", trigger: "change" }
        ],
        ExchangeID: [
          { required: true, message: "交易所不可为空", trigger: "change" }
        ],
        TemplateID: [
          { required: true, message: "模板代码不可为空", trigger: "blur" }
        ],
        SecurityID: [
          { required: true, message: "合约不可为空", trigger: "change" }
        ],
        BizClass: [
          { required: true, message: "业务类别不可为空", trigger: "blur" }
        ],
        MarginByMoney: [
          { required: true, message: "保证金率不可为空", trigger: "blur" },
          {
            validator: this.validaByMoney, trigger: 'blur'
          },
        ],
        MarginByVolume: [
          { required: true, message: "保证金费不可为空", trigger: "blur" },
          { validator: this.validaByVolume, trigger: 'blur' },
        ],
        ExchMarginByMoney: [
          {
            required: true,
            message: "交易所保证金率不可为空",
            trigger: "change"
          }, {
            validator: this.validaByMoney, trigger: 'blur'
          },
        ],
        ExchMarginByVolume: [
          {
            required: true,
            message: "交易所保证金费不可为空",
            trigger: "change"
          },
          {
            validator: this.validaByVolume, trigger: 'blur'
          },
        ]
      },
      brokerList: [],
      exchangeList: [],
      securityList: [],

    };
  },
  created: function () {

  },
  methods: {
    init: function () {
      this.getBroker();
      this.getExchange();
      if (this.flag == 'edit') {
        this.selectExchange(this.item.ExchangeID);
        setTimeout(() => {
          this.getMargin();
        }, 500)
      }
    },
    validaByMoney (rule, value, callback) {
      if (/^\d{0,8}\.{0,1}(\d{1,6})?$/.test(value) == false) {
        callback(new Error('保证金率格式不正确'));
      } else {
        callback();
      }
    },
    validaByVolume (rule, value, callback) {
      if (/^\d{0,8}\.{0,1}(\d{1,2})?$/.test(value) == false) {
        callback(new Error('保证金费格式不正确'));
      } else {
        callback();
      }
    },
    getMargin () {
      this.applyForm.VersionNo = this.item.VersionNo;
      this.applyForm.BrokerID = this.item.BrokerID;
      this.applyForm.BrokerName = this.item.BrokerName;
      this.applyForm.ExchangeID = this.item.ExchangeID;
      this.applyForm.ExchangeName = this.item.ExchangeName;
      this.applyForm.TemplateID = this.item.TemplateID;
      this.applyForm.SecurityID = this.item.SecurityID;
      this.applyForm.BizClass = this.item.BizClass;
      this.applyForm.MarginByMoney = Number(this.item.MarginByMoney).toFixed(6);
      this.applyForm.MarginByVolume = Number(this.item.MarginByVolume).toFixed(2);
      this.applyForm.ExchMarginByMoney = Number(this.item.ExchMarginByMoney).toFixed(6);
      this.applyForm.ExchMarginByVolume = Number(this.item.ExchMarginByVolume).toFixed(2);
      this.applyForm.SecurityName = this.item.SecurityName;
    },
    closeDialog (done) {
      this.applyForm = {
        ApplyID: "",
        BrokerID: "",
        ExchangeID: "",
        TemplateID: "",
        SecurityID: "",
        BizClass: "",
        MarginByMoney: "",
        MarginByVolume: "",
        ExchMarginByMoney: "",
        ExchMarginByVolume: "",
        VersionNo: '12345',
      };
      this.securityList = [];
      setTimeout(() => {
        this.$refs["applyForm"].clearValidate();
      }, 0);
    },
    submit () {
      let api = '';
      if (this.flag == 'add') {
        api = "/api/v1/sua/bc9/template/addMarginTemplate";
      }
      if (this.flag == 'edit') {
        api = "/api/v1/sua/bc9/template/updateMarginTemplate";
      }
      this.$refs["applyForm"].validate((result, obj) => {
        if (result) {
          this.$fetchPost(api, {
            MarginRateTemplate: this.applyForm
          }).then(response => {
            if (response) {
              this.$emit("closed");
              this.dialogVisible = false;
            }
          });
        }
      });
    },

    getBroker () {
      this.$store.dispatch("sumbitBrokerList", () => {
        this.brokerList = this.$store.state.brokerList;
      });
    },
    getExchange () {
      this.$store.dispatch("sumbitExchangeList", () => {
        this.exchangeList = this.$store.state.exchangeList;
      });
    },
    selectExchange (value) {
      this.applyForm.SecurityID = '';
      this.$fetchPost("/api/v1/suq/bc9/template/getSecurity", {
        Security: { ExchangeID: value }
      }).then(response => {
        if (response) {
          this.securityList = [];
          response.getData(0).forEach(item => {
            var map;
            map = {
              value: item[0],
              label: item[1]
            };
            this.securityList.push(map);
          });

        }
      });
    }
  },
  watch: {
    openFlag (newValue, oldValue) {
      this.dialogVisible = newValue;
      if (newValue) {
        this.init();
      }
    },
    dialogVisible (newValue, oldValue) {
      this.$emit("update:openFlag", newValue);
    }
  }
};
</script>
<style lang="stylus" scoped></style>
