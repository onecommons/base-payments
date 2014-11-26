// app/models/transaction.js
var brequire    = require('base').brequire;
var mongoose    = brequire('mongoose');
var createSchema = brequire('./lib/createmodel').createSchema;

// define the schema for our item model
var fundingInstrumentSchema = mongoose.Schema({
  user             : { type: String, ref: 'User'},
  status           : { type: String, enum: ['unverified', 'verified', 'invalid'] },
  type             : { type: String, enum: ['cc', 'ach', 'paypal'], default: 'cc'},
  ccLastFour       : { type: String, trim: true, match: /^\d{4}/ },
  ccType           : { type: String, enum:
                       ["amex", "discover","mastercard","visa","diners-club","jcb", '']},
  ccNameOnCard     : String,
  ccToken          : { type: String, unique: true},
  ccExpirationDate : {type: String },
});

// expose model and schema to our app.

module.exports = createSchema('FundingInstrument', fundingInstrumentSchema);
