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
  app.loadConfig.paths.splice(app.loadConfig.paths.length-1, 0, __dirname);
  var config = app.loadConfig('payments');
  require('./lib/oc-balanced').setConfig(config);
}
