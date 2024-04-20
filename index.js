const apikey="3c3ca95c1df73129a36d79dcacaf6884";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric"

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");

async function weathercheck(city){
    
    const response=await fetch(apiurl+`&appid=${apikey}`+`&q=${city}`);

    if (response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{

        var data=await response.json();
        console.log(data);
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
        document.querySelector(".location").innerHTML=data.name;
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
        switch (data.weather[0].main){
            
            case "Clouds":
                weathericon.src="./images/clouds.png";
                break;
            case "Clear":
                weathericon.src="./images/sunny.png";
                break;
            case 'Drizzle':
                weathericon.src="./images/drizzle.png";
                break;
            case 'Rain':
                weathericon.src="./images/rainy.png";
                break;
            case 'Mist':
                weathericon.src="./images/mist.png";
                break;
            case 'Snow':
                weathericon.src="./images/snow.png";
                break;
        }

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";

    }

   
    
}

searchbtn.addEventListener("click",()=>{
    weathercheck(searchbox.value);
   
})
