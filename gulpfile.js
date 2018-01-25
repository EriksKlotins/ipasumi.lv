var gulp = 			require('gulp'),
    jade = 			require('gulp-jade'),
    rename = 		require("gulp-rename"),
    livereload = 	require('gulp-livereload'),
    notify = 		require("gulp-notify"),
    plumber = 		require('gulp-plumber'),
    less = 			require('gulp-less'),
    minify = 		require('gulp-minify'),
    uglify = 		require('gulp-uglify'),
    concat = 		require('gulp-concat'),
    through = 		require('through2'),
    htmltidy = 		require('gulp-htmltidy'),
    path = 			require('path'),
    minify = 		require('gulp-minify-css');


var config = 
	{
		/*
		  	Where all jade files are located?
		*/
		jadePath : 'app/assets/jade/**/*.jade',

		/*
			Where all less files are located?

		 */
		lessPath : 'resources/less/**/*.less',


		/*
			Where all the js files are? Files are loaded in the order, duplicates are ommited
			String with specific file or pattern (./resources/js/*.js)
			Array with files or locations
		 */
		jsPath : [
			'vendor/bootstrap-4.0.0/js/jquery-3.2.1.min.js',
			'vendor/bootstrap-4.0.0/js/popper-1.12.3.min.js',
			'vendor/bootstrap-4.0.0/js/bootstrap.min.js',
			'resources/js/**/*.js'

		],



		/*
			Path to the main less file
		 */
		lessRoot : './resources/less/style.less',
		

		/*
			Where to put blade templates?
		 */
		bladeDest : './app/',

		/*
			where to put the css file
		 */
		cssDest :  './',

		/*
			Where to put the js file
		 */
		jsDest : './',
		
		/*
			Name of the js file
		 */
		jsFileName : 'scripts.js',
		/*
			Template extension (.php.blade, .twig)
		 */
		templateExtension : '.html'  //'.twig' //,'.blade.php'
	};



	gulp.task('less-m',function()
	{
		gulp.src(
		[
			'app/assets/less/app.less',
			'app/src/**/components/**/less/*.less'])//  'Modules/**/Assets/jade/**/*.jade')
    	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	    .pipe(less())
	    .pipe(concat('app.css'))
	    .pipe(minify())
	    .pipe(gulp.dest('app/assets'))
	    .pipe(livereload());

	});

	gulp.task('jade-m', function() 
    {
    	gulp.src('app/src/**/components/**/jade/*.jade')//  'Modules/**/Assets/jade/**/*.jade')
    	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	    .pipe(jade()) 
    	.pipe(rename(function(p)
    	{
    		p.dirname = p.dirname +'/..';
    		p.extname = config.templateExtension;
    		return p;
    	}))
    	.pipe(gulp.dest(function(file)
    	{
    		return 'app/src/'; 
    	}))
    	// .pipe(htmltidy())
    	// .pipe(gulp.dest(    	
    	.pipe(livereload());

    });




    gulp.task('jade', function() 
    {
    	gulp.src(config.jadePath)
    	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	    .pipe(jade()) 
    	.pipe(rename(function(p){
    		
    		// var a = p.dirname.split('/');
    		// var b = [a[0]].concat(['views']);
    		// p.dirname = b.join('/');
    		// console.log(p);
    		p.extname = config.templateExtension;
    	}))
    	// .pipe(htmltidy())
    	.pipe(gulp.dest(function(file)
    	{
    		// var d = path.dirname(file.path).split('/');
    		// d.splice(-3,3);
    		// var dest = d.join('/');
    		var dest = config.bladeDest;
    		// console.log('dest=',dest);
    		return dest  ;
    	}))
    	// .pipe(notify("Jade done"))
    	.pipe(livereload());

    });



	// gulp.task('jade', function() {
	//     return gulp.src('resources/assets/jade/**/*.jade')
	//     	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	//         .pipe(jade()) 
	//         .pipe(rename(function (path) {
	// 			path.extname = ".blade.php"
	// 		}))
	//         // .pipe(htmltidy())
	//         .pipe(gulp.dest('resources/views')) // tell gulp our output folder
	//         .pipe(livereload());
	// }); //works fine

	// gulp.task('js', function()
	// {
	// 	gulp.src(config.jsPath
	// 	// [	
	// 	// 	// prerequisites
	// 	// 	// 'public/js/angular.min.js',
	// 	// 	// 'public/js/angular-animate.min.js',
	// 	// 	// 'public/js/angular-touch.min.js',
	// 	// 	// 'public/js/angular-route.min.js',
	// 	// 	// 'public/js/ui-bootstrap-tpls-1.3.3.min.js',

	// 	// 	// my stuff, init.js always comes first
	// 	// 	// gulp makes sure it is included once..
	// 	// 	'resources/assets/javascript/init.js',
	// 	// 	'resources/assets/javascript/**/*.js',
	// 	// 	'Modules/**/Assets/js/**/*.js'
	// 	// ]
	// 	) // path to your files
	    
	//     .pipe(concat(config.jsFileName))
	//     // .pipe(uglify())
	//     .pipe(gulp.dest(config.jsDest));
	//     console.log(config.jsPath);
	// });

	// gulp.task('less', function() 
	// {
	//    gulp.src(config.lessRoot)
	//  	  .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	//  	  .pipe(less())
	//       .pipe(gulp.dest(config.cssDest))
	//       .pipe(livereload());
	// }); 

	//special task for landing css
	// gulp.task('landing-less', function() 
	// {
	//    gulp.src('resources/assets/less/archer/main.less')
	//  	  .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	//  	  .pipe(less())
	//  	  .pipe(minify())
	//       .pipe(gulp.dest('public/css/archer'))
	//       .pipe(livereload());
	// }); 




gulp.task('watch', function () 
{
	livereload.listen(35456);

	gulp.watch(config.jadePath,['jade']);
	gulp.watch('app/src/**/components/**/jade/*.jade', ['jade-m']);
	gulp.watch([
		'app/assets/less/app.less',
		'app/src/**/components/**/less/*.less'

		], ['less-m']);
	// gulp.watch(config.lessPath,['less']);
	// gulp.watch(config.jsPath,['js']);


	// gulp.watch('Modules/**/Assets/jade/**/*.jade', ['jade-m']);
 //   	gulp.watch('resources/assets/jade/**/*.jade', ['jade']);

 //   	gulp.watch('Modules/**/Assets/less/**/*.less', ['less']);
 //   	gulp.watch('resources/assets/less/**/*.less', ['less', 'landing-less']);
   	
 //   	gulp.watch('resources/assets/javascript/**/*.js', ['js']);
 //   	gulp.watch('Modules/**/Assets/js/**/*.js', ['js']);

}); //	works