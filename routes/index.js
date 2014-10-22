var utils           = require('base/lib/utils');
var payments        = require('./payments');

module.exports = {

    setupPaymentPlan: { path: 'profile/setup-payment-plan',
                        get:  [ utils.isLoggedIn, utils.renderer('setup-payment-plan')],
                        post: [ utils.isLoggedIn, payments.setupPaymentPlanPost] },

    fundCampaign:     { path: 'fund-campaign/:id',
                        get:  [ utils.isLoggedIn, payments.fundCampaignGet],
                        post: [ utils.isLoggedIn, payments.fundCampaignPost] },

};

