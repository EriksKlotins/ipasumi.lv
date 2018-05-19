
 function FavouritesDataService($q, $http, $window) {

	return {
		getToken : function()
		{
			var a = $window.localStorage.getItem('fav_token');
			return a == 'undefined' ? null : a;
		},
		setToken : function(token)
		{
			$window.localStorage.setItem('fav_token', token);
		},
		toggle: function(item) 
		{

			var url = ($window.location.host === 'localhost') ?
				'http://localhost/ss/favourite.php' : 
				'/favourite.php';
			// console.log(item);
			var params = {token : this.getToken(), id : item.id};

			return new Promise((resolve, reject)=>{

				$http.get([url, Object.keys(params).map((key) => {return [key, params[key]].join('=');}).join('&')].join('?'))
					.then((response)=>{
						// console.log(response);
						this.setToken(response.data.token);
						resolve(response);
					})

			});



			// return $http.get([
			// 	url,
			// 	Object.keys(params).map((key) => 
			// 	{
			// 		return [key, params[key]].join('=');
			// 	}).join('&')].join('?'));
			


		}
	};
}

export default ['$q', '$http', '$window',  FavouritesDataService];

