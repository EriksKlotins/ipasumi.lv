class MapController  {


	
	

	constructor( $log, $sce,$scope) 
	{
		// this.$mdBottomSheet = $mdBottomSheet;
		this.$log = $log;
		this.sce = $sce;

		// this.mapUrl = $sce.trustAsResourceUrl('https://www.google.com/maps/embed/v1/place?key=AIzaSyDoT_apjPu1sWghNtiC01blVOyeUXATaHc&zoom=10&q='+this.item.lat+","+this.item.lon );
	}

 	

  	contentReady ()
  	{
  		console.log('ready');
  	}
  	

  	close() 
    {
  		this.visible = false;
  	};
  // 
  // 
  // /**
  //  * Constructor
  //  *
  //  * @param $mdBottomSheet
  //  * @param $log
  //  */
  // constructor($mdBottomSheet, $log) {
  //   this.$mdBottomSheet = $mdBottomSheet;
  //   this.$log = $log;
  // }

  // /**
  //  * Show the bottom sheet
  //  */
  // share() {
  //   var user = this.selected;
  //   var $mdBottomSheet = this.$mdBottomSheet;

  //   $mdBottomSheet.show({
  //     parent: angular.element(document. getElementById('content')),
  //     templateUrl: 'src/users/components/details/ContactSheet.html',
  //     controller: [ '$mdBottomSheet', UserSheetController],
  //     controllerAs: "$ctrl",
  //     bindToController : true
  //   }).then((clickedItem) => {
  //     this.$log.debug( clickedItem.name + ' clicked!');
  //   });

  //   /**
  //    * Bottom Sheet controller for the Avatar Actions
  //    */
  //   function UserSheetController( $mdBottomSheet ) {
  //     this.user = user;
  //     this.items = [
  //       { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
  //       { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
  //       { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
  //       { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
  //     ];
  //     this.performAction = (action) => {
  //       $mdBottomSheet.hide(action);
  //     };
  //   }
  // }

}
// console.log('eaa');
export default MapController;

