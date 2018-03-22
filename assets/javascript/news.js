//alert("hello world");



//=============== News API ===================//

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


//============== Firebase ===================//

var config = {
    apiKey: "AIzaSyCqK8grk7zfqoU9T9bVD3s0RwLO4GT-stk",
    authDomain: "beyondthebubble-48a3c.firebaseapp.com",
    databaseURL: "https://beyondthebubble-48a3c.firebaseio.com",
    projectId: "beyondthebubble-48a3c",
    storageBucket: "beyondthebubble-48a3c.appspot.com",
    messagingSenderId: "1068799382212"
};
firebase.initializeApp(config);


//==== Search Page Functionality ====//

//1.  "Around the world" sidebar will be populated with article thumbnails sourced from user interests held in an array.

2. 

