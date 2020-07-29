<template>
  <div>
    <div class="query_container">
      <el-row class="query_wapper">
        <el-col :span="6"
                class="query_block">
          <div class="query_label">交易所：</div>
          <div class="query_form_item">
            <auto-select class="inline-input"
                         :list="exchangeList"
                         v-model="queryForm.ExchangeID"
                         @select="changeExchange"
                         placeholder="请选择"></auto-select>
          </div>
        </el-col>
        <el-col :span="6"
                class="query_block">
          <div class="query_label">经纪公司：</div>
          <div class="query_form_item">
            <auto-select class="inline-input"
                         :list="brokerList"
                         v-model="queryForm.BrokerID"
                         @select="changeExchange"
                         placeholder="请选择"></auto-select>
          </div>
        </el-col>

        <el-col :span="6"
                class="query_block">
          <div class="query_label">合约：</div>
          <div class="query_form_item">
            <el-input v-model="queryForm.SecurityID"
                      size="mini"
                      @change="query"
                      placeholder="请输入内容"
                      clearable></el-input>
          </div>
        </el-col>
        <el-col :span="6"
                class="query_block">
          <div class="query_label">模板代码：</div>
          <div class="query_form_item">
            <el-input v-model="queryForm.TemplateID"
                      size="mini"
                      @change="query"
                      placeholder="请输入内容"
                      clearable></el-input>
          </div>
        </el-col>
        <el-col :span="6"
                class="query_block">
          <div class="query_label">业务类别：</div>
          <div class="query_form_item">
            <el-select v-model="queryForm.BizClass"
                       size="mini"
                       @change="query"
                       placeholder="请选择">
              <el-option v-for="item in bizClassList"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="table_container">
      <div class="option_container">
        <span class="option_span"
              @click="openDialog('新增', 'add')"><img src="~assets/image/icon_01.png" />
        </span>
        <span class="option_span"
              @click="openDialog('编辑', 'edit')"><img src="~assets/image/icon_02.png" />
        </span>
        <span class="option_span"
              @click="deleteMargin"><img src="~assets/image/icon_03.png" />
        </span>
      </div>
      <el-table :data="resultList"
                @current-change="handleCurrentChange"
                :highlight-current-row="true"
                stripe>
        <el-table-column prop="ExchangeName"
                         label="交易所"
                         header-align="center"
                         width="120">
        </el-table-column>
        <el-table-column prop="BrokerName"
                         label="经纪公司"
                         width="110">
          <!-- <template slot-scope="scope">
            <span>{{ scope.row.BrokerName}}
            </span>
          </template> -->
        </el-table-column>

        <el-table-column prop="TemplateID"
                         label="模板代码"
                         header-align="center"
                         width="100">
        </el-table-column>
        <el-table-column prop="SecurityName"
                         label="合约"
                         align="center"
                         header-align="center"
                         width="100">
        </el-table-column>
        <el-table-column prop="BizClass"
                         label="业务类别"
                         align="center"
                         header-align="center"
                         width="120">
          <template slot-scope="scope">
            <span>{{ $getEnumLabel("BizClass", scope.row.BizClass) }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="MarginByMoney"
                         label="保证金率(按金额)"
                         align="right"
                         header-align="center"
                         width="150">
          <template slot-scope="scope">
            <span>{{
                scope.row.MarginByMoney
                  ? Number(scope.row.MarginByMoney).toFixed(6)
                  : "--"
              }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="MarginByVolume"
                         label="保证金费(按手数)"
                         align="right"
                         header-align="center"
                         width="150">
          <template slot-scope="scope">
            <span>{{
                scope.row.MarginByMoney
                  ? Number(scope.row.MarginByVolume).toFixed(2)
                  : "--"
              }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="ExchMarginByMoney"
                         header-align="center"
                         align="right"
                         label="交易所保证金率">
          <template slot-scope="scope">
            <span>{{
                scope.row.MarginByMoney
                  ? Number(scope.row.ExchMarginByMoney).toFixed(6)
                  : "--"
              }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="ExchMarginByVolume"
                         header-align="center"
                         align="right"
                         label="交易所保证金费">
          <template slot-scope="scope">
            <span>{{
                scope.row.ExchMarginByVolume
                  ? Number(scope.row.ExchMarginByVolume).toFixed(2)
                  : "--"
              }}
            </span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <margin-dialog :title="dialog.title"
                   :flag="dialog.flag"
                   :openFlag.sync="dialog.openFlag"
                   :item="dialog.item"
                   @closed="closeDialog"></margin-dialog>
  </div>
</template>

<script>
import { enum_WithBlank_BizClass } from "@/assets/js/commonEnum.js";
import marginDialog from "./MarginDialog";
export default {
  components: { marginDialog },
  data () {
    return {
      curMargin: {},
      queryForm: {
        BrokerID: "",
        ExchangeID: "",
        TemplateID: "",
        SecurityID: "",
        BizClass: ""
      },
      contractList: [],
      resultList: [],
      brokerList: [],
      exchangeList: [],
      bizClassList: enum_WithBlank_BizClass(),
      dialog: {
        title: "",
        flag: "",
        openFlag: false,
        item: {}
      }
    };
  },
  created: function () {
    this.init();
  },
  mounted: function () { },
  methods: {
    init: function () {
      this.query();
      this.getBroker();
      this.getExchange();
    },
    query () {
      this.$fetchPost("/api/v1/suq/bc9/template/selectMarginRateTemplate", {
        MarginRateTemplate: {
          BrokerID: this.queryForm.BrokerID,
          ExchangeID: this.queryForm.ExchangeID,
          TemplateID: this.queryForm.TemplateID,
          SecurityID: this.queryForm.SecurityID,
          BizClass: this.queryForm.BizClass == '999' ? '' : this.queryForm.BizClass,
        }
      }).then(response => {
        if (response) {
          this.resultList = [];
          response.getData(0).forEach(item => {
            var map;
            map = {
              VersionNo: item[0],
              BrokerID: item[1],
              BrokerName: item[2],
              ExchangeID: item[3],
              ExchangeName: item[4],
              TemplateID: item[5],
              SecurityID: item[6],
              BizClass: item[7],
              MarginByMoney: item[8],
              MarginByVolume: item[9],
              ExchMarginByMoney: item[10],
              ExchMarginByVolume: item[11],
              SecurityName: item[12]
            };
            this.resultList.push(map);
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
    changeExchange (value) {
      this.query();
    },
    openDialog (title, flag) {
      if (flag == 'edit' && (JSON.stringify(this.curMargin) == "{}" || !this.curMargin)) {
        this.$alert('请选定一条记录', "提示", {
          confirmButtonText: "确定",
          callback: action => { }
        });
        return;
      }
      this.dialog = {
        title: title,
        flag: flag,
        openFlag: true,
        item: this.curMargin

      };
    },
    closeDialog () {
      this.query();
    },
    handleCurrentChange (val) {
      this.curMargin = val;
    },
    deleteMargin () {
      if (JSON.stringify(this.curMargin) == "{}" || !this.curMargin) {
        this.$alert('请选定一条记录', "提示", {
          confirmButtonText: "确定",
          callback: action => { }
        });
        return;
      }
      this.$confirm('是否删除该条记录？<br>[' + this.curMargin.ExchangeName + '] ['
        + this.curMargin.BrokerName + '] ['
        + this.curMargin.TemplateID + '] ['
        + this.curMargin.SecurityName + '] ['
        + this.$getEnumLabel("BizClass", this.curMargin.BizClass) + ']'
        , '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        closeOnClickModal: false,
        dangerouslyUseHTMLString: true,
        customClass: "confirmMessageBox",
        type: 'warning'
      }).then(() => {
        this.$fetchPost("/api/v1/sua/bc9/template/deleteMarginTemplate", {
          MarginRateTemplate: {
            VersionNo: this.curMargin.VersionNo,
            BrokerID: this.curMargin.BrokerID,
            ExchangeID: this.curMargin.ExchangeID,
            TemplateID: this.curMargin.TemplateID,
            SecurityID: this.curMargin.SecurityID,
            BizClass: this.curMargin.BizClass
          }
        }).then(response => {
          if (response) {
            this.$message({
              showClose: true,
              message: '操作成功',
              type: 'success'
            });
            setTimeout(() => {
              this.query();
            }, 1000)

          }
        });
      }).catch(() => {

      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.main_container {
  .query_block {
    display: flex;
    align-items: baseline;
  }
}
</style>
