/*
configure app, update and expose schemas
add routes
*/
var path = require('path');
var base = require('base');

module.exports = function install(app) {
  var models = require('./models');
  app.updateNamedRoutes(require('./routes'));
  //XXX hack, need better way to load config
  var config = base.brequire('./lib/config')(path.resolve(app.rootDir), __dirname)('payments');
  require('./lib/oc-balanced').setConfig(config);
}
