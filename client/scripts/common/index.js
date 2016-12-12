'use strict';
var angular = require('angular');
require('angular-ui-router');
require('angular-ui-bootstrap');

var modulename = 'common';

module.exports = function(namespace) {

    var fullname = namespace + '.' + modulename;

    var app = angular.module(fullname, ['ui.router', 'ui.bootstrap']);
    // inject:folders start
    require('./controllers')(app);
    // inject:folders end
    app.namespace = app.namespace || {};

    var configRoutesDeps = ['$stateProvider', '$urlRouterProvider'];
    var configRoutes = function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider.state('home', {
            url: '/home',
            template: require('./views/home.html'),
            controller: fullname + '.home as vm'
        }).state('bis', {
            url: '/bis',
            template: require('./views/bis.html'),
            controller: fullname + '.bis as vm'
        }).state('tris', {
            url: '/tris',
            template: require('./views/tris.html'),
            controller: fullname + '.tris as vm'
        });
    };
    configRoutes.$inject = configRoutesDeps;
    app.config(configRoutes);

    return app;
};
