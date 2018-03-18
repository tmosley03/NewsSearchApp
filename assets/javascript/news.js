//alert("hello world");

var url = 'https://newsapi.org/v2/everything?' +
    'q=trump&' +
    'from=2018-03-18&' +
    'sortBy=popularity&' +
    'apiKey=bc18a090e0be4d5699343166c9ba8378';


$.ajax({
    url: url,
    method: "GET",
}).then(function (response) {
   console.log(response);
    var article = response.articles[3].urlToImage;
    console.log(article);
    // $("#articleSpace").append(article);
    var newThumb = $("<img>").attr("src", article);
    $("#articleSpace").append(newThumb);
});

