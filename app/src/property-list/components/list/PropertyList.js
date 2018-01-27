// Notice that we do not have a controller since this component does not
// have any specialized logic.



import PropertyListController from './PropertyListController';


export default {
  name : 'propertyList',
  config : {
   bindings         : { loadMore: '&loadMore',  items: '<', showMap : '&showMap'},//, selected : '<', showDetails : '&onSelected' },
   templateUrl      : 'src/property-list/components/list/PropertyList.html',
   controller       : [ 'FavouritesDataService', '$log','$scope', PropertyListController ]
  }
};
