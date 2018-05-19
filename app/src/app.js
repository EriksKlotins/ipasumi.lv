// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-routes';


import AppController from 'src/AppController';
import PropertyList from 'src/property-list/Property-list.js';
import MapOverlay from 'src/map/map.js';

export default angular.module( 'ipasumi-app', [ 'ngMaterial', 'ngRoute', PropertyList.name, MapOverlay.name] )
  .config(($mdIconProvider, $mdThemingProvider) => {
    // Register the user `avatar` icons
    // $mdIconProvider
    //   .defaultIconSet("./assets/svg/avatars.svg", 128)
    //   .icon("menu", "./assets/svg/menu.svg", 24)
    //   .icon("share", "./assets/svg/share.svg", 24)
    //   .icon("google_plus", "./assets/svg/google_plus.svg", 24)
    //   .icon("hangouts", "./assets/svg/hangouts.svg", 24)
    //   .icon("twitter", "./assets/svg/twitter.svg", 24)
    //   .icon("phone", "./assets/svg/phone.svg", 24);

    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('red');
  })

  // -- eksperiments ar routes
  .config(($routeProvider, $locationProvider) => {
    $routeProvider
      .when('/ss-GUI/project/app/Book/:bookId', {
        // templateUrl: 'book.html',
        controller: function(){
          console.log('Im controller');
        },
        // controllerAs: 'book'
      })
      
      .when('/Book/:bookId/ch/:chapterId', {
        templateUrl: 'chapter.html',
        controller: 'ChapterCtrl',
        controllerAs: 'chapter'
      });
      console.log('here', $routeProvider);

    $locationProvider.html5Mode(true);
})
// -- beidzas eksperiments ar routes
  .controller('AppController', AppController)
  .directive('iframeOnload', [function(){
  return {
      scope: {
          callBack: '&iframeOnload'
      },
      link: function(scope, element, attrs){
          element.on('load', function(){
              return scope.callBack();
          })
      }
  }}])
