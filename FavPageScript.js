let favKeys = [215854];
let favList = ["Tel Aviv"];
let numOfFavs = 0;
function reboot() {
    createGallery(favKeys, favList);
    document.getElementById('favoritesContainer').addEventListener('click', checkFavItems);
}
function checkFavItems() {
    let x = document.getElementsByClassName('gallrey-item');
        let currentCount = 0;
        for(i=0 ; i<x.length ; i++){
            currentCount++;
        }
        if(!(currentCount == numOfFavs)) {
            let foundMatch = false;
            for(i=0 ; i<favList.length ; i++){
                for(j=0 ; j<x.length ; j++){
                    if(x[j].getAttribute('data') == favList[i]){
                        foundMatch = true;
                    }
                }
                if(!foundMatch){
                    favList.splice(i, 1);
                    favKeys.splice(i, 1);
                    numOfFavs--;
                    if(numOfFavs == 0){
                        document.getElementById("emptyMessage").classList.remove("hide");
                        document.getElementById('favoritesContainer').removeEventListener('click', checkFavItems);
                    }

                } else {
                    foundMatch = false;
                }
            }
            
        }
}

function createGallery(keys, cities) {
    if(keys.length > 0){
        document.getElementById("emptyMessage").classList.add("hide");
    }
    for(i=0 ; i<keys.length ; i++){
        numOfFavs++;
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
                a.setAttribute("data", cities[index])
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
                a.innerHTML += "<div class='tempContainer'><p class='temp'>" + temp + "</p><spanclass='showFehrenheit active'> °F</span><span class='showCelcius'> °C</span></div>";
                a.innerHTML += "<div class='favIcon' onclick='this.parentNode.parentNode.removeChild(this.parentNode); return false;'><img src='Assests/Icons/favoriteFullIcon.png'></div>";
                g.appendChild(a);
            });
    }
}


