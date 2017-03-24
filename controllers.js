		angular.module("exampleApp", [])

		.controller("topLevelCtrl", function($scope) {
			$scope.data = {
				dataValue: ""
			};

			$scope.reverseText = function() {
				$scope.data.dataValue = $scope.data.dataValue.split("").reverse().join("");
			}
			$scope.changeCase = function ()	{
				var result = [];
				angular.forEach($scope.data.dataValue.split(""), function(char, index) {
					result.push(index % 2 == 1 ? char.toString().toUpperCase() : char.toString().toLowerCase() );
				});
				$scope.data.dataValue = result.join("");
			};
		})

		.controller("firstChildCtrl", function($scope) {
			
			$scope.changeCase = function() {
				$scope.data.dataValue = $scope.data.dataValue.toUpperCase();
			};
		})
		
		.controller("secondChildCtrl", function($scope) {
			
			$scope.shiftFour = function() {
				var result = [];
				angular.forEach($scope.data.dataValue.split(""), function(char, index) {
					result.push(index < 4 ? char.toString().toUpperCase() : char);
				});
					$scope.data.dataValue = result.join("");
			};
			
			$scope.changeCase = function() {
				$scope.data.dataValue = $scope.data.dataValue.toLowerCase();
			};
		});
