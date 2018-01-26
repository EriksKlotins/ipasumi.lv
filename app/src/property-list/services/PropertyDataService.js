
 function PropertyDataService($q, $http, $window, $sce) {


 	// var items = [{place:"vv"},{place:"Aa"}];


	return {
		loadAll: function(params) 
		{

			var url = ($window.location.host === 'localhost') ?
				'http://localhost/ss/api2.php' : 
				'/api2.php';
				
			
			return $http.get([
				url,
				Object.keys(params).map((key) => {
					return [key, params[key].join(',')].join('=');
				}).join('&')].join('?'));
			


		}
	};
}

export default ['$q', '$http', '$window', '$sce', PropertyDataService];

