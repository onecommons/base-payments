/*
configure app, update and expose schemas
add routes
*/
module.exports = function install(app) {
  var models = require('./models');
  app.updateNamedRoutes(require('./routes'));
}