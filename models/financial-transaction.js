var brequire    = require('base').brequire;
var mongoose    = brequire('mongoose');
var createSchema = brequire('./lib/createmodel').createSchema;
var bp                      = require('../lib/oc-balanced');
var User                    = brequire('./models/user');
var fi       = require('./funding-instrument');
var _ = require('underscore');
var Promise = brequire('promise');

var financialTransactionSchema = mongoose.Schema({
  status                        : { type: String, enum: ['prepare', 'succeeded', 'failed'], default: 'prepare'},
  user                          : { type: String, ref: 'User', required: true},
  transactionType               : { type: String,
                                     enum: ['oneTimeDebit', 'subscriptionDebit', 'credit', 'refund', 'chargeBack'],
                                     default: 'subscriptionDebit'},
  date                          : { type: Date, default: Date.now },
  amount                        : { type: Number, max: 1500000, min: -1500000},
  currency                      : { type: String, default: 'USD' },
  description                   : { type: String, default: 'normal subscription debit' },
});

// expose model and schema to our app.

module.exports = createSchema('FinancialTransaction', financialTransactionSchema);
