/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(FavouritesDataService,PropertyDataService, $mdSidenav,$scope, $http, $window) {
	var self = this;


	self.items = [];
	self.isLoading = false;
	self.positions = {
		'Rīga' : [56.946666, 24.104799], 
		// 'Valmiera': [57.535745, 25.424124],
		// 'Cēsis' : [57.310661, 25.268446], 
		// 'Jelgava' : [56.651682, 23.711986]
	};
	self.currentItem = {lat:null, lon:null};
	self.currentNavItem = 'visi';
	var savedParams = $window.localStorage.getItem('searchParams');
	var defaultParams = {

		price: 		[30000, 80000],
		distance: 	[0,200],
		position: 	self.positions['Rīga'],
		duration: 	[0, 60*60*1],
		categories: ['homes-summer-residences', '', ''],
		m2 : 		[80, 150],
		m2land : 	[0, 100000],
		page: 		[10, 0],
		token: 		[FavouritesDataService.getToken(), 0]
	};

	self.searchParams = (savedParams != null) 
			? angular.merge({},defaultParams, angular.fromJson(savedParams)) 
			: defaultParams;
	


	self.favFilter = function(state)
	{
		// console.log('favFilter', state);
		self.searchParams.token[1] = state;
		self.applyParams();
	};
	/*
		User wants to apply search criteria
	 */
	self.applyParams = function()
	{
		self.searchParams.page[1] = 0; // reset pagination
		self.searchParams.token[0] =  FavouritesDataService.getToken();
		// console.log(self.searchParams);
		$window.localStorage.setItem('searchParams', angular.toJson(self.searchParams));
		self.loadData(self.searchParams);
	};

	self.loadData = function(params)
	{

		self.isLoading = true;
		PropertyDataService.loadAll(params).then((response)=>{
			self.items = response.data;
			self.isLoading = false;
		});
	};

	self.test = function()
	{
		console.log('This is test method', arguments);
	};


	
	
	self.loadMore = function()
	{

		var params = self.searchParams;
		params.page[1] += params.page[0];
		// console.log('LoadMore()', params);
		self.isLoading = true;
		PropertyDataService.loadAll(params).then((response)=>{
			self.items = self.items.concat( response.data);
			self.isLoading = false;
		});
	};


	self.parameters = function()
	{
		$mdSidenav('parameters').toggle();
	};

	self.showMap = function(item)
	{
		// self.isLoading = true;
		self.currentItem = item;
		self.mapIsVisible = true;
	};

	self.loadData(self.searchParams);
}

export default [  'FavouritesDataService', 'PropertyDataService', '$mdSidenav','$scope', '$http', '$window', AppController ];
