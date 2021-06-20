

$(document).ready(function() {
    // Date Time
    var date = new Date()
    var month = date.getMonth() + 1
    var day = date.getDate() 
    var year = date.getFullYear()

    $("#date").text(`${day}/${month}/${year}`)
    var time = date.getHours() + ":" + date.getMinutes()

    // good morning
    // if (date.getHours() < 12) {
    //     $("body").css("background-color", "#83d8fa")
    // }
    // // good afternoon
    // else if(date.getHours() > 12 && date.getHours() <= 19) {
    //     $("body").css("background-color", "#ffa366")
    //     $("body").css("color", "#fff")
    // }
    // // good night
    // else if(date.getHours() > 19) {
    //     $("body").css("background-color", "#330867")
    // }

    var apiURL = ""
    $("#search").click(function() {
        var cityName = $("#city_name_input").val()
        apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5e3cfd1c5c084afc370f31cf6a731cff&units=metric`
        $("#city_name").text(cityName.charAt(0).toUpperCase() + cityName.slice(1))
        
        // API CALL
        fetch(apiURL)
        .then(response => response.json())
        .then((data) => { 
            $("#temp_value").text(data.main.temp);
            console.log(data);
            if(data.weather.main == "cloudy") {
                console.log(cloudy);
            }
            // weather image status
            console.log(data.weather[0].main)
            if(data.weather[0].main == "Haze") {
                $("#icon").html("<i class='fas fa-smog'></i>")
                $("#weather_status").text("Haze")
                $("body").css("color", "#fff")
                $("#weather_status").css("font-size", "calc(10px + 2vh)")
                $('.container').css('background-image', 'url(./img/haze.jpg)')
            }
            else if(data.weather[0].main == "Clouds") {
                $("#icon").html("<i class='fas fa-cloud'></i>")
                $("#weather_status").text("Cloudy")
                $("body").css("color", "#fff")
                $("#weather_status").css("font-size", "calc(10px + 2vh");
                $('.container').css('background-image', 'url("./img/cloudy.jpg")');
            }
            else if(data.weather[0].main == "Rain") {
                $("#icon").html("<i class='fas fa-cloud-rain'></i>")
                $("#weather_status").text("Rainy")
                $("#weather_status").css("font-size", "calc(10px + 2vh");
                $('.container').css('background-image', 'url("./img/rain.jpg")');
            } 
            else if(data.weather[0].main == "Sunny") {
                $("#icon").html("<i class='fas fa-cloud-rain'></i>")
                $("#weather_status").text("Rainy")
                $("body").css("color", "#fff")
                $("#weather_status").css("font-size", "calc(10px + 2vh")
                $('.container').css('background-image', 'url("./img/sunny.jpg")')
            } 
        })
    })
})

