angular.module('myExample', ['ngRoute', 'routerController'])    
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/home', { templateUrl: '/working/mainPage.html',  controller: 'MyMainController' }).
      when('/list', { templateUrl: '/working/list.html', controller: 'MyListController' }).
      when('/about', { templateUrl: '/working/about.html', controller: 'MyAboutController' }).
      otherwise({ redirectTo: '/home' });
}])
.controller('MyMainController', ['$scope', function ($scope) {
     
        $scope.headingCaption = 'Garden Catalog Main Page';
        $scope.menu = [
            { href: "/working/mainPage.html", text: "Home" },
            { href: "/working/list.html", text: "List" },
            { href: "/working/about.html", text: "About" }
        ];
        $scope.items = [
          { title: 'flower01', pName: '/demoPhoto/p01.gif' },
          { title: 'flower02', pName: '/demoPhoto/p05.gif' },
          { title: 'flower03', pName: '/demoPhoto/p03.gif' },
          { title: 'flower04', pName: '/demoPhoto/p15.gif' },
          { title: 'flower05', pName: '/demoPhoto/p11.gif' },
          { title: 'flower06', pName: '/demoPhoto/p08.gif' },
        ];
         
}])
.directive('mainView', function() {
    return {
        restrict: 'E',
        templateUrl: '/working/mainView.html'
    };
});

var myDemoControllers = angular.module('routerController', []);
  
myDemoControllers.controller('MyAboutController', ['$scope', '$http',
  function ($scope, $http) {
      $http.get('demo.json').success(function (data) {
          $scope.jsonData = data;
      });

      $scope.headingCaption = 'Garden Catalog About Page';
}]);

myDemoControllers.controller('MyListController', ['$scope',
    function ($scope) {
        $scope.editForm = true;
        $scope.eId = -1;
        $scope.eName = '';
        $scope.eDesc = '';
        $scope.ePrice = '';
        $scope.headingCaption = 'Garden Catalog List Page';
        $scope.products = [
               { id: 0,  title: 'flower01', desc: 'aa01', price: '$79.000', pName: '/demoPhoto/p01.gif' },
               { id: 1,  title: 'flower02', desc: 'bb22', price: '$79.000', pName: '/demoPhoto/p02.gif' },
               { id: 2,  title: 'flower03', desc: 'cc33', price: '$79.000', pName: '/demoPhoto/p03.gif' },
               { id: 3,  title: 'flower04', desc: 'dd44', price: '$79.000', pName: '/demoPhoto/p04.gif' },
               { id: 4,  title: 'flower05', desc: 'ee55', price: '$79.000', pName: '/demoPhoto/p05.gif' },
               { id: 5,  title: 'flower06', desc: 'ff66', price: '$79.000', pName: '/demoPhoto/p06.gif' },
               { id: 6,  title: 'flower07', desc: 'gg77', price: '$79.000', pName: '/demoPhoto/p07.gif' },
               { id: 7,  title: 'flower08', desc: 'hh88', price: '$79.000', pName: '/demoPhoto/p08.gif' },
               { id: 8,  title: 'flower09', desc: 'ii99', price: '$79.000', pName: '/demoPhoto/p09.gif' },
               { id: 9,  title: 'flower10', desc: 'jj10', price: '$79.000', pName: '/demoPhoto/p10.gif' },
               { id: 10, title: 'flower11', desc: 'kk11', price: '$79.000', pName: '/demoPhoto/p11.gif' },
               { id: 11, title: 'flower12', desc: 'll12', price: '$79.000', pName: '/demoPhoto/p12.gif' },
               { id: 12, title: 'flower13', desc: 'mm13', price: '$79.000', pName: '/demoPhoto/p13.gif' },
               { id: 13, title: 'flower14', desc: 'nn14', price: '$79.000', pName: '/demoPhoto/p14.gif' },
               { id: 14, title: 'flower15', desc: 'oo15', price: '$79.000', pName: '/demoPhoto/p15.gif' },
               { id: 15, title: 'flower16', desc: 'pp16', price: '$79.000', pName: '/demoPhoto/p16.gif' },
               { id: 16, title: 'flower17', desc: 'qq77', price: '$79.000', pName: '/demoPhoto/p17.gif' },
               { id: 17, title: 'flower18', desc: 'rr88', price: '$79.000', pName: '/demoPhoto/p18.gif' },
               { id: 18, title: 'flower19', desc: 'ss99', price: '$79.000', pName: '/demoPhoto/p19.gif' },
               { id: 19, title: 'flower20', desc: 'tt10', price: '$79.000', pName: '/demoPhoto/p20.gif' },
               { id: 20, title: 'flower21', desc: 'uu11', price: '$79.000', pName: '/demoPhoto/p21.gif' },
               { id: 21, title: 'flower22', desc: 'vv12', price: '$79.000', pName: '/demoPhoto/p22.gif' },
               { id: 22, title: 'flower23', desc: 'ww13', price: '$79.000', pName: '/demoPhoto/p23.gif' },
               { id: 23, title: 'flower24', desc: 'xx14', price: '$79.000', pName: '/demoPhoto/p24.gif' },
               { id: 24, title: 'flower25', desc: 'yy15', price: '$79.000', pName: '/demoPhoto/p25.gif' }
       ];
 
        $scope.showItem = function (id) {
            $scope.editForm = false;
            $scope.eName = $scope.products[id].title;
            $scope.eDesc = $scope.products[id].desc;
            $scope.ePrice = $scope.products[id].price;
            $scope.eId = id;
        };
        $scope.saveItem = function () {
            if ($scope.eId != -1) {
                $scope.products[$scope.eId].title = $scope.eName;
                $scope.products[$scope.eId].desc = $scope.eDesc;
                $scope.products[$scope.eId].price = $scope.ePrice;
                $scope.editForm = true;
            }
        };
        $scope.exitItem = function () {
            $scope.editForm = true;
            $scope.eId = -1;
        };
        $scope.count = 0;
        $scope.showEdit = true;
        $scope.countPic = function ( num , editButton) {
            $scope.count = num;
            $scope.showEdit = editButton;
        };
 }])
.filter('filterPic', function () {
    return function (products, count) {
        var partPic = [];
        var index=0;
        angular.forEach(products, function(product){
            if ( count == 0 && index >= 0 && index < 5) {
                 partPic.push(product);
            }
            if ( count == 5 && index >=5 && index < 10 ) {
                 partPic.push(product);
            }
            if ( count == 10 && index >=10 && index < 15 ) {
                 partPic.push(product);
            }
            if ( count == 15 && index >=15 && index < 20 ) {
                partPic.push(product);
            }
            if ( count == 20 && index >=20 && index < 25 ) {
                partPic.push(product);
            }
            if (count == 16) {
                partPic.push(product);
            }
            index++;
        });
        return partPic;
    };
}); 
//@copyright  wendy xiao demo angular 5-25-2016 ;