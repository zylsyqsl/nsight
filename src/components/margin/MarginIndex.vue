<template>
  <div>
    <div class="query_container">
      <el-row class="query_wapper">
        <el-col :span="6"
                class="query_block">
          <div class="query_label">经济公司：</div>
          <div class="query_form_item">
            <auto-select class="inline-input"
                         v-if="brokerList.length > 0"
                         :list="brokerList"
                         @select="changeExchange"
                         placeholder="123"></auto-select>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="table_container">
      <el-table :data="resultList"
                stripe>
        <el-table-column prop="BrokerID"
                         label="经纪公司"
                         width="110">
          <template slot-scope="scope">
            <span>{{$getEnumLabel('TransactionStatus', scope.row.BrokerID)}} </span>
          </template>
        </el-table-column>
        <el-table-column prop="ExchangeID"
                         label="交易所"
                         width="110">
        </el-table-column>
        <el-table-column prop="TemplateID"
                         label="模板代码"
                         width="110">
        </el-table-column>
        <el-table-column prop="SecurityID"
                         label="合约"
                         width="110">
        </el-table-column>
        <el-table-column prop="BizClass"
                         label="业务类别"
                         width="110">
        </el-table-column>
        <el-table-column prop="MarginByMoney"
                         label="保证金率(按金额)"
                         width="140">
        </el-table-column>
        <el-table-column prop="MarginByVolume"
                         label="保证金费(按手数)"
                         width="140">
        </el-table-column>
        <el-table-column prop="ExchMarginByMoney"
                         label="交易所保证金率(按金额)">
        </el-table-column>
        <el-table-column prop="ExchMarginByVolume"
                         label="交易所保证金费(按手数)">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { enum_userTypesypes } from "@/assets/js/commonEnum.js";
export default {
  components: {},
  data () {
    return {
      a: "",
      queryForm: {
        BrokerID: "",
        ExchangeID: "2",
        TemplateID: ""
      },
      contractList: [],
      resultList: [],
      brokerList: []
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
    },
    query () {
      this.$fetchPost("/sq/v1/template/selectSGEMarginRateTemplate", {
        SGEMarginRateTemplate: this.queryForm
      }).then(response => {
        if (response) {
          if (response.success) {
            this.resultList = [];
            response.content.forEach(item => {
              var map;
              map = {
                BrokerID: item[0],
                ExchangeID: item[1],
                TemplateID: item[2],
                SecurityID: item[3],
                BizClass: item[4],
                MarginByMoney: item[5],
                MarginByVolume: item[6],
                ExchMarginByMoney: item[7],
                ExchMarginByVolume: item[8]
              };
              this.resultList.push(map);
            });
          }
        }
      });
    },
    getBroker () {
      if (this.$store.state.brokerList.length == 0) {
        this.$fetchPost("/sq/v1/template/getBroker").then(response => {
          if (response) {
            if (response.success) {
              this.$store.dispatch("sumbitBrokerList", response.content);
              this.brokerList = this.$store.state.brokerList;
            }
          }
        });
      } else {
        this.brokerList = this.$store.state.brokerList;
      }
    },
    changeExchange (item) {
      this.queryForm.BrokerID = item.id;
      this.query();
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
