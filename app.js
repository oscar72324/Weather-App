function weather(cityID){
    console.log(cityID)
    var key = '{f3fea66a039d88275b050d054a82d627}';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=5368361&appid=f3fea66a039d88275b050d054a82d627')
    .then(function (resp){
        return resp.json();
    }).then(function (data){
        drawWeather(data);
    }).catch(function (){
        //catch errors
    })
}

window.onload = (function (){
    weather(5368361)
})

function drawWeather(d) {
    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15)*1.8)+32);

    document.getElementById('description').innerHTML = d.weather[0].description;
    document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
    document.getElementById('location').innerHTML = d.name;
}