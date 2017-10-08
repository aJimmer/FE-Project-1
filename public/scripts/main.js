/*(function (window) {
  'use strict';
  var FORM_SELECTOR = '[data-username-password="form"]';
  var SERVER_URL = 'http://localhost:2403';
  var App = window.App;
  var User = App.User;
  var DataStore = App.DataStore;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FromHandler;
  var remoteDS = new RemoteDataStore(SERVER_URL);
  var user = new User('session-1', remoteDS);
  window.user = user;
  var formHandler = new App.FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function (data) {
    user.createUser.call(user, data);
  });
  console.log(formHandler);
})(window);
*/
