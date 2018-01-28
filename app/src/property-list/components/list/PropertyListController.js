function PropertyListController( FavouritesDataService, $log,  $scope)  
{
	var self = this;
	

	self.toggleFav = function (item)
	{
		// console.log('fav', item);
		item.fav = item.fav === true ? false : true;
		FavouritesDataService.toggle(item);
	};

	Number.prototype.between = function(a, b)
	{
		return (this >= a && this < b);
	};
	

	self.formatDistance = function(dist)
	{
		var dist = parseInt(dist);
		return Math.round(dist/100)/10+' km';
	};
	/**
	 * Formats time
	 * @param  {int} time time in seconds
	 * @return {string}     formatted time
	 */
	self.formatTime = function(time)
	{
		var time = parseInt(time);
		if (time > 3600) return Math.floor(time/3600)+'h '+ Math.round((time % 3600 )/60)+'m';
		if (time.between(60, 3600)) return Math.round(time/60)+' min';
		return time+' s';


	};

	// console.log('propertyListcontroller');

}
// console.log('eaa');
export default PropertyListController;


// handles iframe onload..
