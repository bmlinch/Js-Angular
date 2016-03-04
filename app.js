var app = angular.module('poi',[])

app.controller('Grr', function($scope){
    $scope.destroy = function(item){
        item.remove()
    }
    $scope.itemlist = []
    $scope.submission = function(title, url, date){
        $scope.itemlist.push(title, url, date)
    }
})