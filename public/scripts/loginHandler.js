(function (window) {
  var App = window.App || {};
  var $ = window.jQuery;
  var dpd = window.dpd;

  function LoginHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$formElement = $(selector);
    console.log(this.$formElement);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  LoginHandler.prototype.addSubmitHandler = function (fn) {
    var div = this.$formElement;
    this.$formElement.on('submit', function (event) {
      event.preventDefault();

      var data = {};
      $(this).children('form').serializeArray().forEach(function(item) {
        data[item.name] = item.value;
      });
      dpd.users.login(data, function(result, error) {
        if (error) {
          alert("Alert");
        } else {
            $(this).children('form').hide("fast");
            $(this).find('#navbar-username').html('Hello ' + data.username + '!');
            $(this).children('#navbar-user-logout').removeClass('hidden');
            $(this).siblings('#navbar-add-button').removeClass('hidden');
        }
      }.bind(this));
    });
    this.$formElement.find('#navbar-logout').on('click', function () {
      console.log("You're logging out!");
        dpd.users.logout(function(result, error) {
          if (error) {
            console.log("Error logging out");
          } else {
            console.log(div);
            $(div).children('#navbar-user-logout').addClass('hidden');
            $(div).siblings('#navbar-add-button').addClass('hidden');
            $(div).children('form').show("fast");
            $(div).children('form')[0].reset();
          }
        });
    });
  };

  App.LoginHandler = LoginHandler;
  window.App = App;
})(window);
