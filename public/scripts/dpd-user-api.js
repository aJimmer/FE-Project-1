$(document).ready(function() {

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
  $('#signup-form').submit(function() {
    //Get the data from the form
    var name = $('#username').val();
    var comment = $('#password').val();
    console.log('username: ' + name, ' password: ' + comment);

    dpd.users.post({
      username: name,
      password: comment
    }, function(comment, error) {
      if (error) return showError(error);
    });
    this.reset();
    this.elements[0].focus();
    return false;
  });
  return false;
});
