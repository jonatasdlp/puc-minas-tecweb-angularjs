function SimpleController($scope){
  $scope.someThings = ['My', 'first', 'controller'];
}

function ExampleController($scope){
  $scope.things = [ 'One Thing', 'Angular App'];
  $scope.total = $scope.things.length
  
  $scope.addOneThing = function() {
    newThing = $scope.inputThing;
    if (newThing.length) {
      $scope.things.push(newThing);
      $scope.inputThing = '';
      $scope.total++;
    }
  }
  
  $scope.removeThing = function(thingName) {
    for(var i = $scope.things.length - 1; i >= 0; i--) {
      if($scope.things[i] === thingName) {
        $scope.things.splice(i, 1);
        $scope.total--;
      }
    }
  }
}
