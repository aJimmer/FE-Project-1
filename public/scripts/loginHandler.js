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
    this.$formElement.on('submit', function (event) {
      event.preventDefault();

      var data = {};
      console.log(this);
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      console.log(data);
      dpd.users.login(data, function(result, error) {
        if (error) {
          alert("Alert");
        } else {
            $(this).hide("slow");
            $(this).parent().append('<p class="navbar-text navbar-right">Hello ' + data.username + '</p>');
            $(this).parent().append('<button type="button" name="addnew" value="addnew" class="btn btn-default navbar-btn navbar-left">Add new</button>');
        }
      }.bind(this));
    })
  };

  App.LoginHandler = LoginHandler;
  window.App = App;
})(window);
