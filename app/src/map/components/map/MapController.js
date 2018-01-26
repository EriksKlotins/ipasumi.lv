class MapController  {

	constructor( $log, $sce, $scope) 
	{
		this.$log = $log;
		this.sce = $sce;
		this.isLoading = true;
		


	}
	contentReady ()
	{
		console.log('iframe ready', this);
		this.isLoading = false;
	}
  	

	close() 
  	{
		this.visible = false;
		this.isLoading = true;
	};
  


}
// console.log('eaa');
export default MapController;


// handles iframe onload..
