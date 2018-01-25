// Load the custom app ES6 modules

// import PropertyDataService from 'src/property-list/services/PropertyDataService';

import MapOverlay from 'src/map/components/map/MapOverlay';


// Define the Angular 'users' module



// console.log('im here');
export default angular
  .module("map-overlay", ['ngMaterial'])

  .component(MapOverlay.name, MapOverlay.config);
  // .component(UserDetails.name, UserDetails.config)

  // .service("PropertyDataService", PropertyDataService);
