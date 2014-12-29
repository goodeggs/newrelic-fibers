var patchFibers = require('cls-fibers');

module.exports = function (callback) {
  var err;
  var newrelic = require('newrelic');

  if (newrelic.agent &&
      newrelic.agent.config &&
      newrelic.agent.config.agent_enabled) {

      // Reach into New Relic
      var TRACER = '__NR_tracer';

      var ns = process.namespaces && process.namespaces[TRACER];
      if (ns) {
        patchFibers(ns);
      } else {
        err = new Error('newrelic is enabled but CLS namespace does not exist. Not patching Fibers.');
      }
  }

  if (callback) callback(err);
};
