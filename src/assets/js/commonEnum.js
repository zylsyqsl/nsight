export function enum_InvestorType() {
  var options = [
    { value: "0", label: "个人" },
    { value: "1", label: "机构" },
    { value: "2", label: "自营" }
  ];
  return options;
}

export function enum_DocumentType() {
  var options = [
    { value: "0", label: "组织机构代码" },
    { value: "1", label: "中国公民身份证" },
    { value: "2", label: "军官证" },
    { value: "3", label: "警官证" },
    { value: "4", label: "士兵证" },
    { value: "5", label: "户口簿" },
    { value: "6", label: "护照" },
    { value: "7", label: "台胞证" },
    { value: "8", label: "回乡证" },
    { value: "9", label: "营业执照号" },
    { value: "A", label: "税务登记号/当地纳税ID" },
    { value: "B", label: "港澳居民来往内地通行证" },
    { value: "C", label: "台湾居民来往大陆通行证" },
    { value: "D", label: "驾照" },
    { value: "F", label: "当地社保ID" },
    { value: "G", label: "当地身份证" },
    { value: "H", label: "商业登记证" },
    { value: "I", label: "港澳永久性居民身份证" },
    { value: "J", label: "人行开户许可证" },
    { value: "x", label: "其他证件" }
  ];
  return options;
}

export function enum_TransactionStatus() {
  var options = [
    { value: "0", label: "启用" },
    { value: "1", label: "禁用" }
  ];
  return options;
}

export function enum_SettlementStatus() {
  var options = [
    { value: "0", label: "未确认" },
    { value: "1", label: "已确认" }
  ];
  return options;
}

export function enum_UserTypes() {
  var options = [
    { value: "0", label: "经纪公司用户" },
    { value: "1", label: "超级用户" },
    { value: "2", label: "投资者用户" }
  ];
  return options;
}

export function enum_Encryption() {
  var options = [
    { value: "0", label: "明文" },
    { value: "2", label: "AES加密" },
    { value: "3", label: "SHA加密" },
    { value: "4", label: "MD5加密" }
  ];
  return options;
}

export function enum_LoginStatus() {
  var options = [
    { value: "0", label: "启用" },
    { value: "1", label: "禁用" },
    { value: "2", label: "锁定" }
  ];
  return options;
}

export function enum_Currency() {
  var options = [
    { value: "1", label: "人民币" },
    { value: "2", label: "港币" },
    { value: "3", label: "美元" }
  ];
  return options;
}

export function enum_BankCode() {
  var options = [
    { value: "1", label: "中国建设银行" },
    { value: "2", label: "中国农业银行" },
    { value: "3", label: "中国工商银行" },
    { value: "4", label: "中国银行" },
    { value: "5", label: "中国招商银行" },
    { value: "6", label: "中国交通银行" },
    { value: "7", label: "浦东发展银行" },
    { value: "8", label: "兴业银行" },
    { value: "9", label: "中国光大银行" },
    { value: "a", label: "广东发展银行" }
  ];
  return options;
}

export function enum_ExchangeCode() {
  var options = [
    { value: "0", label: "通用内部使用" },
    { value: "1", label: "上海黄金交易所" },
    { value: "2", label: "上海期货交易所" }
  ];
  return options;
}

export function enum_SpeculativeHedgingSigns() {
  var options = [
    { value: "0", label: "投机" },
    { value: "1", label: "套利" },
    { value: "2", label: "套保" }
  ];
  return options;
}

export function enum_MarketCategory() {
  var options = [
    { value: "0", label: "现货" },
    { value: "1", label: "即期" },
    { value: "2", label: "延期" },
    { value: "3", label: "询价" },
    { value: "4", label: "期货" }
  ];
  return options;
}

export function enum_TradingUnit() {
  var options = [
    { value: "0", label: "手" },
    { value: "1", label: "张" },
    { value: "2", label: "股" },
    { value: "3", label: "份" }
  ];
  return options;
}

export function enum_TradingCurrencies() {
  var options = [
    { value: "1", label: "人民币" },
    { value: "2", label: "港币" },
    { value: "3", label: "美元" }
  ];
  return options;
}

export function enum_BusinessCategory() {
  var options = [
    { value: "0", label: "买入开仓" },
    { value: "1", label: "买入平仓" },
    { value: "2", label: "卖出开仓" },
    { value: "3", label: "卖出平仓" },
    { value: "4", label: "交割交货申报" },
    { value: "5", label: "交割收货申报" },
    { value: "6", label: "中立仓交货申报" },
    { value: "7", label: "中立仓收货申报" }
  ];
  return options;
}

export function enum_HandlingChargeType() {
  var options = [
    { value: "0", label: "毛" },
    { value: "1", label: "净" }
  ];
  return options;
}

export function enum_RangeModel() {
  var options = [
    { value: "0", label: "普通模式" },
    { value: "1", label: "模板模式" }
  ];
  return options;
}

export function enum_PositionDirection() {
  var options = [
    { value: "0", label: "净" },
    { value: "1", label: "多头" },
    { value: "2", label: "空头" }
  ];
  return options;
}

export function enum_DeferredPaymentDirection() {
  var options = [
    { value: "0", label: "" },
    { value: "1", label: "多付空" },
    { value: "2", label: "空付多" },
    { value: "3", label: "平" }
  ];
  return options;
}

export function enum_ClientEncryption() {
  var options = [
    { value: "0", label: "明文" },
    { value: "1", label: "软加密" },
    { value: "2", label: "硬加密" }
  ];
  return options;
}

export function enum_ConnectionStatus() {
  var options = [
    { value: "0", label: "未连接" },
    { value: "1", label: "正在分配" },
    { value: "2", label: "已连接" }
  ];
  return options;
}

export function enum_UnitOfWeight() {
  var options = [
    { value: "0", label: "克" },
    { value: "1", label: "千克" },
    { value: "2", label: "盎司" }
  ];
  return options;
}
