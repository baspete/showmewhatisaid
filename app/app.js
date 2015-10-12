import angular from 'angular';
import 'angular-animate';
import 'angular-touch';
import 'angular-sanitize';
import 'angular-ui-router';
import 'angular-bootstrap';

import MainController from './scripts/main.controller';
import DetailController from './scripts/detail.controller';
import NavbarDirective from './components/navbar/navbar.directive';

angular.module('showmewhatisaid', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap'])
  .controller('MainController', MainController)
  .controller('DetailController', DetailController)
  .directive('navbar', () => new NavbarDirective())
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state('detail', {
        url: '/projects/:id',
        templateUrl: 'views/detail.html',
        controller: 'DetailController',
        controllerAs: 'vm'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html'
      });

      $urlRouterProvider.otherwise('/');
    });
