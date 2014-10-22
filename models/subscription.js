// app/models/subscription.js
// load the things we need
var brequire = require((process.env.BASESRC ? '../' + process.env.BASESRC : 'base')).brequire;
var mongoose = brequire('mongoose');
var createSchema = brequire('./lib/createmodel').createSchema;

// define the schema for our user model
// LINKS User > –- < Campaign
var subscriptionSchema = mongoose.Schema({

    frequency  : { type: String, enum: ['once','monthly','quarterly','yearly'], default: 'once'},
    lastCharge : { type: String, ref: 'FinancialTransaction'},
    amount     : { type: Number, max: 1500000, min: 100},
    user       : { type: String, ref: 'User'},
    campaign   : { type: String, ref: 'Campaign'}
});

// create the model for users and expose it to our app
module.exports = createSchema('Subscription', subscriptionSchema);
