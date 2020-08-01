let favKeys = [215854];
let favList = ["Tel Aviv"]
function reboot() {
    createGallery(favKeys, favList)
}
function createGallery(keys, cities) {
    for(i=0 ; i<keys.length ; i++){
        let y = [];
        let icon;
        let temp;
        const g = document.getElementById('favGallery');
        
        const index = i; // have to put it in a const because the i will change before the promise will get its answer
        fetch("http://dataservice.accuweather.com/currentconditions/v1/" + keys[i] + "?apikey=Rllb6XmxXTg2cHO0LkOCZGazDzeC3qFM")
            .then(response => response.json())
            .then(data => y = data)
            .then(y => {
                icon = y[0].WeatherIcon;
                temp = y[0].Temperature.Imperial.Value;
                let a = document.createElement("DIV");  
                a.innerHTML = "<p class='cityName'>" + cities[index] + "</p>";
                if(icon < 4 || icon == 5) {
                    a.innerHTML += "<p class='type'>Sunny</p>";
                    a.setAttribute("class", "gallrey-item sunny");
                } else if (icon == 4 || icon == 6 || icon == 20 || icon == 21){
                    a.innerHTML += "<p class='type'>Partially cloudy</p>";
                    a.setAttribute("class", "gallrey-item partiallyCloudy");
                } else if((icon > 6 && icon < 12) || icon == 19) {
                    a.innerHTML += "<p class='type'>Cloudy</p>";
                    a.setAttribute("class", "gallrey-item cloudy");
                } else if(icon > 11 && icon < 19) {
                    a.innerHTML += "<p class='type'>Rainy</p>";
                    a.setAttribute("class", "gallrey-item rainy");
                } else {
                    a.innerHTML += "<p class='type'>Snowy</p>";
                    a.setAttribute("class", "gallrey-item snowy");
                }
                a.innerHTML += "<p class='temp'>" + temp + " °F</p>";
                a.innerHTML += "<div class='favIcon' onclick='this.parentNode.parentNode.removeChild(this.parentNode); return false;'><img src='Assests/Icons/favoriteFullIcon.png'></div>";
                g.appendChild(a);
            });
    }
}


