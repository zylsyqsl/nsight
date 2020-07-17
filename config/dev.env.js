"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");
const timestamp = new Date().getTime();
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"/apis/"',
  H5_VERSION: timestamp
});
