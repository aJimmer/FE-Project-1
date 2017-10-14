
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var DETAIL_DESCRIPTION_SELECTOR = '[data-image-role="description"]';

function setDetails(imageUrl, titleText, descText) {
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;

  var detailDescripton = document.querySelector(DETAIL_DESCRIPTION_SELECTOR);
  detailDescripton.textContent = descText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function descFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-desc');
}


function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail), descFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  'use strict';
  // methods that return lists of elems do not return arrays but nodelists
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  // therefore need to "convert" it to an array
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();  //get the array of thumbnails
  // iterate over the array, adding click handler to each elem
  thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();


(function (window) {
  'use strict';
  var LOGIN_SELECTOR = '[data-login-div="div"]';
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
