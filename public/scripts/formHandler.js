/*(function (window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function (fn) {
    console.log('Setting submit handler for form');
    this.$formElement.on('submit', function (event) {
      event.preventDefault();

      var data = {};
      $(this).serializeArray().forEach(function (item) {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      console.log(data);
      fn(data);
      this.reset();
      this.elements[0].focus();
    });
  };

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
*/
/*
  This module is designed to handle file uploads from forms.
  Most of the code was provide by the demo application from the
  dpd-fileupload repository at https://github.com/NicolasRitouet/dpd-fileupload-demo
*/

(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  //Provide a form selector
  function FormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find elements with selector ' + selector);
    }
  }

  /*
    The input handler will listen for when a user chooses a file to upload.
    It will then set a 'file' field for the FormHandler to be used
    in the submit handler
  */
  FormHandler.prototype.addOnInputHandler = function() {
    var fileButton = $(this.$formElement).find("#fileinput");
    console.log($(fileButton));
    this.$formElement.find('#fileinput').on('change', function(event) {
      console.log(event.currentTarget.files[0]);
      this.file = event.currentTarget.files[0];
      console.log(this.file);
    }.bind(this));
  };

  /*
    I spent a long time getting this to work, and will point out the ONE
    spot where everything was going wrong and would have saved me a lot of time :)
    Anyway, this is the handler for the submit button
  */
  FormHandler.prototype.addSubmitHandler = function() {
    this.$formElement.on('submit', function(event) {
      event.preventDefault(); //Prevent a new page from loading

      var fd = new FormData(); //Needed to send as data for network request
      fd.set("uploadedFile", this.file); //Attach file data to fd

      var name = $('#name').val();
      var description = $('#description').val();
      var rating = $('#rating').val();

      dpd.places.post({
        imageurl: "upload/" + this.file.name,
        name: name,
        description: description,
        rating: rating
      }, function(result, err) {
        if (err) return console.log(err);
        console.log(result, result.id);
      });

      var xhr = new XMLHttpRequest(); //This object allows us to do HTTP requests

      /*
        THIS is where I wasted all my time because I did not notice the second parameter
        was misspelled. Notice that it is the same name given in the form action in the html
        and is necessarily the same name as the collection in Deployd
      */
      xhr.open('POST', '/fileupload');

      //This function gets called when the request completes and provides HTTP response status codes
      //and other error stuff
      xhr.onload = function() {
        var response = JSON.parse(this.responseText);
        console.log(response);

        if (this.status < 300) {
          console.log("File success?");
        } else {
          console.log("You failed");
        }
      };
      xhr.onerror = function(err) {
        alert("Error: ", err);
      }

      //Sends the HTTP request!
      xhr.send(fd);
    }.bind(this)); //Don't forget about binding
  };

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
