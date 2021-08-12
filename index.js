let weather = {
    // apikey:"c304f07ea3ab858fce3ecf7b957d9c49",
    fetchWeather:function(city){
       fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=c304f07ea3ab858fce3ecf7b957d9c49")
      .then((response) => response.json())
      .then((data) => this.displayWeather(data))
      .catch((error)=>console.log(error));
    },
    displayWeather:function(data){
      const {name} =data;
      const {icon,description} = data.weather[0]; 
      const {temp,humidity} =data.main;
      const {speed}=data.wind;
      // console.log(name,icon,description,temp,humidity,speed);
      document.querySelector(".city h2").innerText = "Weather in" + name;
      // document.querySelector(".icon").src= "https://img.icons8.com/ios-filled/50/000000/apple-weather.png";
      document.querySelector(".description h3").innerText = description;
      document.querySelector(".temp h3").innerText = temp  + "deg celcius";
      document.querySelector(".humditiy p").innerText = "Humidity:" + humidity + "%";
      document.querySelector(".wind p").innerText = "Wind speed:" + speed + "km/hr";
    },
    search:function(){
    weather.fetchWeather(document.querySelector(".search-bar").value);
 
    },
};
document.querySelector(".search-btn").addEventListener("click",function(e){
  e.preventDefault();
  weather.search();
 
});
