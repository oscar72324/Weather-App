function weather1(locationID){
    console.log(locationID);
    var key = '{f3fea66a039d88275b050d054a82d627}';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=5128581&appid=f3fea66a039d88275b050d054a82d627')
    .then(function (resp){
        return resp.json();
    }).then(function (data){
        drawWeather1(data);
    }).catch(function (){
        //catch errors
    })
}

window.onload = (function (){
    weather1(5128581)
})

function drawWeather1(x) {
    var fah = Math.round(((parseFloat(x.main.temp) - 273.15)*1.8)+32);

    document.getElementById('description1').innerHTML = x.weather[0].description;
    document.getElementById('temp1').innerHTML = fah + '&deg;';
    document.getElementById('location1').innerHTML = x.name;
}