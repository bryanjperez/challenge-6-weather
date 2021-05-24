// var searchButton = $('.btn');

// searchButton.on('click', function () {
// var searchBox = $('#search-field')

// var searchText = searchBox.val();
// event.preventDefault();
// console.log(searchText)


//  var APIkey = '843fa40ad68a96668befb0da86d9b44b'


// var myURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchText + "&units=imperial&appid=" + APIkey

// fetch(myURL)
// .then((res) => {
// return res.json()
// })
// .then((data) => {
// console.log(data);

// var cityName = $('#city-name');
// cityName.text(data.name)

// var cityTemp = $('#city-temp');
// cityTemp.text(data.main.temp)

// })


// })
// var searchBox = $('#search-field');
// var searchText = searchBox.val();
// var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var APIkey = '843fa40ad68a96668befb0da86d9b44b';
var searchButton = $('.btn');
var searchBox = $('#search-field');
var searchInput = searchBox.val();




$.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&units=imperial" + APIkey,
    function (data) {
        // var searchButton = $('.btn');
        // var searchBox = $('.textInput');
        // var searchInput = searchBox.val();
        var temp = Math.floor(data.main.temp);
        var weather = data.weather[0].main;
        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    })


// ERROR MESSAGES APPEAR TO BE BECAUSE OF THE TOKEN KEY. 401 ERROR = 
// The HTTP 401 Unauthorized client error status response code indicates 
// that the request has not been applied because it lacks valid 
// authentication credentials for the target resource