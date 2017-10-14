(function (window) {
  'use strict';
  var LOGIN_SELECTOR = '[data-login-form="form"]';
  var App = window.App;
  var LoginHandler = App.LoginHandler;

  var loginHandler = new LoginHandler(LOGIN_SELECTOR);
  loginHandler.addSubmitHandler();
  /*
  var FORM_SELECTOR = '[data-username-password="form"]';
  var SERVER_URL = 'http://localhost:2403/users';
  var App = window.App;
  var User = App.User;
  var DataStore = App.DataStore;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var remoteDS = new RemoteDataStore(SERVER_URL);
  var user = new User('session-1', remoteDS);
  window.user = user;
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function (data) {
    user.createUser.call(user, data);
  });
  console.log(formHandler);
  */
})(window);
