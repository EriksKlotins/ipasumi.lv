/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(UsersDataService, PropertyDataService, $mdSidenav,$scope, $http, $window) {
	var self = this;

	
	self.items = [];
	self.isLoading = false;
	var nullItem = {
		lat:null,
		lon:null
	};
	self.positions = {
		'Rīga' : [56.946666, 24.104799], 
		// 'Valmiera': [57.535745, 25.424124],
		// 'Cēsis' : [57.310661, 25.268446], 
		// 'Jelgava' : [56.651682, 23.711986]
	};


	var savedParams = $window.localStorage.getItem('searchParams');
	self.searchParams = (savedParams != null) ? angular.fromJson(savedParams) : 
	{

		price: 		[30000, 80000],
		distance: 	[0,200],
		position: 	self.positions['Rīga'],
		duration: 	[0, 60*60*1],
		page : 		[100, 0],
		categories : ['homes-summer-residences', '', ''],
		m2 : 		[80, 150]
	};

	/*
		User wants to apply search criteria
	 */
	self.applyParams = function()
	{
		$window.localStorage.setItem('searchParams', angular.toJson(self.searchParams));
		self.loadData(self.searchParams);
	}
	// {

	// 	console.log('applyParams');
	// 	self.items = self.allItems.filter(function(e)
	// 	{
	// 		return ( e.price >= self.searchParams.priceMin && e.price <= self.searchParams.priceMax  );
	// 	});
	// };

	


	self.currentItem = nullItem;


	self.loadData = function(params)
	{

		self.isLoading = true;
		console.log(params);
		var aa = PropertyDataService.loadAll(params).then((response)=>{

			console.log(response.data);	
			self.items = response.data;
			self.isLoading = false;
		})
		
		// .then(function(data)
		// //
		// {
		// 	self.allItems = data;
		// 	self.applyParams();
		// 	// self.allItems = data;
		// 	console.log(data);
		// });
		
	}

	self.test = function()
	{
		self.loadData();
	}
	self.parameters = function()
	{
		console.log('parameters');
		$mdSidenav('parameters').toggle();
	};

	self.showMap = function(item)
	{
		self.currentItem = item;
		self.mapIsVisible = true;

		// self.mapOverlay.lat = lat;
		// self.mapOverlay.title = 'title';
		// self.mapOverlay.lon = lon;
		// self.mapOverlay.visible = true;
		// console.log('ShowMap', item);
	};

//---------

	// UsersDataService
	//       .loadAllUsers()
	//       .then( function( users ) {
	//         self.users    = [].concat(users);
	//         self.selected = users[0];
	//       });

	// *********************************
	// Internal methods
	// *********************************

	self.save = function()
	{
		self.title = self.tmp.title;
	}
	function toggleConf() {
		$mdSidenav('conf').toggle();
	}



	self.loadData(self.searchParams);

}

export default [ 'UsersDataService','PropertyDataService', '$mdSidenav','$scope', '$http', '$window', AppController ];
