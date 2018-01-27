import PropertyDataService from 'src/property-list/services/PropertyDataService';
import FavouritesDataService from 'src/property-list/services/FavouritesDataService';
import PropertyList from 'src/property-list/components/list/PropertyList';

export default angular
  .module("property-list", ['ngMaterial'])
  .component(PropertyList.name,PropertyList.config)
  .service("PropertyDataService", PropertyDataService)
  .service("FavouritesDataService", FavouritesDataService);
