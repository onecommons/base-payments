var base = require('base');
var brequire = base.brequire;
var _ = require('underscore');

module.exports = exports = base.extendModels(
  require('./financial-transaction'),
  require('./funding-instrument'),
  require('./payment'),
  require('./subscription'),
  require('./campaign'),
  require('./fund'))


var userSchema = exports.schemas.User;
userSchema.add({ 
    activeFI          : {type: String, ref: 'FundingInstrument'},

    paymentPlan           : {
                          frequency  : { type: String, enum: ['once','monthly','quarterly','yearly']},
                          amount     : { type: Number, max: 1500000, min: 100},
                          billingDate : { type: Number, max: 30, min: 1}
                         },
});

userSchema.updateAccessControlMap({
  'write:paymentPlan':
      {'': 'admin',
       'id': 'user'
      }
});
