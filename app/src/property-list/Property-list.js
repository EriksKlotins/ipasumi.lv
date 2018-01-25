// Load the custom app ES6 modules

import PropertyDataService from 'src/property-list/services/PropertyDataService';

import PropertyList from 'src/property-list/components/list/PropertyList';


// Define the Angular 'users' module

export default angular
  .module("property-list", ['ngMaterial'])

  .component(PropertyList.name,PropertyList.config)
  // .component(UserDetails.name, UserDetails.config)

  .service("PropertyDataService", PropertyDataService);
