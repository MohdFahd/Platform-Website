var Angular_App = [];
function Do_Run_AngularJS_module(moduleName)
{
	'use strict';
	/*$( document ).ready(function() {


	});//$( document ).ready(function() {
	*/	
	if(is_undefined(moduleName))
			return null;	
	//var app = angular.module('WneetApp', []);
	
	var AngularApp = [];
	for(var $i = 0 ; $i < Angular_App.length ; $i++)
	{
		angular.module(Angular_App[$i], []);
		//if(!is_undefined(angular.module(moduleName, [])))
			AngularApp.push(Angular_App[$i]);
		 
		
	}//for($i = 0 ; $i < Angular_App.length ; $i++)
	
	var app = angular.module(moduleName, AngularApp);
	//var app = angular.module(moduleName, AngularApp);
	/*var app = angular.module(moduleName, []).run(['$http','$rootScope', function($http,$rootScope) {
      // $rootScope.FristRun = true;
	   //$rootScope.initialize = true;
        // Etc. Initialize here.
    }]);*/
//https://docs.angularjs.org/api/angular.Module
	//https://stackoverflow.com/questions/19276095/execute-code-at-startup-of-angular-application
	
	//https://docs.angularjs.org/guide/providers
	var today = new Date();
		//alert(today.getTime());
	var clientId = "clientId"+today.getTime();
	app.value('clientId', clientId);
	
	//var planetName = "planetName"+today.getTime();
	//app.constant('planetName', planetName);
	/*app.config(function($logProvider) {
		$logProvider.debugEnabled(false);
	});	
	app.config(['$compileProvider', function ($compileProvider) {
	 // $compileProvider.debugInfoEnabled(false);
	}]);*/
	
	//angular.reloadWithDebugInfo();
	//$compileProvider.commentDirectivesEnabled(false);
	//$compileProvider.cssClassDirectivesEnabled(false);
	
	//Angular_App[] = moduleName;
	//console.log('Angular_App');
	//console.log(Angular_App);
	if(Angular_App.indexOf(moduleName) < 0)
		Angular_App.push(moduleName);
	//console.log('push Angular_App');
	//console.log(Angular_App);
	
	
	
	app.provider('unicornLauncher', function UnicornLauncherProvider() {
	  var useTinfoilShielding = false;

	  this.useTinfoilShielding = function(value) {
		useTinfoilShielding = !!value;
	  };

	  this.$get = ["apiToken", function unicornLauncherFactory(apiToken) {

		// let's assume that the UnicornLauncher constructor was also changed to
		// accept and use the useTinfoilShielding argument
		return new UnicornLauncher(apiToken, useTinfoilShielding);
	  }];
	});

	app.config(["unicornLauncherProvider", function(unicornLauncherProvider) {
	  unicornLauncherProvider.useTinfoilShielding(true);
	}]);
	/*app.controller('DemoController', ['clientId', function DemoController(clientId) {
	  this.clientId = clientId;
	}]);*/
	
 

	
	
	
	
 

	//app.controller('Controller_Works', function($scope, $filter , $attrs , $http , $location , $timeout) {
	app.controller('Controller_Work',  ["clientId","$scope", "$filter" , "$attrs" , "$http" , "$location" , "$timeout" , "$rootScope",function(clientId,$scope, $filter , $attrs , $http , $location , $timeout , $rootScope) {
		/*
		 //$scope.myUrl = $location.absUrl();
		 //alert($scope.myUrl)
	 
		//var myButton = angular.element( document.querySelector( '.myButton' ) );
		//console.log( myButton.data( 'id' ) );

		//alert($attrs.geturl);
		//$scope.GetCountryURL = $location.absUrl();
		//$scope.GetCountryURL = '';
		*/
		
		//$scope.source_id =0;
		$scope.loading_img = false;
		$scope.FristRun = true;
		$scope.currentPage = 1;
		$scope.button_loading = false;
		//$scope.button_loading = true;
		$scope.TagItemContent = true;
		//$scope.hide_news = 1;
		//return null;
		/*//$scope.disableTagItemContent = {'visibility': 'hidden'}; 
		//$scope.disableTagItemContent = {'visibility': 'visible'}; 
		*/
		//JSON.stringify(data)
		
		 
		$scope.works = {};
		$scope.work_form = {};
		$scope.work_comment_form = {};
		$scope.actionDataComments = {};/*//{geturl: '', actionData: ''}*/
		$scope.actionDataWorks = {};/*//{geturl: '', actionData: ''}*/
		//var actionDataWorks = $attrs.actionDataWorks;
		//var actionDataWorks = $scope.actionDataWorks;
		var get_url =$attrs.geturl;
		$scope.get_url = '';
		$scope.CurrentActionDataWork = '';
		
		$scope.ButtonLoading = false;
		$scope.ActionWorksButtonLoading = '';
 
		$scope._get_Works = function(pageNumber) {
			 
			var $get_url = '';
			
			//console.log('_get_Works $scope.actionDataWorks');
			//console.log($scope.actionDataWorks);
			if(!$.isEmptyObject($scope.actionDataWorks))
			{
				//console.log('_get_Works !isEmptyObject $scope.actionDataWorks');
				//console.log($scope.actionDataWorks);
				var ActionData = $scope.actionDataWorks;
				//console.log('_get_Works !isEmptyObject ActionData');
				//console.log(ActionData);
			 
				if(!is_undefined(ActionData.geturl) && !is_undefined(ActionData.actionData))
				{
					$scope.get_url = ActionData.geturl;
					$scope.CurrentActionDataWork = ActionData.actionData;
					$get_url = $scope.get_url + "?" + $scope.CurrentActionDataWork;
					//console.log('_get_Works get_url CurrentActionDataWork');
					//console.log($scope.get_url + "?" + $scope.CurrentActionDataWork);
					
					//alert($scope.get_url);
					//console.log(get_url + $scope.CurrentActionDataWork);
					//alert($get_url);
					//alert($scope.CurrentActionDataWork);
				}//if( !is_undefined(ActionData.geturl) && !is_undefined(ActionData.actionData))
				
			}//if(!$.isEmptyObject($scope.actionDataWorks))	
		 
				if(is_undefined(pageNumber))	
				pageNumber = 1;
				$get_url = trim_space($get_url);
			 
				//console.log($get_url + "?Code="+$scope.CountryCode);
				if($get_url == '')
				return null;
				
				
				//alert($get_url);
	 
				//console.log('_get_Works $get_url');
				//console.log($get_url);
				$scope.FristRun = false;
				//return null;
				//$scope.button_loading = false;
				$scope.button_loading = true;
				$scope.works = {};
				//$scope.button_loading = false;
				$scope.button_loading = true;
				//return null;
				 $http({
					method : "POST",//POST GET
					url : $get_url 
				//data: { data_test: 'test' }
				//url : get_url + "wneet_world_api_countries"
				}).then(function mySuccess(response) {
					$scope.button_loading = false;
					//$scope.show_news = 1;
					//$scope.disableTagItemContent = {'visibility': 'visible'}; 
					
					//$scope.get_url_work = $get_url;
					$scope.CurrentActionDataWork = $get_url;
					
					//console.log('Success');
					//console.log(response);
					if(!$.isEmptyObject(response) && !is_undefined(response.data))
					{
						//if(is_undefined(pageNumber))
						var data = response.data;	
						//console.log('Success');
						//console.log(data);
						//console.log(data);
						if(is_undefined(data.status) || data.status == 1)
						{
							console.log('Success');
							console.log(data);
							return null;
						}//if(is_undefined(data.status) || data.status == "1")
							
						if(is_undefined(data.result) || $.isEmptyObject(data.result))
						{
							return null;
						}	
						var result = data.result;
						//console.log('_get_Works Success result');
						//console.log(response);
						//console.log(result);
					
						//if(is_undefined(result.list) || $.isEmptyObject(result.list))
						//	return null;
					 	
						if(!is_undefined(result.list) && !$.isEmptyObject(result.list))
						{
								
							if(is_undefined($scope.WorkArray))	
							$scope.WorkArray = []; 
							
							
							
							if($.isEmptyObject($scope.works))
							{
								$scope.works = result.list;
								/*
								angular.forEach($scope.works, function(value, key) {
									
									//console.log('$scope.WorkArray');
									//console.log($scope.WorkArray);
									if(!$scope.TestTestKeyInArray($scope.WorkArray , value.id))
									{
										$scope.WorkArray[value.id] = value; 
										//$scope.works.push(value);
										//console.log(' id');
										//console.log(value.id);
									}//if(!$scope.TestTestKeyInArray($scope.WorkArray , value.id))								
									
								});//angular.forEach($scope.works, function(value, key) {
									*/
							}
							else
							{
								//$scope.works.push(result.list);
								angular.forEach(result.list, function(value, key) {
									
									//$scope.TestTestKeyInArray(WorkArray , key) 
									
									if(!$scope.TestTestKeyInArray($scope.WorkArray , value.id))
									{
										//$scope.WorkArray[value.id] = value; 
										$scope.works.push(value);
										//console.log(' id');
										//console.log(value.id);
									}//if(!$scope.TestTestKeyInArray($scope.WorkArray , value.id))	
								});
							}
							
							//console.log('Success result $scope.works');
							//console.log($scope.works);
						 	if(!$.isEmptyObject($scope.works))
							{
								//console.log('_get_Works result $scope.works)');
								//console.log($scope.works);
							 
								$scope.ActionWorksButtonLoading = '';
								if(!is_undefined(result.ActionLoadMore) && trim_space(result.ActionLoadMore) != '')
								$scope.ActionWorksButtonLoading = trim_space(result.ActionLoadMore);

								$scope.SetWorkArray();
							}//if(!$.isEmptyObject($scope.works))	
					  
							//console.log(' works');
							//console.log($scope.works);
						}//if(!is_undefined(result.list) && !$.isEmptyObject(result.list))
						 
					 
						//var checkboxes = ['defaultCheckbox', 'secondaryCheckbox'];
						//angular.forEach(checkboxes, function(val){
						//	if ($scope.model[val]) {
						//		$scope.CustomCheckSelect(val);
						//	}
						//});
					}//if(!$.isEmptyObject(response) && !is_undefined(response.data))
				}, function myError(response) {
					$scope.button_loading = false;
					//console.log('Error');
					//console.log(response);
				});
		 

		}//$scope._get_Works = function(pageNumber) {
	 	//$scope.DataLoading = false; 	
		
		$scope.DataLoadin_loading_img = {}; 
		$scope.LoadActionData = function(Action,index) {//,indexName
			//Object
			//$scope.currentPage_News = result.current_page;
			//$scope.currentPage = result.current_page;
			
			//$scope.currentPage = 1;
			//$scope.currentPage_News = 1;
			//$scope.MaxPageNews = 1;
			
			//console.log("Action="+Action + " \n index=" +index + " \n indexName=" +indexName);
			//console.log("Action="+Action + " \n index=" +index );
			// || is_undefined(indexName)
			if(is_undefined(Action) || is_undefined(index) )	//|| $.isEmptyObject(Object)
				return null;
			
			var $get_url = trim_space(Action);	 
			//console.log($get_url + "?Code="+$scope.CountryCode);
			if($get_url == '')
			return null;
		
			//console.log('$scope.WorkArray');
			//console.log($scope.WorkArray);
			
			//console.log('$scope.works');
			//console.log($scope.works);
			/*if(!$scope.TestTestKeyInArray($scope.WorkArray , index))
			{
				//console.log('$scope.WorkArray[index]');
				//console.log($scope.WorkArray[index]);
				return null;
			} 
			*/
			
			//$scope.works = {};
			if(!$scope.TestTestKeyInArray($scope.works , index))
			{
				//console.log(' not TestTestKeyInArray');
				return null;
			}
			//console.log('$scope.works[index]');
			//console.log($scope.works[index]);
			//console.log('$scope.WorkArray[index]');
			//console.log($scope.WorkArray[index]);
			//return null;
			var Object = $scope.works[index];
			//return null;
			 
			//console.log('$get_url');	
			//console.log($get_url);	
			//console.log('Object');
			//console.log(Object);
			//return ;
			
			if(!$scope.TestTestKeyInArray($scope.DataLoadin_loading_img , index))
				$scope.DataLoadin_loading_img[index] = true;
			else if($scope.TestTestKeyInArray($scope.DataLoadin_loading_img , index))
				$scope.DataLoadin_loading_img[index] = true;
			
			// $scope.DataLoading = true;
			 $http({
				method : "POST",//POST GET
				url : $get_url 
				//data: { data_test: 'test' }
			//url : get_url + "wneet_world_api_countries"
			}).then(function mySuccess(response) {
				
				// $rootScope.dashboardData = JSON.parse(xhr.responseText);
				//console.log('LoadActionData Success');
				//console.log(response);
				//$scope.DataLoading = false;
				$scope.DataLoadin_loading_img[index] = false;
				if(!$.isEmptyObject(response) && !is_undefined(response.data))
				{
					var data = response.data;
					
					if(is_undefined(data.status) || data.status == 1)
					{
						console.log('Success');
						console.log(data);
						return null;
					}//if(is_undefined(data.status) || data.status == "1")
					if(is_undefined(data.result) || $.isEmptyObject(data.result))
					{
						return null;
					}	

					var result = data.result;
					//console.log('Success result');
					//console.log(response);
					//console.log(result);
					/*var result_old = result;
					if(!is_undefined(result.list) && !$.isEmptyObject(result.list))
					{
						result = result.list;
					}*/
					/*
					angular.forEach(result, function(value, key) {
						if(!is_undefined(Object[key]))
						{
							Object[key] = value;
							console.log(' key');
							console.log(Object[key]);
						}
					})//angular.forEach(Object, function(value, key) {
					*/
				 
					angular.forEach(result, function(value, key) {
						if(!is_undefined(Object[key]))
						{
							if(is_object(Object[key]))
							{
								var value2 = [];
								//if(Angular_App.indexOf(moduleName) < 0)
								 
								angular.forEach(Object[key], function(value3, key3) {
									value2.push(value3);
								})//angular.forEach(Object, function(value, key) {
								if(is_object(value))
								{
									angular.forEach(value, function(value3, key3) {
									value2.push(value3);
								})//angular.forEach(value, function(value, key) {
								}else
									value2.push(value);
								
								Object[key] = value2;	
							}else
							Object[key] = value;
							//console.log(' key');
							//console.log(Object[key]);
						}
						else{
							
							//Object[key] = value;
						}
					})//angular.forEach(Object, function(value, key) {
					
					
					/*if(!is_undefined(Object.count_current_result_shown)  && is_undefined(result.count_current_result_shown))
					{
						var count_current_result_shown = Set_parseInt(Object.count_current_result_shown) + 1;
						if(count_current_result_shown >= 0)
						Object.count_current_result_shown = count_current_result_shown;
					}*/
					//console.log('Object');
					//console.log(Object);
					$scope.works[index] = Object;
					
					$scope.SetWorkArray();
					//$scope.subjects = apiModifyTable($scope.subjects, response.id, response);						
				}//if(!$.isEmptyObject(response) && !is_undefined(response.data))
				//$scope.works[index]
			}, function myError(response) {
					//$scope.button_loading = false;
					console.log('LoadActionData Error');
					console.log(response);
				});				
		 
		};//$scope.LoadActionData = function(Action,index) {
		
		$scope.LoadMoreWorks = function() {
			
			var $get_url = trim_space($scope.ActionWorksButtonLoading);	 
			//console.log($get_url + "?Code="+$scope.CountryCode);
			$scope.ButtonLoading = false;
			if($get_url == '')
			{
				$scope.ActionWorksButtonLoading = '';
				return null;
			}//if($get_url == '')
			 
			$scope.ButtonLoading = true;  
		 
		 
			console.log('LoadMoreWorks $get_url');	
			console.log($get_url);	
			//console.log('Object');
			//console.log(Object);
			//return ;
			 $http({
				method : "POST",//POST GET
				url : $get_url 
				//data: { data_test: 'test' }
			//url : get_url + "wneet_world_api_countries"
			}).then(function mySuccess(response) {
				
				$scope.ButtonLoading = false;
				$scope.ActionWorksButtonLoading = '';
				// $rootScope.dashboardData = JSON.parse(xhr.responseText);
				//console.log('LoadMoreWorks Success');
				//console.log(response);
				if(!$.isEmptyObject(response) && !is_undefined(response.data))
				{
					var data = response.data;
					
					if(is_undefined(data.status) || data.status == 1)
					{
						console.log('Success');
						console.log(data);
						return null;
					}//if(is_undefined(data.status) || data.status == "1")
					if(is_undefined(data.result) || $.isEmptyObject(data.result))
					{
						return null;
					}	

					var result = data.result;
					//console.log('LoadMoreWorks Success result');
					//console.log(result);
					//console.log(result);
					/*var result_old = result;
					if(!is_undefined(result.list) && !$.isEmptyObject(result.list))
					{
						result = result.list;
					}*/
					/*
					angular.forEach(result, function(value, key) {
						if(!is_undefined(Object[key]))
						{
							Object[key] = value;
							console.log(' key');
							console.log(Object[key]);
						}
					})//angular.forEach(Object, function(value, key) {
					*/
					if(!is_undefined(result.list) && !$.isEmptyObject(result.list))
					{
					 
					 
					
						//console.log('Object');
						//console.log(Object);
						
						if($.isEmptyObject($scope.works))
						{
							$scope.works = result.list;
						 
						}
						else
						{
							
							//$scope.works.push(result.list);
							angular.forEach(result.list, function(value, key) {
								
								//$scope.TestTestKeyInArray(WorkArray , key) 
								if(!$scope.TestTestKeyInArray($scope.WorkArray , value.id))
								{
									//$scope.WorkArray[value.id] = value; 
									$scope.works.push(value);
									//console.log(' id');
									//console.log(value.id);
								}//if(!$scope.TestTestKeyInArray($scope.WorkArray , value.id))	
							});
						}
						if(!$.isEmptyObject($scope.works))
						{
							//console.log('_get_Works result $scope.works)');
							//console.log($scope.works);
					 
							//$scope.ActionWorksButtonLoading = '';
							if(!is_undefined(result.ActionLoadMore) && trim_space(result.ActionLoadMore) != '')
							$scope.ActionWorksButtonLoading = trim_space(result.ActionLoadMore);
							$scope.SetWorkArray();
						}//if(!$.isEmptyObject($scope.works))	
					}//if(!is_undefined(result.list) && !$.isEmptyObject(result.list)) 					
				}//if(!$.isEmptyObject(response) && !is_undefined(response.data))
				//$scope.works[index]
			}, function myError(response) {
					//$scope.button_loading = false;
					console.log('LoadMoreWorks Error');
					console.log(response);
				});	
				
			//if($scope.currentPage_News >= $scope.MaxPageNews)
			//	return null;
			//$scope.button_loading = true; 
			//return $scope.Get_News($scope.currentPage_News+1);	
		};//$scope.LoadMoreWorks = function() {
			
		$scope.SetWorkArray = function() {
			//$scope.SetWorkArray();
			//if(is_undefined(Object.id))
			//$scope.WorkArray[Object.id] = Object;
			var WorkArray = [];
			var works = [];
			//works.push(result); 
			//if(is_undefined(result.id))
			//WorkArray[result.id] = result; 
			var Object = $scope.works;
			
			angular.forEach(Object, function(value, key) {
				//if(!is_undefined(Object[key]))
				WorkArray[value.id] = value; 
				works.push(value); 
			})//angular.forEach(Object, function(value, key) {
			
			//$scope.WorkArray[value.id] = value; 
			//$scope.works.push(value);
			$scope.WorkArray = WorkArray;
			$scope.works = works; 
			
			//console.log('SetWorkArray $scope.works)');
			//console.log($scope.works);
			//console.log('SetWorkArray $scope.WorkArray)');
			//console.log($scope.WorkArray);
		};//$scope.SetWorkArray = function() {
		 
		$scope.work_comment_form = {};
		$scope.work_comment_loading_img = {};
		$scope.focus_comment = function(index) {
			
			if(is_undefined(index))	//|| $.isEmptyObject(Object)
				return null;
			
			if(is_undefined($scope.work_comment_form))
				$scope.work_comment_form = {};
			if(is_undefined($scope.work_comment_loading_img))
				$scope.work_comment_loading_img = {};
			
			//if(Angular_App.indexOf(moduleName) < 0)
			//Angular_App.push(moduleName);
			if(!$scope.TestTestKeyInArray($scope.work_comment_form , index))
				$scope.work_comment_form[index] = {};
			
			if(!$scope.TestTestKeyInArray($scope.work_comment_loading_img , index))
			{
				$scope.work_comment_loading_img[index] = false;
			} 
			 
			//$scope.work_comment_loading_img[index] = true;
			 
			/*
			if(!$scope.TestTestKeyInArray($scope.works , index))
			{
				//console.log(' not TestTestKeyInArray');
				return null;
			}
			//console.log('$scope.works[index]');
			 
			var Object = $scope.works[index];
			*/
		};//$scope.focus_comment = function() {
		$scope.Cancel_comment = function(index) {
			
			if(is_undefined(index))	//|| $.isEmptyObject(Object)
				return null;
			
			if(is_undefined($scope.work_comment_form))
				$scope.work_comment_form = {};
			if(is_undefined($scope.work_comment_loading_img))
				$scope.work_comment_loading_img = {};
			
			//if(Angular_App.indexOf(moduleName) < 0)
			//Angular_App.push(moduleName);
			if(!$scope.TestTestKeyInArray($scope.work_comment_form , index))
				$scope.work_comment_form[index] = {};
			$scope.work_comment_form[index] = {};
			if(!$scope.TestTestKeyInArray($scope.work_comment_loading_img , index))
			{
				$scope.work_comment_loading_img[index] = false;
			} 

		};//$scope.Cancel_comment = function() {
		
		$scope.style_like = {"color" : "#f5981d"};
		$scope.style_unlike = {"color" : "#888da8"};	
		 
		$scope.ItemTestInArray= function(Object,val)
		{
			//alert(Object.indexOf(val,0))
			//console.log(Object);
			//console.log(Object.indexOf(val,0));
		 
		   return TestInArray(Object,val);	
		}//$scope.ItemTestInArray= function(Object,val)
		$scope.TestTestKeyInArray = function(Object,key)
		{
			//console.log(Object);
		   return TestKeyInArray(Object,key);	
		}//$scope.TestTestKeyInArray= function(Object,key)
		
		$scope.isSectionSelected = function(arrayData, valueData) {
			return arrayData.indexOf(valueData) > -1;
		}
		
		$scope.initialize = function(ObjectActionData , Type)
		{
			if(is_undefined(ObjectActionData) || $.isEmptyObject(ObjectActionData))	
				return;
			if(is_undefined(Type))	
				Type = '';
			//alert(ObjectActionData);
			//if(!$.isEmptyObject(ObjectActionData) && !is_undefined(ObjectActionData.geturl) && !is_undefined(ObjectActionData.actionData))
			
			//if(Type == 'comments')
			//$scope.actionDataComments=ObjectActionData;
			//else if(Type == 'works')
			$scope.actionDataWorks = ObjectActionData;
			
			
			if($scope.FristRun)
				$scope._get_Works(1); 
			//$scope.FristRun = false;
		}//$scope.initialize = function(ObjectActionData, Type)
		



		angular.element(document).ready(function(){
			/*
			//$scope.actionDataComments = {};//{geturl: '', actionData: ''}
			//$scope.actionDataWorks = {};//{geturl: '', actionData: ''}
			*/
			//console.log('ready $scope.actionDataWorks');
			//console.log($scope.actionDataWorks);
		 
			if(!$.isEmptyObject($scope.actionDataWorks))
			{
				//console.log('ready !isEmptyObject $scope.actionDataWorks');
				//console.log($scope.actionDataWorks);
				var ActionData = $scope.actionDataWorks;
				//console.log('ready !isEmptyObject ActionData');
				//console.log(ActionData);
			 
				if(!is_undefined(ActionData.geturl) && !is_undefined(ActionData.actionData))
				{
					$scope.get_url = ActionData.geturl;
					$scope.CurrentActionDataWork = ActionData.actionData;
					
					//console.log('get_url CurrentActionDataWork');
					//console.log($scope.get_url + "?" + $scope.CurrentActionDataWork);
					
					//alert($scope.get_url);
					//console.log(get_url + $scope.CurrentActionDataWork);
					//alert(get_url);
					//alert($scope.CurrentActionDataWork);
					if($scope.FristRun)
					$scope._get_Works(1); 
				}//if( !is_undefined(ActionData.geturl) && !is_undefined(ActionData.actionData))
				
			}//if(!$.isEmptyObject($scope.actionDataWorks))			
			
		   //alert('sssssssssss');
		    $('[Controller_html_content]').css({ visibility: "visible" });
		  /* //$('.one-item-show').show();	
		  $('.one-item-show').css({ visibility: "visible" });
		  //visibility: visible;  visibility: hidden;
		   $scope.$on('$viewContentLoaded', function () 
			{
				// $scope.loading.visible = false;
			});*/
			 
			 
			//$scope._get_Works(1); 
	   });//angular.element(document).ready(function(){
		
	 
	}]);//app.controller('Controller_Work', function($scope, $filter , $attrs , $http , $location , $timeout) {


 
		
		
	/*
		 var registerScope = null;
	  this.$onInit = function () {
		//register rootScope event
		console.log("onInit");
		registerScope = $rootScope.$on('someEvent', function(event) {
			console.log("registerScope fired");
		});
	  }

	  this.$onDestroy = function () {
		//unregister rootScope event by calling the return function
		console.log("onDestroy");
		registerScope();
	  }
	  */
	//$scope._get_Posts(1); 
	
		
/*		
		
		var testController = function ($scope, $timeout) {
    console.log('test');
    $timeout(function(){
        console.log($scope.testInput);
    },1000);
}

var testController = function ($scope) {
    console.log('test');
    $scope.$watch("testInput", function(){
        console.log($scope.testInput);
    });
}
*/


	return app.run();
}//function Do_Run_AngularJS_module()	
	
	
if(typeof loadScripts_angular == "undefined" || typeof loadScripts_angular !='function')
{
	function loadScripts_angular(scripts) {
		var deferred = jQuery.Deferred();
		function loadScript(i) {
			if (i < scripts.length) {
				jQuery.ajax({
					url: scripts[i],
					dataType: "script",
					cache: true,
					success: function() {
						//console.log(scripts[i]);
						loadScript(i + 1);
					}
				});
			} else {
				deferred.resolve();
			}
		}
		loadScript(0);
		return deferred;
	} //function loadScripts_angular(scripts) 
}//if(typeof loadScripts_angular == "undefined" || typeof loadScripts_angular !='function')
function Do_Run_Wneet_AngularJS()
{
	/*app.run(['$http','$window', 'myService', function($http , $window, myService) {
  myService.restart();
  $window.alert('Started!');
}]);*/

//var scope = angular.element('body').scope();             
//scope.$apply(function () {scope.YourAngularJSFunction()}); 

window.onload = function () {
	//https://stackoverflow.com/questions/23648458/call-angularjs-function-using-jquery-javascript
	
	//https://www.itsolutionstuff.com/post/how-to-call-angularjs-controller-function-in-jqueryexample.html
    //angular.element(document.getElementById('YourElementId')).scope().myfunction('test');
	/*
	angular.element(domElement).scope() to get the current scope for the element

angular.element(domElement).injector() to get the current app injector

angular.element(domElement).controller() to get a hold of the ng-controller instanc
	*/
}
//$rootScope.initialize = $scope.initialize;
/*app.run(['$http','$window','$rootScope', function($http , $window,$rootScope) {
 // myService.restart();
  //$window.alert('Started!');
  $rootScope.initialize;
}]);*/
	/*app.run(['$http', 'CSRF_TOKEN', function($http, CSRF_TOKEN) {
    //$http.defaults.headers.common['X-Csrf-Token'] = CSRF_TOKEN;
}]);*/

 
/*<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>*/
 
 



	//$( document ).ready(function() {
	$( document ).ready(function() {	
	//app.run();
	var angular_lib_url = "https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js";
	if($("[angular_lib_url]").length == 1)
	{
		var lib_url = trim_space($("[angular_lib_url]").attr("angular_lib_url"));
		if(!is_empty(lib_url))
		{
			angular_lib_url =  lib_url;
		}
		//$("[angular_lib_url]").attr("ng-app",moduleName);
		//$("[ng-app=WneetApp]").attr("ng-app",moduleName);
		//alert($("[angular_lib_url]").length);
	}//if($("[angular_lib_url]").length == 1)
 
	//ng-controller="Controller_posts"
	// service.currentItem.started = new Date();
		
		//alert($("[ng-controller=Controller_posts]").length);
		var today = new Date();
		//alert(today.getTime());
	 
		//var today = new Date();
	////var Next_Date = new Date(today.getTime() + (24 * 60 * 60 * 1000));
	//var Next_Date = new Date(today.getTime() + max_next_date );
    //var next_year = Next_Date.getYear();
		 
		//ng-app="WneetApp"
		//alert($("[ng-app=WneetApp]").length);
		//alert($("[ng-controller]").length);
		if($("[ng-app=WneetApp]").length > 0 && $("[ng-controller]").length)
		{
			//alert(angular_lib_url);
				 //alert('Do_Run_AngularJS_module');
			//return;
			//alert(angular_lib_url);
			if (typeof angular == 'undefined' || typeof angular != 'object') {
				//console.log('is undefined or is not object angular');
				alert('Do_Run_AngularJS_module');
				var d1 = loadScripts_angular([
					//angular_lib_url,
					"//localhost/wneet_work/platform-web/10-2-2020/js/angular.min.js",
					//"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js",
					//"https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.js"
				   
				]).done(function() {
					
					//alert(angular_lib_url);
				 //alert('Do_Run_AngularJS_module');
					//return;
					//jQuery("#datepicker1").datepicker(jQuery.datepicker.regional.fr);
					if(typeof angular != "undefined" && typeof angular =='object')
					{
						 
						//var moduleName = "WneetApp";
						var moduleName = "WneetApp"+today.getTime();
						$("[ng-app=WneetApp]").attr("ng-app",moduleName);
						//alert($("[ng-app="+moduleName+"]").length);
						if(typeof Do_Run_AngularJS_module != "undefined" && typeof Do_Run_AngularJS_module =='function')
						{
							//alert(moduleName);
							//if(!scope_FristRun)
							Do_Run_AngularJS_module(moduleName);
							//app.run();
						}
					}//if(typeof angular != "undefined" && typeof angular =='object') 
				}); //.done(function() {
			} //if(typeof angular == 'undefined' || typeof angular != 'object')
			
			else if(typeof angular != "undefined" && typeof angular =='object')
			{
				//function Do_Run_AngularJS_module(moduleName)
				var moduleName = "WneetApp"+today.getTime();
				$("[ng-app=WneetApp]").attr("ng-app",moduleName);
				//alert($("[ng-app=WneetApp]").length);
				//alert(moduleName);
				//var moduleName = "WneetApp";
				//alert($("[ng-app="+moduleName+"]").length);
				//var injector = angular.injector(['ng', 'myModule'])
				if(typeof Do_Run_AngularJS_module != "undefined" && typeof Do_Run_AngularJS_module =='function')
				{
					//alert(moduleName);
					//if(!scope_FristRun)
						//app.routing.module.ts
					
					Do_Run_AngularJS_module(moduleName);
					//app.run();
				}
			}//if(typeof angular != "undefined" && typeof angular =='object')
		}//if($("[ng-app=WneetApp]").length > 0 && $("[ng-controller]").length)
		//WneetApp
	});//$( document ).ready(function() {
	 
}//function Do_Run_Wneet_AngularJS()	

function Clear_Array(array)
{
	return array.splice(0,array.length);
}//function Clear_Array(array)


//https://code.angularjs.org/1.2.26/docs/api/ng/function/angular.isObject
function TestInArray(Object,val)
{
	//$scope.isSectionSelected = function(arrayData, valueData) {
     //   return arrayData.indexOf(valueData) > -1;
  //  }
	if(!angular.isArray(Object) && !angular.isObject(Object))
		return false;
	
	if(angular.isArray(Object) && Object.indexOf(val) < 0)
		return false;
	else if(angular.isArray(Object))
		return true;
	
	if(angular.isObject(Object))
	{
		var $Bool = false;
		if(!$.isEmptyObject(Object)) 
		{
			angular.forEach(Object, function (item,key) {
				if(item == val)	
				$Bool = true;		
			});
			return $Bool;
		}//if(!$.isEmptyObject(Object))
		
	}//if(angular.isObject(Object))
	return false;	
}//function TestInArray(Object,val)
function TestKeyInArray(arrayData, keyData) 
{
	if(!is_undefined(arrayData))
	{
		if(!$.isEmptyObject(arrayData)) 
		{
			if(!is_undefined(arrayData[keyData]))
				return true;
		}//if (!$.isEmptyObject(arrayData)) 
	}//if(!is_undefined(arrayData))
	return false;
	
	//angular.forEach($scope.subjects, function(value, key) {
	//    $scope.subjects[key].teacherId = JSON.parse($scope.subjects[key].teacherId);
   // });
}//function TestKeyInArray(arrayData, keyData) 
		

function apiModifyTable(originalData,id,response){
    angular.forEach(originalData, function (item,key) {
        if(item.id == id){
            originalData[key] = response;
        }
    });
    return originalData;
}

function appendTransform(defaults, transform) {

// We can't guarantee that the default transformation is an array
defaults = angular.isArray(defaults) ? defaults : [defaults];

// Append the new transformation to the defaults
return defaults.concat(transform);
}

//Paginate
function SetCurrentPage($scope,Page)
{ 
	
	if(is_undefined($scope))
		return;
	$scope.FSetCurrentPage = 1;
	if(!is_undefined($scope) && is_undefined($scope.currentPage))
	{
		//console.log('undefined $scope.currentPage');
		$scope.currentPage = 1;
		//console.log($scope);
	}
	if(is_undefined(Page) || !is_number(Page))
		return;
	
	 
	$scope.currentPage = Page;
	//$scope,Page 
}//function SetCurrentPage($scope,Page)


 
function RunGlobalFunctionEvent($scope)
{//Public //Global
	/*
	//if(typeof RunGlobalFunctionEvent != "undefined" && typeof RunGlobalFunctionEvent == 'function')
	if(!is_undefined(RunGlobalFunctionEvent) && is_function(RunGlobalFunctionEvent))
		RunGlobalFunctionEvent();	
	*/
	//alert('RunGlobalFunctionEvent');
	//f(typeof ResetInputFile != "undefined" || typeof ResetInputFile == 'function')
	if(!is_undefined(ResetInputFile) && is_function(ResetInputFile))	
	{
		if(!is_undefined($scope))
			ResetInputFile($scope);
		else
			ResetInputFile();
	}//if(!is_undefined(ResetInputFile) && is_function(ResetInputFile))
}//function RunGlobalFunctionEvent($scope)		
function ResetRunGlobalFunctionEvent($scope)
{
	//if(typeof ResetRunGlobalFunctionEvent != "undefined" && typeof ResetRunGlobalFunctionEvent == 'function')
	/*
	if(!is_undefined(ResetRunGlobalFunctionEvent) && is_function(ResetRunGlobalFunctionEvent))
			ResetRunGlobalFunctionEvent($scope);	
	*/
	//alert('ResetRunGlobalFunctionEvent');
	//f(typeof ResetInputFile != "undefined" || typeof ResetInputFile == 'function')
	if(!is_undefined(ResetInputFile) && is_function(ResetInputFile))	
	{
		if(!is_undefined($scope))
			ResetInputFile($scope);
		else
			ResetInputFile();
	}//if(!is_undefined(ResetInputFile) && is_function(ResetInputFile))
}//function ResetRunGlobalFunctionEvent($scope)



if(typeof Do_Run_AngularJS_module != "undefined" && typeof Do_Run_AngularJS_module =='function')
{
	var moduleName = "WneetApp";
	Do_Run_AngularJS_module(moduleName);
}

if(typeof Do_Run_Wneet_AngularJS != "undefined" && typeof Do_Run_Wneet_AngularJS =='function')
{
	//Do_Run_Wneet_AngularJS();
}
