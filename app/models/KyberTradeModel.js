/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
const _                 = require('lodash');
const async             = require('async');
const util              = require('util');
const KyberTradeEntity  = require('../entities/KyberTradeEntity');
const BaseModel         = require('sota-core').load('model/BaseModel');
const ErrorFactory      = require('sota-core').load('error/ErrorFactory');

module.exports = BaseModel.extends({
  classname: 'KyberTradeModel',

  $Entity: KyberTradeEntity,

  $tableName: 'kyber_trade',
  $dsConfig: {
    read: 'mysql-slave',
    write: 'mysql-master'
  },

});
