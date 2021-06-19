

// var request = new XMLHttpRequest();
// request.open("GET", "api.openweathermap.org/data/2.5/weather?q=Indore&appid=5e3cfd1c5c084afc370f31cf6a731cff", true);
// request.onload = function() {
//     // Begin accessing JSON data here
//     // var data = JSON.parse(this.response);
//     console.log(this.response);
// }


// let response = fetch("api.openweathermap.org/data/2.5/weather?q=Indore&appid=5e3cfd1c5c084afc370f31cf6a731cff");
// response.then((res) => {
//     console.log(res.json())
// })

////////////////// Weather card //////////////////////
// var apiURL = ""
// const searchCityName = document.getElementById('city_name_input')
// const searchButton = document.getElementById('search')
// const updateCityName = document.getElementById('city_name')

// searchButton.addEventListener('click', () =>  {
//     let cityName = searchCityName.value.toUpperCase()
//     updateCityName.innerText = cityName;
//     apiURL = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5e3cfd1c5c084afc370f31cf6a731cff&units=metric`

    
//     // // api call using XHR
//     // var request = new XMLHttpRequest()
//     // request.open("GET", apiURL, true)
//     // request.send();
//     // request.onload = () => {
//     //     if(request.status === 200) {
//     //         console.log(JSON.parse(request.response))
//     //     } else {
//     //         console.log(`error ${request.status} ${request.statusText}`)
//     //     }
//     // }
//     console.log("request sent");
    
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//          if (this.readyState == 4 && this.status == 200) {
//              console.log(this.responseText);
//          }
//     };
//     xhttp.open("POST", apiURL, true);
//     xhttp.setRequestHeader("Content-type", "application/json");
//     xhttp.send("Your JSON Data Here");
// })

$(document).ready(function() {
    // Date Time
    var date = new Date()
    var month = date.getMonth() + 1
    var day = date.getDate() 
    var year = date.getFullYear();

    $("#date").text(`${day}/${month}/${year}`)
    var time = date.getHours() + ":" + date.getMinutes();

    // good morning
    if (date.getHours() < 12) {
        $("body").css("background-color", "#83d8fa");
        $(".container").css({
            background: "linear-gradient(#a1c4fd, #c2e9fb)"
        })
    }
    // good afternoon
    else if(date.getHours() > 12 && date.getHours() <= 19) {
        $("body").css("background-color", "#ebed3a");
        $(".container").css({
            background: "linear-gradient(#fa709a, #fee140)"
        })
    }
    // good night
    else if(date.getHours() > 19) {
        $("body").css("background-color", "#330867");
        $(".container").css({
            background: "linear-gradient(#330867, #764ba2)",
            color: "#fff"
        })
    }

    var apiURL = ""
    $("#search").click(function() {
        var cityName = $("#city_name_input").val()
        apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5e3cfd1c5c084afc370f31cf6a731cff&units=metric`
        $("#city_name").text(cityName.charAt(0).toUpperCase() + cityName.slice(1));
        
        // API CALL
        fetch(apiURL)
        .then(response => response.json())
        .then((data) => { 
            $("#temp_value").text(data.main.temp);
            console.log(data);
            if(data.weather.main == "cloudy") {
                console.log(cloudy);
            }
        })
    })
})

// data.weather.main
// colors - morning bg-#83d8fa theme: #a1c4fd -> #c2e9fb
// afternoon 