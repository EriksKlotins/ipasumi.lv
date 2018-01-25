
import MapController from './MapController'


export default {
  name : 'mapOverlay',
  config : {
   	bindings         : { item:'=','visible': '='},//, selected : '<', showDetails : '&onSelected' },
    templateUrl      : 'src/map/components/map/map.html',
    controller       : [ '$log','$sce','$scope', MapController ]
  }
};


