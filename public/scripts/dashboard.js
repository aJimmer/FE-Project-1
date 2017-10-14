$(document).ready(function() {
  dpd.users.me(function(user) {
    if (user) {
      $('h1').text("Welcome, " + user.username + " to Travel Voter!");
    } else {
      location.href = "/";
    }
  });

  $('#logout-btn').click(function() {
    dpd.users.logout(function(res, err) {
      location.href = "/";
    });
  });

  return false;
});
