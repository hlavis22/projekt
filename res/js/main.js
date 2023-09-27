const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgradeClickButton = document.getElementById("upgradeClickButton")

let numberOfCookies = 0;
let clickIncrease = 1;

// {} - scope
cookie.onclick = () => {
    console.log("click");
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies += 1;
    // ++ inkrement
    numberOfCookies+= clickIncrease;
    console.log(numberOfCookies);
    counter.innerHTML = "Cookies: " + numberOfCookies;
}

upgradeClickButton.onclick = () => {
    if (numberOfCookies >= 50) {
     //odectu cenu ugradu
     numberOfCookies -= 50;
     //numberOfCookies - 50;
     counter.innerHTML = "Cookies: " + numberOfCookies;
     //
     clickIncrease++;
    }
}