const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '473fd07344mshb6d9b3fc20e1756p17a880jsn949cac213b08',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {


            console.log(response)
            // cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = format_time(response.sunrise)
            sunset.innerHTML = format_time(response.sunset)
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})



const getWeather1 = () => {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chittaurgarh', options)
        .then(response => response.json())
        .then((response) => {


            console.log(response)
            cloud_pct4.innerHTML = response.cloud_pct
            temp4.innerHTML = response.temp
            feels_like4.innerHTML = response.feels_like
            humidity4.innerHTML = response.humidity
            min_temp4.innerHTML = response.min_temp
            max_temp4.innerHTML = response.max_temp
            wind_speed4.innerHTML = response.wind_speed
            wind_degrees4.innerHTML = response.wind_degrees
            sunrise4.innerHTML = format_time(response.sunrise)
            sunset4.innerHTML = format_time(response.sunset)
        })
        .catch(err => console.error(err));
}
const getWeather2 = () => {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jaipur', options)
        .then(response => response.json())
        .then((response) => {


            console.log(response)
            cloud_pct5.innerHTML = response.cloud_pct
            temp5.innerHTML = response.temp
            feels_like5.innerHTML = response.feels_like
            humidity5.innerHTML = response.humidity
            min_temp5.innerHTML = response.min_temp
            max_temp5.innerHTML = response.max_temp
            wind_speed5.innerHTML = response.wind_speed
            wind_degrees5.innerHTML = response.wind_degrees
            sunrise5.innerHTML = format_time(response.sunrise)
            sunset5.innerHTML = format_time(response.sunset)
        })
        .catch(err => console.error(err));
}
const getWeather3 = () => {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bhilwara', options)
        .then(response => response.json())
        .then((response) => {


            console.log(response)
            cloud_pct6.innerHTML = response.cloud_pct
            temp6.innerHTML = response.temp
            feels_like6.innerHTML = response.feels_like
            humidity6.innerHTML = response.humidity
            min_temp6.innerHTML = response.min_temp
            max_temp6.innerHTML = response.max_temp
            wind_speed6.innerHTML = response.wind_speed
            wind_degrees6.innerHTML = response.wind_degrees
            sunrise6.innerHTML = format_time(response.sunrise)
            sunset6.innerHTML = format_time(response.sunset)
        })
        .catch(err => console.error(err));
}
const getWeather4 = () => {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Udaipur', options)
        .then(response => response.json())
        .then((response) => {


            console.log(response)
            cloud_pct7.innerHTML = response.cloud_pct
            temp7.innerHTML = response.temp
            feels_like7.innerHTML = response.feels_like
            humidity7.innerHTML = response.humidity
            min_temp7.innerHTML = response.min_temp
            max_temp7.innerHTML = response.max_temp
            wind_speed7.innerHTML = response.wind_speed
            wind_degrees7.innerHTML = response.wind_degrees
            sunrise7.innerHTML = format_time(response.sunrise)
            sunset7.innerHTML = format_time(response.sunset)
        })
        .catch(err => console.error(err));
}

getWeather1()
getWeather2()
getWeather3()
getWeather4()


var date = new Date(response.sunrise * 1000);

function format_time(s) {
    return new Date(s * 1e3).toISOString().slice(-13, -5);
}

console.log(format_time(12345));