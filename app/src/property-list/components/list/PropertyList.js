// Notice that we do not have a controller since this component does not
// have any specialized logic.

export default {
  name : 'propertyList',
  config : {
   bindings         : {  items: '<', showMap : '&showMap', 'test':'&test'},//, selected : '<', showDetails : '&onSelected' },
   templateUrl      : 'src/property-list/components/list/PropertyList.html'
  }
};
