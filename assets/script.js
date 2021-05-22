var searchButton = $('.btn');

searchButton.on('click', function () {
    var searchBox = $('#search-field')

    var searchText = searchBox.val();
    event.preventDefault();
    console.log(searchText)


    var APIkey = '843fa40ad68a96668befb0da86d9b44b'


    var myURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchText + "&appid=" + APIkey

    fetch(myURL)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data);

            var cityName = $('#city-name');
            cityName.text(data.name)

            var cityTemp = $('#city-temp');
            cityTemp.text(data.main.temp)

        })


})