$(document).ready(function() {

// error message
  function showError(error) {
    var message = "An error occurred";
    if (error.message) {
      message = error.message;
    } else if (error.errors) {
      var errors = error.errors;
      message = "";
      Object.keys(errors).forEach(function(k) {
        message += k + ": " + errors[k] + "\n";
      });
    }

    alert(message);
  }

  // checks for a logged in user

  dpd.users.me(function(user) {
    if (user) {
      location.href = "/welcome.html";
    }
  });

  // handles the login form when a username and password are given as parameters

  $('#login-form').submit(function() {
    var username = $('#username').val();
    var password = $('#password').val();
    console.log('here');
    dpd.users.login({username: username, password: password}, function(session, error) {
      if (error) {
        alert(error.message);
      } else {
        location.href = "/welcome.html";
      }
    });

    return false;
  });

  // handles the registration for when a user enters and confirms a username and password

  $('#register-form').submit(function() {
    var username = $('#username').val();
    var password = $('#password').val();
    var confirmPassword = $('#confirm-password').val();

    if (!username) {
      alert("Username is required");
    } else if (!password) {
      alert("Password is required");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      dpd.users.post({username: username, password: password}, function(user, error) {
        if (error) {
          alert(JSON.stringify(error));
        } else {
          location.href = "/index.html";
        }
      });
    }

    return false;
  });

  return false;
});
