app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {
    $scope.post = suggestions.posts[$routeParams.id];
    $scope.addComment = function() {
        console.log('Adding comment: ' + $scope.body);
        $scope.post.comments.push({body: $scope.body, upvotes: 0});
        $scope.body = '';
    }
    $scope.upVote = function(comment) {
        comment.upvotes++;
    }
}]);