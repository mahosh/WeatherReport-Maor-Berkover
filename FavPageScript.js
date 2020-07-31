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
                a.setAttribute("class", "gallrey-item");
                a.innerHTML = "<p class='cityName'>" + cities[index] + "</p>";
                a.innerHTML += "<p class='temp'>" + temp + " °F</p>";
                g.appendChild(a);
            });
    }
}