var cityEl = document.querySelector("#form-submit");
var citySearch = document.querySelector("#search-input");
var date = moment().format('MMM Do, YYYY');
var time = moment().format('hh:mm:ss');

//  create weather function to pull data from API
var weather = function (city) {
    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=72dfca8eff87bd67cf6e72b3fd4bf66f";
    $.ajax({
        url: weatherURL,
        method: "GET"
    }).then(function (response) {
        var city = $("#results");
        var day2 = $("#results2");
        var temperature = $("#temperature");
        var wind = $("#wind");
        var humidity = $("#humidity");

        // empty divs prior to returning function call
        city.empty();
        day2.empty();
        temperature.empty();
        wind.empty();
        humidity.empty();

        // create variables for JSON responses
        var day = (response.name);
        var temp = (response.main.temp);
        // concatenate string 'MPH' to wind
        var windMPH = (response.wind.speed + " MPH");
        // concatenate string '%' to humidity
        var humidityPercent = (response.main.humidity + " %");

        // Push data to relevant DIV in HTML
        $("#results").prepend(day + "")
        $("#results2").append(date + " " + time);
        $("#temperature").append(temp);
        $("#wind").append(windMPH);
        $("#humidity").append(humidityPercent);

    })
};

// create function for five day forcecast
var fiveDayForecast = function (city) {
    var fiveDayForecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + "&APPID=72dfca8eff87bd67cf6e72b3fd4bf66f";

    $.ajax({
        url: fiveDayForecastURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var fiveDayDiv = $("#forecast");
        var forecastDay = response.list;

        // empty div before running function each time
        fiveDayDiv.empty();

        for (let i = 4; index < forecastDay.length; i += 8) {
            var fiveDayView = $("<div>").addclass("card");
            var fiveTime = new Date(response.list[i].dt * 1000);

            fiveTime = fiveTime.toLocaleDateString("en-US");
            fiveDayView.html("<p>" + fiveTime + "<p>" + `<img src='https://openweathermap.org/img/wn/${response.list[i].weather[0].icon}@2x.png'>` + "<p>" + "Temperature: " + response.list[i].main.temp + "</p>" + "<p>" + "Humidity: " + response.list[i].main.humidity + "%" + "</p>" + "<p>" + "Wind: " + response.list[i].wind.speed + " MPH" + "</p>")

            fiveDayDiv.append(fiveDayView);
        }
    });
}
var formHandler = function (event) {
    event.preventDefault();

    var cityName = citySearch.value.trim();

    if (cityName) {
        weather(cityName);
        fiveDayForecast(cityName);
        button(cityName);
        citySearch.value = "";
    } else {
        alert("Please enter a city");
    }
};

var button = function (cityName) {
    if (cityName) {
        $('#result-history').append(
            $(document.createElement('button')).prop({
                type: 'button',
                innerHTML: cityName,
                class: 'btn-secondary btn btn-block',
                id: 'testing'
            })
        );
    }
}

cityEl.addEventListener("submit", formHandler);
weather();


// ERROR MESSAGES APPEAR TO BE BECAUSE OF THE TOKEN KEY. 401 ERROR = 
// The HTTP 401 Unauthorized client error status response code indicates 
// that the request has not been applied because it lacks valid 
// authentication credentials for the target resource
