(function (window) {
  'use strict';
  var App = window.App || {};

  function User(userId, db) {
    this.userId = userId;
    this.db = db;
  }

  User.prototype.createUser = function(user) {
    console.log('Adding the user: ' + user.username);
    this.db.add(user.username, user);
  }

  User.prototype.loginUser = function () {
    // needs to be implemented
  }
/* uncomment to use as a template for future use if we need to print all the users

  Truck.prototype.printOrders = function () {
      var customerIdArray = Object.keys(this.db.getAll());
      console.log('Truck #' + this.truckId + ' has pending orders:');
      customerIdArray.forEach(function (id) {
        console.log(this.db.get(id));
      }.bind(this);
};
*/
  App.User = User;
  window.App = App;
})(window);
