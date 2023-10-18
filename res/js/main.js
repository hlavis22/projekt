const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgradeClickButton = document.getElementById("upgradeClickButton")
const upgradeAutoClickButton = document.getElementById("upgradeAutoClickButton")

let numberOfCookies = 0;
let clickIncrease = 1;
let clickUpgradePrice = 50;
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
    counter.innerHTML = "Ten Hags: " + numberOfCookies;
}

upgradeClickButton.onclick = () => {
    if (numberOfCookies >= clickUpgradePrice) {
     //odectu cenu ugradu
     numberOfCookies -= clickUpgradePrice;
     //numberOfCookies - 50;
     counter.innerHTML = "Ten Hags: " + numberOfCookies;
     clickUpgradePrice+= 50;
     upgradeClickButton.innerText = "Buy click upgrade:" + clickUpgradePrice;
     clickIncrease++;
    }
}
upgradeAutoClickButton.onclick = () => {
    if(numberOfCookies >= autoclickerPrice){
        //odectu cenu
        numberOfCookies -= autoclickerPrice;

        //aktulizuji odstavec
        counter.innerHTML = "Ten Hags: " + numberOfCookies;
        autoclickerPrice +=100;
        upgradeAutoClickButton.innerText = "Buy autoclick upgrade: " + autoclickerPrice;
        //zvedneme autoclicker hodnotu
        autoclickIncrease++;
        //zastaveni intervalu
        clearInterval(autoclicker);

        //opakovani po case pro pridavani susenky
        autoclicker = setInterval(()=>{
            numberOfCookies += autoclickIncrease;
            counter.innerHTML = "Ten Hags: " + numberOfCookies;
        }, 1000);
    }
};
/*
const turnOnCheats = () => {
    numberOfCookies+= 1000000;
    counter.innerText = "Cookies" + numberOfCookies;

}

turnOnCheats();

function turnOnSuperCheats(){
    numberOfCookies+= 10000000;
    counter.innerText = "Cookies: " + numberOfCookies
}*/