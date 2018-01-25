<?php

require_once "functions.php";



$params = [
	// [min, max]
	'm2' => 		[0, 1000],
	'price' =>		[0, 1000000],
	'position' =>	[57, 23],
	'distance' => 	[0, 100],
	'page'	=> 		[0, 200]				
];






$query = implode(' ', [
	'select * from estate A where section = \'homes-summer-residences\'',
	sprintf('( 6371 * acos( cos( radians(%1$d) ) * cos( radians( A.lat ) )* cos( radians(A.lon) - radians(%2$d)) + sin(radians(%1$d))* sin( radians(A.lat)))) between %3$d and %4$d', 



		$params['position'][0],$params['position'][1],$params['distance'][0],$params['distance'][1] ),
	
	sprintf('and m2 between %d and %d', $params['m2'][0],$params['m2'][1])
	sprintf('and price between %d and %d ', $params['price'][0],$params['price'][1]),  
	sprintf('order by posted_at desc limit %d offset %d', $params['page'][0],$params['page'][1])  
]);

echo $query;




// $rows = $db->getData( );
