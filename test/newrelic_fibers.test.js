var newrelicFibers = require('..');
var chai = require('chai');
var sinon = require('sinon');
var expect;
var Module = require('module');

var TRACER = '__NR_tracer';
chai.use(require('sinon-chai'));
expect = chai.expect;

describe('newrelic-fibers', function() {
  var newrelicMock;

  beforeEach(function() {
    process.namespaces = {};
    process.namespaces[TRACER] = {};

    sinon.stub(Module.prototype, 'require', function(moduleName) {
      return newrelicMock;
    });
  });

  afterEach(function() {
    Module.prototype.require.restore();
    delete process.namespaces;
  });

  describe('with newrelic enabled', function() {
    beforeEach(function() {
      newrelicMock = {
        agent: {
          config: {
            agent_enabled: true
          }
        }
      };
    });

    it('calls the callback', function(done) {
      newrelicFibers(function(err) {
        expect(err).not.to.be.ok;
        done();
      });
    });
  });

  describe('with newrelic disabled', function() {
    beforeEach(function() {
      newrelicMock = {
        agent: {
          config: {
            agent_enabled: false
          }
        }
      };
    });

    it('calls the callback', function(done) {
      newrelicFibers(function(err) {
        expect(err).not.to.be.ok;
        done();
      });
    });
  });

  describe('missing namespace', function() {
    beforeEach(function() {
      delete process.namespaces;

      newrelicMock = {
        agent: {
          config: {
            agent_enabled: true
          }
        }
      };
    });

    it('calls the callback with an error', function(done) {
      newrelicFibers(function(err) {
        expect(err).to.be.ok;
        done();
      });
    });
  });
});
