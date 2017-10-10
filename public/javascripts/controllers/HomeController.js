app.controller('HomeController', ['$scope', 'orderByFilter', 'suggestions', function($scope, orderBy, suggestions) {
    $scope.posts = suggestions.posts;
    $scope.addSuggestion = function() {
        $scope.posts.push({title: $scope.title, upvotes: 0});
        $scope.title='';
    }
    $scope.upVote = function(post) {
        post.upvotes++;
    }
}]);
