var EasyResponse = function(response) {
  this.response = response;
};

EasyResponse.load = function(json) {
  return new EasyResponse(json);
};

EasyResponse.prototype = {
  isSuccess: function() {
    return this.response.success;
  },
  getCode: function() {
    return this.response.code;
  },
  getMsg: function() {
    return this.response.message;
  },
  getContent: function() {
    return this.response.content;
  },
  getData: function(index) {
    if (
      !this.response.content ||
      !this.response.content instanceof Array ||
      index >= this.response.content.length
    ) {
      return null;
    }
    var data = this.response.content[index];
    if (
      !(
        data instanceof Array ||
        typeof data == "string" ||
        typeof data == "number"
      )
    ) {
      data = data.data;
    }
    return data;
  },
  getDataColumns: function(index) {
    if (
      !this.response.content ||
      !this.response.content instanceof Array ||
      index >= this.response.content.length
    ) {
      return null;
    }
    var columns = null;
    var data = this.response.content[index];
    if (
      !(
        data instanceof Array ||
        typeof data == "string" ||
        typeof data == "number"
      )
    ) {
      columns = data.columns;
    }
    return columns;
  },
  getNamedData: function(name) {
    if (!this.response.content || !this.response.content instanceof Array) {
      return null;
    }
    var data = null;
    for (var raw_data of this.response.content) {
      if (
        !(
          raw_data instanceof Array ||
          typeof raw_data == "string" ||
          typeof raw_data == "number"
        )
      ) {
        if (raw_data.id == name) {
          data = raw_data.data;
          break;
        }
      }
    }
    return data;
  },
  getNamedDataColumns: function(name) {
    if (!this.response.content || !this.response.content instanceof Array) {
      return null;
    }
    var columns = null;
    for (var raw_data of this.response.content) {
      if (
        !(
          raw_data instanceof Array ||
          typeof raw_data == "string" ||
          typeof raw_data == "number"
        )
      ) {
        if (raw_data.id == name) {
          columns = raw_data.columns;
          break;
        }
      }
    }
    return columns;
  }
};

export default EasyResponse;
