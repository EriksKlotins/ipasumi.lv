function PropertyListController( FavouritesDataService, $log,  $scope)  
{
	var self = this;
	

	self.toggleFav = function (item)
	{
		// console.log('fav', item);
		item.fav = item.fav === true ? false : true;
		FavouritesDataService.toggle(item);
	};


	// console.log('propertyListcontroller');

}
// console.log('eaa');
export default PropertyListController;


// handles iframe onload..
