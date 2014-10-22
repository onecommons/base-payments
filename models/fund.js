// app/models/fund.js

// load the things we need
var brequire    = require('base').brequire;
var mongoose    = brequire('mongoose');
var createSchema = brequire('./lib/createmodel').createSchema;

// Recipient is an organization, or ultimate depository of funds.
// HAS_MANY Campaigns.
var fundSchema = mongoose.Schema({

    name         : String,
    recipient    : String
    // account? eventually ?
});


// create the model for users and expose it to our app
module.exports              = createSchema('Fund', fundSchema);
module.exports.DEFAULT_ID   = '@Fund@0';
