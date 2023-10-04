const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgradeClickButton = document.getElementById("upgradeClickButton")
const upgradeAutoClickButton = document.getElementById("upgradeAutoClickButton")

let numberOfCookies = 0;
let clickIncrease = 1;
let autoclickIncrease = 0;
let autoclicker;
let autoclickerPrice = 100;

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
upgradeAutoClickButton.onclick = () => {
    if(numberOfCookies >= autoclickerPrice){
        //odectu cenu
        numberOfCookies -= autoclickerPrice;

        //aktulizuji odstavec
        counter.innerHTML = "Cookies: " + numberOfCookies;
        autoclickerPrice +=100;
        upgradeAutoClickButton.innerText = "Buy autoclick upgrade: " + autoclickerPrice;
        //zvedneme autoclicker hodnotu
        autoclickIncrease++;
        //zastaveni intervalu
        clearInterval(autoclicker);

        //opakovani po case pro pridavani susenky
        autoclicker = setInterval(()=>{
            numberOfCookies += autoclickIncrease;
            counter.innerHTML = "Cookies: " + numberOfCookies;
        }, 1000);
    }
};

const turnOnCheats = () => {
    numberOfCookies+= 1000000;
    counter.innerText = "Cookies" + numberOfCookies;

}

turnOnCheats();

function turnOnSuperCheats(){
    numberOfCookies+= 10000000;
    counter.innerText = "Cookies: " + numberOfCookies
}