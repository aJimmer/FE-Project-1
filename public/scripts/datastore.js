(function (window) {
  'use strict';
  var App = window.App || {};
  function DataStore() {
    this.data = {};
  }

  DataStore.prototype.signup = function (id, user) {
    this.data[id] = user; // user should be an object consisting of username and a password.
  };

  DataStore.prototype.login = function (username, password) {

  }

  // for testing purposes -----------------------

  DataStore.prototype.add = function (id, user) {
    this.data[id] = user;
  };
  DataStore.prototype.get = function (id) {
    return this.data[id];
  };
  DataStore.prototype.getAll = function () {
    return this.data;
  };

  DataStore.prototype.remove = function (id) {
    delete this.data[id];
  };
  //-----------------------------------------------

  App.DataStore = DataStore;
  window.App = App;
})(window);
