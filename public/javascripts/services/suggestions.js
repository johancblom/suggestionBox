app.factory('suggestions', [function() {
    var demoSuggestions = {
        posts: [
            {
                id: 0,
                title: 'Free pizza at club meetings',
                upvotes: 15,
                comments: [
                    {body: 'First comment', upvotes: 3},
                    {body: 'Second comment', upvotes: 4}]
            },
            {
                id: 1,
                title: 'End all club emails with jokes',
                upvotes: 9,
                comments: [
                    {body: 'Third comment', upvotes: 2},
                    {body: 'Fourth comment', upvotes: 1}]
            },
            {
                id: 2,
                title: 'Retrofit water fountain with Gatorade',
                upvotes: 10,
                comments: [],
            }

        ]
    };
    return demoSuggestions;
}]);