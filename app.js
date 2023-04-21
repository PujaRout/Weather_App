function getweather() {
    event.preventDefault();
    let city = document.getElementById("city").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API ID}`;
fetch(url)
.then((res) => res.json())
.then((data) => {
    console.log("Weather value",data)
    if (data && data.cod == 200) {
        let temp = data.main.temp - 273.15;
        temp = temp.toFixed();
        document.getElementById("result").textContent = `Temperature in ${city} ${temp}℃`;

        let feelLike = data.main.feels_like - 273.15;
        feelLike = feelLike.toFixed(2);
        document.getElementById("feelLike").textContent = `Feel like ${feelLike}℃`;
        
        let humidity = data.main.humidity;
        document.getElementById("humidity").textContent = `Humidity ${humidity}%`;

        let pressure = data.main.pressure;
        document.getElementById("pressure").textContent = `Air Pressure ${pressure} hPa`;

        let temp_max = data.main.temp_max - 273.15;
        temp_max = temp_max.toFixed();
        document.getElementById("temp_max").textContent = `Maximum Temperature ${temp_max}℃`;

        let temp_min = data.main.temp_min - 273.15;
        temp_min = temp_min.toFixed();
        document.getElementById("temp_min").textContent = `Minimum Temperature ${temp_min}℃`;
        
    } else {
        document.getElementById("result").textContent = (data && data.message ? data.message : `Something went wrong!`);

        document.getElementById("feelLike").textContent = (data && data.message ? data.message : `Something went wrong!`);

        document.getElementById("humidity").textContent = (data && data.message ? data.message : `Something went wrong!`);

        document.getElementById("pressure").textContent = (data && data.message ? data.message : `Something went wrong!`);

        document.getElementById("temp_max").textContent = (data && data.message ? data.message : `Something went wrong!`);

        document.getElementById("temp_min").textContent = (data && data.message ? data.message : `Something went wrong!`);
    }
});
    
}