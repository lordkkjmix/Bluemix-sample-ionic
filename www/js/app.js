// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

var app =  {

    // Bluemix credentials
    route: "<APPLICATION_ROUTE>",
    guid: "<APPLICATION_GUID>",

    // API route for Items model
    apiRoute: "/api/Items",

    // Initialize BMSClient
    initialize: function() {
        this.bindEvents();
    },

    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to use the 'route' and 'guid'
    // variables, we must explicitly call 'app.route' and 'app.guid'
    onDeviceReady: function() {
        BMSClient.initialize(app.route, app.guid);
        app.apiRoute = app.route + app.apiRoute;
        app.getItems();
    },

    // Make a call to our API to get all Items.
    // Update the table with the items if the request succeeds
    getItems: function() {
        api.getItems(app.apiRoute, view.refreshTable, app.failure);
    },

    // Make a call to our API to add a new item
    // Refresh the table to include the new item if the request succeeds
    addItem: function() {
        api.addItem(app.apiRoute, app.getItems, app.failure);
    },

    // Make a call to our API to update a specific item when the checkbox is toggled
    // Refresh the table to include the updated item if the request succeeds
    updateItem: function(id) {
        api.updateItem(app.apiRoute, id, view.updateItem(id, false), app.failure);
    },

    // Enable input text and change edit to save button
    editItem: function(id) {
        view.changeToSave(id);
        view.updateItem(id, true);
    },

    // Make a call to our API to update a specific item after the text is edited and saved
    // Disable input text and change save to edit button
    saveItem: function(id) {
        view.changeToEdit(id);
        view.updateItem(id, false);
        api.updateItem(app.apiRoute, id, app.getItems, app.failure);
    },

    // Make a call to our API to delete a specific item
    deleteItem: function(id) {
        api.deleteItem(app.apiRoute, id, app.getItems, app.failure);
    },

    // Standard failure response
    failure: function(res) {
        alert("Failure: " + JSON.stringify(res));
    }
};

app.initialize();

