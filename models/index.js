var base = require('base');
var brequire = base.brequire;
var _ = require('underscore');

module.exports = exports = base.extendModels(
  require('./financial-transaction'),
  require('./funding-instrument'),
  require('./subscription'),
  require('./campaign'),
  require('./fund'))


var userSchema = exports.schemas.User;
userSchema.add({ 
    activeFI          : {type: String, ref: 'FundingInstrument'},

    paymentPlan           : {
                          frequency  : { type: String, enum: ['once','monthly','quarterly','yearly']},
                          lastCharge : { type: String, ref: 'FinancialTransaction'},
                          fi         : { type: String, ref: 'FundingInstrument'},
                          amount     : { type: Number, max: 1500000, min: 100}
                         },
});

userSchema.updateAccessControlMap({
  'write:paymentPlan':
      {'': 'admin',
       'id': 'user'
      }
});
