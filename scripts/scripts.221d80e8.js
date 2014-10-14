"use strict";angular.module("shaikApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","home","work","contact"]).config(["$routeProvider",function(a){a.when("/home",{templateUrl:"views/home.html",controller:"HomeCtrl"}).when("/work",{templateUrl:"views/work.html",controller:"WorkCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl"}).otherwise({redirectTo:"/home"})}]),angular.module("home",[]).controller("HomeCtrl",["$scope","$routeParams","$rootScope","$location",function(a,b,c,d){c.currentNav=d.path()}]),angular.module("work",[]).controller("WorkCtrl",["$scope","$routeParams","$rootScope","$location",function(a,b,c,d){c.currentNav=d.path(),a.works=[{img:"images/yeoman.png",alt:"yeoman.png"},{img:"http://www.zerodesigns.in/images/zerodesigns/graphic-design.jpg",alt:"yeoman.png"},{img:"http://nbpdblog.files.wordpress.com/2012/07/vectorstock_754291.jpg",alt:"yeoman.png"},{img:"http://www.marketingengineers.com/wp-content/uploads/2013/09/Graphic-Design.jpg",alt:"yeoman.png"},{img:"http://www.queenswebdesignandgraphics.com/img/designGraphics.jpg",alt:"yeoman.png"},{img:"http://www.99hdwallpaper.com/easter/wallpapers/easter-graphics.jpg",alt:"yeoman.png"}]}]),angular.module("contact",[]).controller("ContactCtrl",["$scope","$routeParams","$rootScope","$location",function(a,b,c,d){c.currentNav=d.path();a.submitForm = function(isValid){
		if (!isValid) return;
		var data = {name:"Shaik Nayeem",_replyto:"nayeem23@gmail.com",words:"hi"};
			$.ajax({
				url: "//forms.brace.io/shaiknayeem786@gmail.com", 
				method: "POST",
				data: data,
				dataType: "json"
			});
	}}]);
