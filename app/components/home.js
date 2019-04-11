(function(){
    'use strict';

    var theHome = {
        templateUrl: '/app/components/home.html',
        controller: homeCtrl
    };

    angular
        .module('testApp')
        .component('home', theHome);
        homeCtrl.$inject = ["$scope"];
        function homeCtrl($scope){


            $('#carouselExampleIndicators').carousel()

            
            $scope.openLoginModal = function(){
                $('#login-modal').modal({
                    show: true
                })
            }


            $scope.mobileMenu = function(){
                $('#mobile-menu').toggle();
            }
            






        }
})();