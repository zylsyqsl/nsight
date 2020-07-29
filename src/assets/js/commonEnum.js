export function enum_InvestorType(){
	var options = [
		{value:"0", label:"个人"}
		,{value:"1", label:"机构"}
		,{value:"2", label:"自营"}
		];
		return options;
}

export function enum_WithBlank_InvestorType(){
	var options = [
		{value: "999", label: "全部"}
		,{value:"0", label:"个人"}
		,{value:"1", label:"机构"}
		,{value:"2", label:"自营"}
		];
		return options;
}

export function enum_IdCardType(){
	var options = [
		{value:"0", label:"组织机构代码"}
		,{value:"1", label:"中国公民身份证"}
		,{value:"2", label:"军官证"}
		,{value:"3", label:"警官证"}
		,{value:"4", label:"士兵证"}
		,{value:"5", label:"户口簿"}
		,{value:"6", label:"护照"}
		,{value:"7", label:"台胞证"}
		,{value:"8", label:"回乡证"}
		,{value:"9", label:"营业执照号"}
		,{value:"A", label:"税务登记号/当地纳税ID"}
		,{value:"B", label:"港澳居民来往内地通行证"}
		,{value:"C", label:"台湾居民来往大陆通行证"}
		,{value:"D", label:"驾照"}
		,{value:"F", label:"当地社保ID"}
		,{value:"G", label:"当地身份证"}
		,{value:"H", label:"商业登记证"}
		,{value:"I", label:"港澳永久性居民身份证"}
		,{value:"J", label:"人行开户许可证"}
		,{value:"x", label:"其他证件"}
		];
		return options;
}

export function enum_WithBlank_IdCardType(){
	var options = [
		{value: "999", label: "全部"}
		,{value:"0", label:"组织机构代码"}
		,{value:"1", label:"中国公民身份证"}
		,{value:"2", label:"军官证"}
		,{value:"3", label:"警官证"}
		,{value:"4", label:"士兵证"}
		,{value:"5", label:"户口簿"}
		,{value:"6", label:"护照"}
		,{value:"7", label:"台胞证"}
		,{value:"8", label:"回乡证"}
		,{value:"9", label:"营业执照号"}
		,{value:"A", label:"税务登记号/当地纳税ID"}
		,{value:"B", label:"港澳居民来往内地通行证"}
		,{value:"C", label:"台湾居民来往大陆通行证"}
		,{value:"D", label:"驾照"}
		,{value:"F", label:"当地社保ID"}
		,{value:"G", label:"当地身份证"}
		,{value:"H", label:"商业登记证"}
		,{value:"I", label:"港澳永久性居民身份证"}
		,{value:"J", label:"人行开户许可证"}
		,{value:"x", label:"其他证件"}
		];
		return options;
}

export function enum_TradingStatus(){
	var options = [
		{value:"0", label:"启用"}
		,{value:"1", label:"禁用"}
		];
		return options;
}

export function enum_WithBlank_TradingStatus(){
	var options = [
		{value: "999", label: "全部"}
		,{value:"0", label:"启用"}
		,{value:"1", label:"禁用"}
		];
		return options;
}

export function enum_SettleStatus(){
	var options = [
		{value:"0", label:"未确认"}
		,{value:"1", label:"已确认"}
		];
		return options;
}

export function enum_WithBlank_SettleStatus(){
	var options = [
		{value: "999", label: "全部"}
		,{value:"0", label:"未确认"}
		,{value:"1", label:"已确认"}
		];
		return options;
}

export function enum_UserType(){
	var options = [
		{value:"0", label:"经纪公司用户"}
		,{value:"1", label:"超级用户"}
		,{value:"2", label:"投资者用户"}
		];
		return options;
}

export function enum_WithBlank_UserType(){
	var options = [
		{value: "999", label: "全部"}
		,{value:"0", label:"经纪公司用户"}
		,{value:"1", label:"超级用户"}
		,{value:"2", label:"投资者用户"}
		];
		return options;
}

export function enum_PasswordEncodeMode(){
	var options = [
		{value:"0", label:"明文"}
		,{value:"2", label:"AES加密"}
		,{value:"3", label:"SHA加密"}
		,{value:"4", label:"MD5加密"}
		];
		return options;
}

export function enum_WithBlank_PasswordEncodeMode(){
	var options = [
		{value: "999", label: "全部"}
		,{value:"0", label:"明文"}
		,{value:"2", label:"AES加密"}
		,{value:"3", label:"SHA加密"}
		,{value:"4", label:"MD5加密"}
		];
		return options;
}

export function enum_LoginStatus(){
	var options = [
		{value:"0", label:"启用"}
		,{value:"1", label:"禁用"}
		,{value:"2", label:"锁定"}
		];
		return options;
}

export function enum_WithBlank_LoginStatus(){
	var options = [
		{value: "999", label: "全部"}
		,{value:"0", label:"启用"}
		,{value:"1", label:"禁用"}
		,{value:"2", label:"锁定"}
		];
		return options;
}

export function enum_FunctionID(){
	var options = [
		{value:"00", label:"空"}
		,{value:"1a", label:"报单插入"}
		,{value:"1b", label:"报单操作"}
		,{value:"1c", label:"强平单插入"}
		,{value:"1d", label:"强平单操作"}
		,{value:"1e", label:"强制撤单"}
		,{value:"1f", label:"强撤强平单"}
		,{value:"1g", label:"交割申报插入"}
		,{value:"1h", label:"交割申报操作"}
		,{value:"1i", label:"强撤交割申报"}
		,{value:"1j", label:"中立仓申报插入"}
		,{value:"1k", label:"中立仓申报操作"}
		,{value:"1l", label:"强撤中立仓申报"}
		,{value:"1m", label:"条件单插入"}
		,{value:"1n", label:"条件单操作"}
		,{value:"2a", label:"银证转账"}
		,{value:"2b", label:"资金调整"}
		,{value:"2c", label:"库存调整"}
		,{value:"2d", label:"持仓调整"}
		,{value:"2e", label:"查询会员资金"}
		,{value:"2f", label:"查询会员持仓"}
		,{value:"3a", label:"合约信息管理"}
		,{value:"3b", label:"行情管理"}
		,{value:"3c", label:"交割行情管理"}
		,{value:"3d", label:"投资者管理"}
		,{value:"3e", label:"业务单元管理"}
		,{value:"3f", label:"柜员用户管理"}
		,{value:"3g", label:"用户投资者代理关系管理"}
		,{value:"3h", label:"经纪公司用户功能权限管理"}
		,{value:"3i", label:"交易编码管理"}
		,{value:"3j", label:"投资者保证金率管理"}
		,{value:"3k", label:"投资者手续费率管理"}
		,{value:"3l", label:"投资者交易权限管理"}
		,{value:"3m", label:"业务单元资金账号管理关系管理"}
		,{value:"3n", label:"投资者限仓额度管理"}
		,{value:"3o", label:"经纪公司限仓额度管理"}
		,{value:"3p", label:"投资者限额额度管理"}
		,{value:"3q", label:"交易通知管理"}
		,{value:"3r", label:"交割品种管理"}
		,{value:"3s", label:"经纪公司条件单限制管理"}
		,{value:"3t", label:"投资者条件单限制管理"}
		,{value:"3u", label:"保证金率模板管理"}
		,{value:"3v", label:"手续费率模板管理"}
		,{value:"3w", label:"交易权限模板管理"}
		,{value:"3x", label:"限仓模板管理"}
		,{value:"3y", label:"限额模板管理"}
		,{value:"4a", label:"系统参数管理"}
		,{value:"4b", label:"系统状态管理"}
		,{value:"4c", label:"应用程序信息管理"}
		,{value:"4d", label:"应用程序用户"}
		,{value:"4e", label:"经纪公司信息管理"}
		,{value:"4f", label:"用户登录IP限制管理"}
		,{value:"4g", label:"会员管理"}
		,{value:"4h", label:"交易报盘管理"}
		,{value:"4i", label:"行情报盘管理"}
		,{value:"4j", label:"交易员报单序号管理"}
		,{value:"4k", label:"交易所回报主题号管理"}
		,{value:"5a", label:"重置用户密码"}
		,{value:"5b", label:"录入设备序列"}
		,{value:"5c", label:"校验用户密码"}
		,{value:"5d", label:"强制登出"}
		,{value:"5e", label:"强制退出"}
		,{value:"5f", label:"激活用户"}
		,{value:"5g", label:"结算单确认"}
		,{value:"6a", label:"查询证券信息"}
		,{value:"6b", label:"查询行情"}
		,{value:"6c", label:"查询投资者"}
		,{value:"6d", label:"查询业务单元"}
		,{value:"6e", label:"查询柜员用户"}
		,{value:"6f", label:"查询用户投资者代理关系"}
		,{value:"6g", label:"查询经纪公司用户功能权限"}
		,{value:"6h", label:"查询交易编码"}
		,{value:"6i", label:"查询报单"}
		,{value:"6j", label:"查询报单操作"}
		,{value:"6k", label:"查询成交"}
		,{value:"6l", label:"查询持仓"}
		,{value:"6m", label:"查询库存"}
		,{value:"6n", label:"查询资金"}
		,{value:"6o", label:"查询投资者保证金率"}
		,{value:"6p", label:"查询投资者手续费率"}
		,{value:"6q", label:"查询投资者交易权限"}
		,{value:"6r", label:"查询报单资金明细"}
		,{value:"6s", label:"查询业务单元资金账户关联关系"}
		,{value:"6t", label:"查询投资者限仓额度"}
		,{value:"6u", label:"查询经纪公司限仓额度"}
		,{value:"6v", label:"查询投资者限额额度"}
		,{value:"6w", label:"查询交易通知"}
		,{value:"6x", label:"查询交割申报"}
		,{value:"6y", label:"查询交割申报操作"}
		,{value:"6z", label:"查询交割申报成交"}
		,{value:"7a", label:"查询中立仓申报"}
		,{value:"7b", label:"查询中立仓申报操作"}
		,{value:"7c", label:"查询中立仓申报成交"}
		,{value:"7d", label:"查询结算单"}
		,{value:"7e", label:"查询交割行情"}
		,{value:"7f", label:"查询资金转移流水"}
		,{value:"7g", label:"查询库存转移流水"}
		,{value:"7h", label:"查询持仓转移流水"}
		,{value:"7i", label:"查询经纪公司条件单限制"}
		,{value:"7j", label:"查询投资者条件单限制"}
		,{value:"7k", label:"查询条件单"}
		,{value:"7l", label:"查询条件单操作"}
		,{value:"7m", label:"查询交割品种信息"}
		,{value:"7n", label:"查询保证金率模板"}
		,{value:"7o", label:"查询手续费率模板"}
		,{value:"7p", label:"查询交易权限模板"}
		,{value:"7q", label:"查询限仓模板"}
		,{value:"7r", label:"查询限额模板"}
		,{value:"9a", label:"Dump证券信息"}
		,{value:"9b", label:"Dump行情"}
		,{value:"9c", label:"Dump投资者"}
		,{value:"9d", label:"Dump业务单元"}
		,{value:"9e", label:"Dump柜员用户"}
		,{value:"9f", label:"Dump用户投资者代理关系"}
		,{value:"9g", label:"Dump经纪公司用户功能权限"}
		,{value:"9h", label:"Dump交易编码"}
		,{value:"9i", label:"Dump报单"}
		,{value:"9j", label:"Dump报单操作"}
		,{value:"9k", label:"Dump成交"}
		,{value:"9l", label:"Dump持仓"}
		,{value:"9m", label:"Dump库存"}
		,{value:"9n", label:"Dump资金"}
		,{value:"9o", label:"Dump投资者保证金率"}
		,{value:"9p", label:"Dump投资者手续费率"}
		,{value:"9q", label:"Dump投资者交易权限"}
		,{value:"9r", label:"Dump报单资金明细"}
		,{value:"9s", label:"Dump业务单元资金账户关联关系"}
		,{value:"9t", label:"Dump投资者限仓额度"}
		,{value:"9u", label:"Dump经纪公司限仓额度"}
		,{value:"9v", label:"Dump投资者限额额度"}
		,{value:"9w", label:"Dump交易通知"}
		,{value:"9x", label:"Dump交割申报"}
		,{value:"9y", label:"Dump交割申报操作"}
		,{value:"9z", label:"Dump交割申报成交"}
		,{value:"aa", label:"Dump中立仓申报"}
		,{value:"ab", label:"Dump中立仓申报操作"}
		,{value:"ac", label:"Dump中立仓申报成交"}
		,{value:"ad", label:"Dump结算单"}
		,{value:"ae", label:"Dump交割行情"}
		,{value:"af", label:"Dump资金转移流水"}
		,{value:"ag", label:"Dump库存转移流水"}
		,{value:"ah", label:"Dump持仓转移流水"}
		,{value:"ai", label:"Dump经纪公司条件单限制"}
		,{value:"aj", label:"Dump投资者条件单限制"}
		,{value:"ak", label:"Dump条件单"}
		,{value:"al", label:"Dump条件单操作"}
		,{value:"am", label:"Dump交割品种信息"}
		,{value:"an", label:"Dump保证金率模板"}
		,{value:"ao", label:"Dump手续费率模板"}
		,{value:"ap", label:"Dump交易权限模板"}
		,{value:"aq", label:"Dump限仓模板"}
		,{value:"ar", label:"Dump限额模板"}
		,{value:"zz", label:"Dump所有数据"}
		];
		return options;
}

export function enum_WithBlank_FunctionID(){
	var options = [
		{value: "999", label: "全部"}
		,{value:"00", label:"空"}
		,{value:"1a", label:"报单插入"}
		,{value:"1b", label:"报单操作"}
		,{value:"1c", label:"强平单插入"}
		,{value:"1d", label:"强平单操作"}
		,{value:"1e", label:"强制撤单"}
		,{value:"1f", label:"强撤强平单"}
		,{value:"1g", label:"交割申报插入"}
		,{value:"1h", label:"交割申报操作"}
		,{value:"1i", label:"强撤交割申报"}
		,{value:"1j", label:"中立仓申报插入"}
		,{value:"1k", label:"中立仓申报操作"}
		,{value:"1l", label:"强撤中立仓申报"}
		,{value:"1m", label:"条件单插入"}
		,{value:"1n", label:"条件单操作"}
		,{value:"2a", label:"银证转账"}
		,{value:"2b", label:"资金调整"}
		,{value:"2c", label:"库存调整"}
		,{value:"2d", label:"持仓调整"}
		,{value:"2e", label:"查询会员资金"}
		,{value:"2f", label:"查询会员持仓"}
		,{value:"3a", label:"合约信息管理"}
		,{value:"3b", label:"行情管理"}
		,{value:"3c", label:"交割行情管理"}
		,{value:"3d", label:"投资者管理"}
		,{value:"3e", label:"业务单元管理"}
		,{value:"3f", label:"柜员用户管理"}
		,{value:"3g", label:"用户投资者代理关系管理"}
		,{value:"3h", label:"经纪公司用户功能权限管理"}
		,{value:"3i", label:"交易编码管理"}
		,{value:"3j", label:"投资者保证金率管理"}
		,{value:"3k", label:"投资者手续费率管理"}
		,{value:"3l", label:"投资者交易权限管理"}
		,{value:"3m", label:"业务单元资金账号管理关系管理"}
		,{value:"3n", label:"投资者限仓额度管理"}
		,{value:"3o", label:"经纪公司限仓额度管理"}
		,{value:"3p", label:"投资者限额额度管理"}
		,{value:"3q", label:"交易通知管理"}
		,{value:"3r", label:"交割品种管理"}
		,{value:"3s", label:"经纪公司条件单限制管理"}
		,{value:"3t", label:"投资者条件单限制管理"}
		,{value:"3u", label:"保证金率模板管理"}
		,{value:"3v", label:"手续费率模板管理"}
		,{value:"3w", label:"交易权限模板管理"}
		,{value:"3x", label:"限仓模板管理"}
		,{value:"3y", label:"限额模板管理"}
		,{value:"4a", label:"系统参数管理"}
		,{value:"4b", label:"系统状态管理"}
		,{value:"4c", label:"应用程序信息管理"}
		,{value:"4d", label:"应用程序用户"}
		,{value:"4e", label:"经纪公司信息管理"}
		,{value:"4f", label:"用户登录IP限制管理"}
		,{value:"4g", label:"会员管理"}
		,{value:"4h", label:"交易报盘管理"}
		,{value:"4i", label:"行情报盘管理"}
		,{value:"4j", label:"交易员报单序号管理"}
		,{value:"4k", label:"交易所回报主题号管理"}
		,{value:"5a", label:"重置用户密码"}
		,{value:"5b", label:"录入设备序列"}
		,{value:"5c", label:"校验用户密码"}
		,{value:"5d", label:"强制登出"}
		,{value:"5e", label:"强制退出"}
		,{value:"5f", label:"激活用户"}
		,{value:"5g", label:"结算单确认"}
		,{value:"6a", label:"查询证券信息"}
		,{value:"6b", label:"查询行情"}
		,{value:"6c", label:"查询投资者"}
		,{value:"6d", label:"查询业务单元"}
		,{value:"6e", label:"查询柜员用户"}
		,{value:"6f", label:"查询用户投资者代理关系"}
		,{value:"6g", label:"查询经纪公司用户功能权限"}
		,{value:"6h", label:"查询交易编码"}
		,{value:"6i", label:"查询报单"}
		,{value:"6j", label:"查询报单操作"}
		,{value:"6k", label:"查询成交"}
		,{value:"6l", label:"查询持仓"}
		,{value:"6m", label:"查询库存"}
		,{value:"6n", label:"查询资金"}
		,{value:"6o", label:"查询投资者保证金率"}
		,{value:"6p", label:"查询投资者手续费率"}
		,{value:"6q", label:"查询投资者交易权限"}
		,{value:"6r", label:"查询报单资金明细"}
		,{value:"6s", label:"查询业务单元资金账户关联关系"}
		,{value:"6t", label:"查询投资者限仓额度"}
		,{value:"6u", label:"查询经纪公司限仓额度"}
		,{value:"6v", label:"查询投资者限额额度"}
		,{value:"6w", label:"查询交易通知"}
		,{value:"6x", label:"查询交割申报"}
		,{value:"6y", label:"查询交割申报操作"}
		,{value:"6z", label:"查询交割申报成交"}
		,{value:"7a", label:"查询中立仓申报"}
		,{value:"7b", label:"查询中立仓申报操作"}
		,{value:"7c", label:"查询中立仓申报成交"}
		,{value:"7d", label:"查询结算单"}
		,{value:"7e", label:"查询交割行情"}
		,{value:"7f", label:"查询资金转移流水"}
		,{value:"7g", label:"查询库存转移流水"}
		,{value:"7h", label:"查询持仓转移流水"}
		,{value:"7i", label:"查询经纪公司条件单限制"}
		,{value:"7j", label:"查询投资者条件单限制"}
		,{value:"7k", label:"查询条件单"}
		,{value:"7l", label:"查询条件单操作"}
		,{value:"7m", label:"查询交割品种信息"}
		,{value:"7n", label:"查询保证金率模板"}
		,{value:"7o", label:"查询手续费率模板"}
		,{value:"7p", label:"查询交易权限模板"}
		,{value:"7q", label:"查询限仓模板"}
		,{value:"7r", label:"查询限额模板"}
		,{value:"9a", label:"Dump证券信息"}
		,{value:"9b", label:"Dump行情"}
		,{value:"9c", label:"Dump投资者"}
		,{value:"9d", label:"Dump业务单元"}
		,{value:"9e", label:"Dump柜员用户"}
		,{value:"9f", label:"Dump用户投资者代理关系"}
		,{value:"9g", label:"Dump经纪公司用户功能权限"}
		,{value:"9h", label:"Dump交易编码"}
		,{value:"9i", label:"Dump报单"}
		,{value:"9j", label:"Dump报单操作"}
		,{value:"9k", label:"Dump成交"}
		,{value:"9l", label:"Dump持仓"}
		,{value:"9m", label:"Dump库存"}
		,{value:"9n", label:"Dump资金"}
		,{value:"9o", label:"Dump投资者保证金率"}
		,{value:"9p", label:"Dump投资者手续费率"}
		,{value:"9q", label:"Dump投资者交易权限"}
		,{value:"9r", label:"Dump报单资金明细"}
		,{value:"9s", label:"Dump业务单元资金账户关联关系"}
		,{value:"9t", label:"Dump投资者限仓额度"}
		,{value:"9u", label:"Dump经纪公司限仓额度"}
		,{value:"9v", label:"Dump投资者限额额度"}
		,{value:"9w", label:"Dump交易通知"}
		,{value:"9x", label:"Dump交割申报"}
		,{value:"9y", label:"Dump交割申报操作"}
		,{value:"9z", label:"Dump交割申报成交"}
		,{value:"aa", label:"Dump中立仓申报"}
		,{value:"ab", label:"Dump中立仓申报操作"}
		,{value:"ac", label:"Dump中立仓申报成交"}
		,{value:"ad", label:"Dump结算单"}
		,{value:"ae", label:"Dump交割行情"}
		,{value:"af", label:"Dump资金转移流水"}
		,{value:"ag", label:"Dump库存转移流水"}
		,{value:"ah", label:"Dump持仓转移流水"}
		,{value:"ai", label:"Dump经纪公司条件单限制"}
		,{value:"aj", label:"Dump投资者条件单限制"}
		,{value:"ak", label:"Dump条件单"}
		,{value:"al", label:"Dump条件单操作"}
		,{value:"am", label:"Dump交割品种信息"}
		,{value:"an", label:"Dump保证金率模板"}
		,{value:"ao", label:"Dump手续费率模板"}
		,{value:"ap", label:"Dump交易权限模板"}
		,{value:"aq", label:"Dump限仓模板"}
		,{value:"ar", label:"Dump限额模板"}
		,{value:"zz", label:"Dump所有数据"}
		];
		return options;
}

export function enum_CurrencyID(){
	var options = [
		{value:"1", label:"人民币"}
		,{value:"2", label:"港币"}
		,{value:"3", label:"美元"}
		];
		return options;
}

export function enum_WithBlank_CurrencyID(){
	var options = [
		{value: "999", label: "全部"}
		,{value:"1", label:"人民币"}
		,{value:"2", label:"港币"}
		,{value:"3", label:"美元"}
		];
		return options;
}

export function enum_BankID(){
	var options = [
		{value:"1", label:"中国建设银行"}
		,{value:"2", label:"中国农业银行"}
		,{value:"3", label:"中国工商银行"}
		,{value:"4", label:"中国银行"}
		,{value:"5", label:"中国招商银行"}
		,{value:"6", label:"中国交通银行"}
		,{value:"7", label:"浦东发展银行"}
		,{value:"8", label:"兴业银行"}
		,{value:"9", label:"中国光大银行"}
		,{value:"a", label:"广东发展银行"}
		];
		return options;
}

export function enum_WithBlank_BankID(){
	var options = [
		{value: "999", label: "全部"}
		,{value:"1", label:"中国建设银行"}
		,{value:"2", label:"中国农业银行"}
		,{value:"3", label:"中国工商银行"}
		,{value:"4", label:"中国银行"}
		,{value:"5", label:"中国招商银行"}
		,{value:"6", label:"中国交通银行"}
		,{value:"7", label:"浦东发展银行"}
		,{value:"8", label:"兴业银行"}
		,{value:"9", label:"中国光大银行"}
		,{value:"a", label:"广东发展银行"}
		];
		return options;
}

export function enum_ExchangeID(){
	var options = [
		{value:"0", label:"通用内部使用"}
		,{value:"1", label:"上海黄金交易所"}
		,{value:"2", label:"上海期货交易所"}
		];
		return options;
}

export function enum_WithBlank_ExchangeID(){
	var options = [
		{value: "999", label: "全部"}
		,{value:"0", label:"通用内部使用"}
		,{value:"1", label:"上海黄金交易所"}
		,{value:"2", label:"上海期货交易所"}
		];
		return options;
}

export function enum_HedgeFlag(){
	var options = [
		{value:"0", label:"投机"}
		,{value:"1", label:"套利"}
		,{value:"2", label:"套保"}
		];
		return options;
}

export function enum_WithBlank_HedgeFlag(){
	var options = [
		{value: "999", label: "全部"}
		,{value:"0", label:"投机"}
		,{value:"1", label:"套利"}
		,{value:"2", label:"套保"}
		];
		return options;
}

export function enum_MarketID(){
	var options = [
		{value:"0", label:"现货"}
		,{value:"1", label:"即期"}
		,{value:"2", label:"延期"}
		,{value:"3", label:"询价"}
		,{value:"4", label:"期货"}
		];
		return options;
}

export function enum_WithBlank_MarketID(){
	var options = [
		{value: "999", label: "全部"}
		,{value:"0", label:"现货"}
		,{value:"1", label:"即期"}
		,{value:"2", label:"延期"}
		,{value:"3", label:"询价"}
		,{value:"4", label:"期货"}
		];
		return options;
}

export function enum_TradeUnit(){
	var options = [
		{value:"0", label:"手"}
		,{value:"1", label:"张"}
		,{value:"2", label:"股"}
		,{value:"3", label:"份"}
		];
		return options;
}

export function enum_WithBlank_TradeUnit(){
	var options = [
		{value: "999", label: "全部"}
		,{value:"0", label:"手"}
		,{value:"1", label:"张"}
		,{value:"2", label:"股"}
		,{value:"3", label:"份"}
		];
		return options;
}

export function enum_DeliveryMode(){
	var options = [
		{value:"0", label:"实物交割"}
		,{value:"1", label:"保证金交割"}
		];
		return options;
}

export function enum_WithBlank_DeliveryMode(){
	var options = [
		{value: "999", label: "全部"}
		,{value:"0", label:"实物交割"}
		,{value:"1", label:"保证金交割"}
		];
		return options;
}

export function enum_BizClass(){
	var options = [
		{value:"0", label:"买入开仓"}
		,{value:"1", label:"买入平仓"}
		,{value:"2", label:"卖出开仓"}
		,{value:"3", label:"卖出平仓"}
		,{value:"4", label:"交割交货申报"}
		,{value:"5", label:"交割收货申报"}
		,{value:"6", label:"中立仓交货申报"}
		,{value:"7", label:"中立仓收货申报"}
		];
		return options;
}

export function enum_WithBlank_BizClass(){
	var options = [
		{value: "999", label: "全部"}
		,{value:"0", label:"买入开仓"}
		,{value:"1", label:"买入平仓"}
		,{value:"2", label:"卖出开仓"}
		,{value:"3", label:"卖出平仓"}
		,{value:"4", label:"交割交货申报"}
		,{value:"5", label:"交割收货申报"}
		,{value:"6", label:"中立仓交货申报"}
		,{value:"7", label:"中立仓收货申报"}
		];
		return options;
}

export function enum_CommissionType(){
	var options = [
		{value:"0", label:"毛"}
		,{value:"1", label:"净"}
		];
		return options;
}

export function enum_WithBlank_CommissionType(){
	var options = [
		{value: "999", label: "全部"}
		,{value:"0", label:"毛"}
		,{value:"1", label:"净"}
		];
		return options;
}

export function enum_RangeMode(){
	var options = [
		{value:"0", label:"普通模式"}
		,{value:"1", label:"模板模式"}
		];
		return options;
}

export function enum_WithBlank_RangeMode(){
	var options = [
		{value: "999", label: "全部"}
		,{value:"0", label:"普通模式"}
		,{value:"1", label:"模板模式"}
		];
		return options;
}

export function enum_PosiDirection(){
	var options = [
		{value:"0", label:"净"}
		,{value:"1", label:"多头"}
		,{value:"2", label:"空头"}
		];
		return options;
}

export function enum_WithBlank_PosiDirection(){
	var options = [
		{value: "999", label: "全部"}
		,{value:"0", label:"净"}
		,{value:"1", label:"多头"}
		,{value:"2", label:"空头"}
		];
		return options;
}

export function enum_DeferPayDirection(){
	var options = [
		{value:"0", label:""}
		,{value:"1", label:"多付空"}
		,{value:"2", label:"空付多"}
		,{value:"3", label:"平"}
		];
		return options;
}

export function enum_WithBlank_DeferPayDirection(){
	var options = [
		{value: "999", label: "全部"}
		,{value:"0", label:""}
		,{value:"1", label:"多付空"}
		,{value:"2", label:"空付多"}
		,{value:"3", label:"平"}
		];
		return options;
}

export function enum_ClientEncMode(){
	var options = [
		{value:"0", label:"明文"}
		,{value:"1", label:"软加密"}
		,{value:"2", label:"硬加密"}
		];
		return options;
}

export function enum_WithBlank_ClientEncMode(){
	var options = [
		{value: "999", label: "全部"}
		,{value:"0", label:"明文"}
		,{value:"1", label:"软加密"}
		,{value:"2", label:"硬加密"}
		];
		return options;
}

export function enum_ConnectStatus(){
	var options = [
		{value:"0", label:"未连接"}
		,{value:"1", label:"正在分配"}
		,{value:"2", label:"已连接"}
		];
		return options;
}

export function enum_WithBlank_ConnectStatus(){
	var options = [
		{value: "999", label: "全部"}
		,{value:"0", label:"未连接"}
		,{value:"1", label:"正在分配"}
		,{value:"2", label:"已连接"}
		];
		return options;
}

export function enum_WeightUnit(){
	var options = [
		{value:"0", label:"克"}
		,{value:"1", label:"千克"}
		,{value:"2", label:"盎司"}
		];
		return options;
}

export function enum_WithBlank_WeightUnit(){
	var options = [
		{value: "999", label: "全部"}
		,{value:"0", label:"克"}
		,{value:"1", label:"千克"}
		,{value:"2", label:"盎司"}
		];
		return options;
}

