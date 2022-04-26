let fehrenheit = true; 
let favList = [];
let favKeys = [];
let currentCity = "Tel Aviv";
let currentKey = 215854;
const currentDate = new Date();
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let today = weekDays[currentDate.getDay()];

function reboot() {
  /* setting a new session*/
  centerItems();
  /*setting the dates and names in all relevant places*/
  document.getElementById('currentDate').innerHTML = currentDate.getDate()+'-'+(currentDate.getMonth()+1)+'-'+currentDate.getFullYear();
  document.getElementById('currentDay').innerHTML = today;
  currentDate.setDate(currentDate.getDate() + 1);
  today = weekDays[currentDate.getDay()];
  document.getElementById('dateOfDay1').innerHTML = currentDate.getDate()+'-'+(currentDate.getMonth()+1)+'-'+currentDate.getFullYear();
  document.getElementById('day1name').innerHTML = today;
  currentDate.setDate(currentDate.getDate() + 1);
  today = weekDays[currentDate.getDay()];
  document.getElementById('dateOfDay2').innerHTML = currentDate.getDate()+'-'+(currentDate.getMonth()+1)+'-'+currentDate.getFullYear();
  document.getElementById('day2name').innerHTML = today;
  currentDate.setDate(currentDate.getDate() + 1);
  today = weekDays[currentDate.getDay()];
  document.getElementById('dateOfDay3').innerHTML = currentDate.getDate()+'-'+(currentDate.getMonth()+1)+'-'+currentDate.getFullYear();
  document.getElementById('day3name').innerHTML = today;
  currentDate.setDate(currentDate.getDate() + 1);
  today = weekDays[currentDate.getDay()];
  document.getElementById('dateOfDay4').innerHTML = currentDate.getDate()+'-'+(currentDate.getMonth()+1)+'-'+currentDate.getFullYear();
  document.getElementById('day4name').innerHTML = today;
  //setting the city and favorite list if it's not the first run of the user
  if(window.location.search) {
    /*the only time the current city won't start with Tel Aviv, is when the user will click on a city in his favorite gallery
    in that case, the url will be in this format: ...index.com/?key=215854&city="Tel Aviv"*/
    let x = window.location.search.split('=');
    currentCity = x[2];
    document.getElementById('cityName').innerHTML = currentCity;
    currentKey = x[1].split('&')[0];
  }
  if(window.localStorage.favoriteCities){
    favList = JSON.parse(window.localStorage.getItem("favoriteCities"));
    favKeys = JSON.parse(window.localStorage.getItem("favoriteKeys"));
    for(i = 0 ; i<favList.length ; i++){
      if(favList[i] == currentCity){
        document.getElementById('notAFavoriteCity').className = '';
        document.getElementById('aFavoriteCity').className = 'active';
      }
    }
  } else {
    localStorage.setItem("favoriteCities", JSON.stringify(favList));
    localStorage.setItem("favoriteKeys", JSON.stringify(favKeys));
  }
  /*running the searchbar autocomplete function and the initial temperature of the chosen city*/
  autocomplete(document.getElementById('searchCities'));
  getTemperature(currentKey);
}
function centerItems(){
  /*this function center the searchbar and the city name according to their and the page's width*/
  let leftPositionOfSearchBar = (document.body.clientWidth - document.getElementById('searchBar').offsetWidth)/2;
  document.getElementById('searchBar').style.left=leftPositionOfSearchBar +"px";
  let leftPositionOfCityName = (document.getElementById('row1').offsetWidth - document.getElementById('cityName').offsetWidth)/2;
  document.getElementById('cityBlock').style.left=leftPositionOfCityName +"px";
}
function favoritesButton(){
  if(document.getElementById('notAFavoriteCity').className == 'active') {
    document.getElementById('notAFavoriteCity').className = '';
    document.getElementById('aFavoriteCity').className = 'active';
    favList.push(currentCity);
    favKeys.push(currentKey);
    localStorage.setItem("favoriteCities", JSON.stringify(favList));
    localStorage.setItem("favoriteKeys", JSON.stringify(favKeys));
  } else {
    document.getElementById('notAFavoriteCity').className = 'active';
    document.getElementById('aFavoriteCity').className = '';
    favList.splice(favList.indexOf("currentCity"), 1);
    favKeys.splice(favList.indexOf("currentCity"), 1);
    localStorage.setItem("favoriteCities", JSON.stringify(favList));
    localStorage.setItem("favoriteKeys", JSON.stringify(favKeys));
  }
}

function fehrenheitCelciusButton() {
  /*this function converts fehrenheit to celcius and the other way around*/
  if(document.getElementById('fehrenheitButton').className == 'active'){
    document.getElementById('fehrenheitButton').className = 'disable';
    document.getElementById('celciusButton').className = 'active';
    document.getElementById('celciusButton').disabled = false;
    document.getElementById('fehrenheitButton').disabled = true;
    let x = document.getElementsByClassName('showCelcius');
    let y = document.getElementsByClassName('showFehrenheit');
    for(i=0 ; i<x.length ; i++) {
      x[i].className = 'showCelcius';  
    }
    for(i=0 ; i<y.length ; i++) {
      y[i].className = 'showFehrenheit active';  
    }
    document.getElementById('temperture').innerHTML = fehrenheitTemps[0];
    document.getElementById('day1Temp').innerHTML = fehrenheitTemps[1];
    document.getElementById('day2Temp').innerHTML = fehrenheitTemps[2];
    document.getElementById('day3Temp').innerHTML = fehrenheitTemps[3];
    document.getElementById('day4Temp').innerHTML = fehrenheitTemps[4];
  } else {
    document.getElementById('fehrenheitButton').className = 'active';
    document.getElementById('celciusButton').className = 'disable';
    document.getElementById('celciusButton').disabled = true;
    document.getElementById('fehrenheitButton').disabled = false;
    let x = document.getElementsByClassName('showCelcius');
    let y = document.getElementsByClassName('showFehrenheit');
    for(i=0 ; i<x.length ; i++) {
      x[i].className = 'showCelcius active';  
    }
    for(i=0 ; i<y.length ; i++) {
      y[i].className = 'showFehrenheit';  
    }
    document.getElementById('temperture').innerHTML = celciusTemps[0];
    document.getElementById('day1Temp').innerHTML = celciusTemps[1];
    document.getElementById('day2Temp').innerHTML = celciusTemps[2];
    document.getElementById('day3Temp').innerHTML = celciusTemps[3];
    document.getElementById('day4Temp').innerHTML = celciusTemps[4];
  }
}
/*I'm keeping those out of a function becuase I'm using them both in the temperature setup and for the fehrenheit to celcius conversion*/
let fehrenheitTemps = [];
let celciusTemps = [];

function getTemperature(key){
  /*this function sends a call for 5 days forecast and sets the temperature of each day with the chosen temperature type*/
  let t = [];
  fetch("https://dataservice.accuweather.com/forecasts/v1/daily/5day/"+key+"?apikey=Rllb6XmxXTg2cHO0LkOCZGazDzeC3qFM")
    .then(response => response.json())
    .then(data => {
      t = data
      let icon = 0;
      document.getElementById('temperture').innerHTML = t.DailyForecasts[0].Temperature.Maximum.Value;
      document.getElementById('day1Temp').innerHTML = t.DailyForecasts[1].Temperature.Maximum.Value;
      document.getElementById('day2Temp').innerHTML = t.DailyForecasts[2].Temperature.Maximum.Value;
      document.getElementById('day3Temp').innerHTML = t.DailyForecasts[3].Temperature.Maximum.Value;
      document.getElementById('day4Temp').innerHTML = t.DailyForecasts[4].Temperature.Maximum.Value;
      let x = document.getElementsByClassName("day");
      for(i=0 ; i<x.length ; i++){
        /*thisr loop will determin what kind of weather belongs to each day. I decided to cut it to 5 types in order to shorten the code*/
        icon = t.DailyForecasts[i].Day.Icon;
        if(icon < 4 || icon == 5) {
          x[i].className += " sunny";
        } else if (icon == 4 || icon == 6 || icon == 20 || icon == 21){
          x[i].className += " partiallyCloudy";
        } else if((icon > 6 && icon < 12) || icon == 19) {
          x[i].className += " cloudy";
        } else if(icon > 11 && icon < 19) {
          x[i].className += " rainy";
        } else {
          x[i].className += " snowy";
        }
      }
      fehrenheitTemps = [t.DailyForecasts[0].Temperature.Maximum.Value,t.DailyForecasts[1].Temperature.Maximum.Value,t.DailyForecasts[2].Temperature.Maximum.Value,t.DailyForecasts[3].Temperature.Maximum.Value,t.DailyForecasts[4].Temperature.Maximum.Value];
      for(i=0 ; i<fehrenheitTemps.length ; i++){
        celciusTemps[i] = Math.round((fehrenheitTemps[i]-32)*(5/9));
      }
    });
}
function changeCity(city,key) {
  /*this function is in charge of changing the city if a different one was selected in the search bar*/
  if(city != currentCity){
    currentCity = city; 
    currentKey = key;
    document.getElementById('cityName').innerHTML = city;
    centerItems();
    getTemperature(key);
  
    /*checking if the new city is in the favorite list*/
    let favCity = false;
    for(i=0 ; i<favList.length ; i++){
      if (city == favList[i]){
        document.getElementById('notAFavoriteCity').className = '';
        document.getElementById('aFavoriteCity').className = 'active';
        favCity = true;
      }
    }
    /*setting the correct favorite icon*/
    if (!favCity) {
      document.getElementById('notAFavoriteCity').className = 'active';
      document.getElementById('aFavoriteCity').className = '';
    }
  }
}

function autocomplete(inp) {
  /*the autocomplete function takes the text field element:
  it's being called from the onload of the body*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
    const val = this.value;
    let y = [];
    /*I build an array of possible autocompleted values*/
    fetch("http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=Rllb6XmxXTg2cHO0LkOCZGazDzeC3qFM&q="+val)
      .then(response => response.json())
      .then(data => {
        y = data;
        const arr = y.map(city => {
            return city.LocalizedName;
        })
        var a, b, i = val;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                let key = "";
                
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                for(i=0 ; i<y.length ; i++){
                  if(inp.value == y[i].LocalizedName) {
                    key = parseInt(y[i].Key);
                  }
                }
                changeCity(document.getElementById('searchCities').value,key);
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
            }
        }
      })
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

