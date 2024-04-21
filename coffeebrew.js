// Create list of brewing methods
let brewMethods = ["French Press", "Pour Over", "AeroPress", "Espresso", "Cold Brew", "Drip Brew", "Moka Pot", "Turkish Coffee"];

// Function to display all the brewing methods and hide the info text
function Start() {
    //Changing header text
    var text = "Choose a Method to brew";
    document.getElementById("head-text").innerText = text;

    //Hiding the info text
    document.getElementById("option0").style.display = "none";
    document.getElementById("reset").style.display = "none";
    document.getElementById("info-text").style.display = "none";

    // Displaying each brewing Method
    for (var i = 0; i < brewMethods.length; i++) {
        document.getElementById("option" + (i + 1)).innerText = brewMethods[i];
        document.getElementById("option" + (i + 1)).style.display = "block";
    }
}

// hides all the brewing methods and the reset button
function clearOptions() {
    for (var i = 0; i < brewMethods.length; i++) {
        document.getElementById("option" + (i + 1)).style.display = "none";
        document.getElementById("reset").style.display = "none";
    }
}

// Function to change the header text to the text as an input
function changeHeader(text) {
    document.getElementById("head-text").innerText = text;
    document.getElementById("reset").style.display = "block";
}

// Function to change the info text to the text as an input
function changeInfo(text) {
    document.getElementById("info-text").style.display = "block";
    document.getElementById("info-text").innerText = text;

}

// Functions for each brewing methods information
function FrenchPress() {
    clearOptions();
    changeHeader(brewMethods[0]);
    changeInfo("The French Press is a classic method of brewing coffee. It is a full immersion brewing method, which means that the coffee grounds are fully submerged in water for the entire brewing process. The French Press is known for its rich and full-bodied coffee, with a strong and bold flavor. To brew coffee with a French Press, you will need coarsely ground coffee beans, hot water, and a French Press coffee maker. The process involves steeping the coffee grounds in hot water for several minutes, and then pressing down a plunger to separate the grounds from the brewed coffee. The result is a delicious and aromatic cup of coffee that is perfect for enjoying on a lazy morning or as an afternoon pick-me-up.");
}

function PourOver() {
    clearOptions();
    changeHeader(brewMethods[1]);
    changeInfo("The Pour Over method is a popular way to brew coffee that produces a clean and flavorful cup of coffee. It is a manual brewing method that involves pouring hot water over coffee grounds in a filter, allowing the water to drip through and extract the flavors of the coffee. The Pour Over method is known for its ability to highlight the unique flavors and aromas of different coffee beans, making it a favorite among coffee enthusiasts. To brew coffee with a Pour Over, you will need a Pour Over dripper, paper filters, coarsely ground coffee beans, and hot water. The process involves blooming the coffee grounds with a small amount of water, and then slowly pouring the rest of the water over the grounds in a circular motion. The result is a delicious and aromatic cup of coffee that is perfect for savoring and enjoying.");
}

function AeroPress() {
    clearOptions();
    changeHeader(brewMethods[2]);
    changeInfo("The AeroPress is a versatile and easy-to-use method of brewing coffee that produces a smooth and rich cup of coffee. It is a manual brewing method that uses air pressure to extract the flavors of the coffee, resulting in a clean and flavorful cup of coffee. The AeroPress is known for its ability to brew coffee quickly and efficiently, making it a favorite among coffee lovers who are short on time. To brew coffee with an AeroPress, you will need an AeroPress coffee maker, paper filters, coarsely ground coffee beans, and hot water. The process involves steeping the coffee grounds in hot water for a short period of time, and then pressing down a plunger to extract the brewed coffee. The result is a delicious and aromatic cup of coffee that is perfect for enjoying on the go or at home.");
}

function Espresso() {
    clearOptions();
    changeHeader(brewMethods[3]);
    changeInfo("Espresso is a strong and concentrated form of coffee that is brewed by forcing hot water through finely ground coffee beans. It is a popular brewing method that is known for its rich and intense flavor, as well as its thick and creamy crema. Espresso is the base for many coffee drinks, such as lattes, cappuccinos, and macchiatos, and is a favorite among coffee lovers who enjoy a bold and flavorful cup of coffee. To brew espresso, you will need an espresso machine, finely ground coffee beans, and hot water. The process involves tamping the coffee grounds into a portafilter, and then brewing the coffee under high pressure for a short period of time. The result is a delicious and aromatic shot of espresso that is perfect for enjoying on its own or as the base for your favorite coffee drink.");
}

function ColdBrew() {
    clearOptions();
    changeHeader(brewMethods[4]);
    changeInfo("Cold Brew coffee is a smooth and refreshing way to enjoy coffee that is brewed with cold water over an extended period of time. It is a popular brewing method that is known for its low acidity and smooth flavor profile, making it a favorite among coffee lovers who prefer a milder and less bitter cup of coffee. Cold Brew coffee is typically brewed using a cold brew coffee maker or a simple mason jar, and is made by steeping coarsely ground coffee beans in cold water for 12-24 hours. The result is a delicious and aromatic cup of coffee that is perfect for enjoying over ice on a hot summer day or as a refreshing pick-me-up any time of year.");
}

function DripBrew() {   
    clearOptions();
    changeHeader(brewMethods[5]);
    changeInfo("Drip Brew coffee is a classic and popular way to brew coffee that is made using an automatic drip coffee maker. It is a convenient and easy-to-use brewing method that produces a smooth and flavorful cup of coffee. Drip Brew coffee is known for its consistent and reliable results, making it a favorite among coffee lovers who enjoy a no-fuss cup of coffee. To brew coffee with a Drip Brew coffee maker, you will need coarsely ground coffee beans, a paper filter, and hot water. The process involves adding the coffee grounds to the filter, adding water to the reservoir, and then turning on the coffee maker to brew the coffee. The result is a delicious and aromatic cup of coffee that is perfect for enjoying on a busy morning or as a quick and easy pick-me-up any time of day.");
}

function MokaPot() {
    clearOptions();
    changeHeader(brewMethods[6]);
    changeInfo("The Moka Pot is a stovetop coffee maker that brews coffee by passing boiling water pressurized by steam through ground coffee. It is a popular brewing method that produces a strong and flavorful cup of coffee that is similar to espresso, but with a milder flavor profile. The Moka Pot is known for its rich and aromatic coffee, as well as its ability to brew coffee quickly and efficiently. To brew coffee with a Moka Pot, you will need a Moka Pot coffee maker, finely ground coffee beans, and hot water. The process involves filling the bottom chamber of the Moka Pot with water, adding coffee grounds to the filter basket, and then placing the Moka Pot on the stovetop to brew the coffee. The result is a delicious and aromatic cup of coffee that is perfect for enjoying on its own or as the base for your favorite coffee drink.");
}

function TurkishCoffee() {
    clearOptions();
    changeHeader(brewMethods[7]);
    changeInfo("Turkish Coffee is a traditional method of brewing coffee that is known for its strong and rich flavor, as well as its thick and frothy texture. It is a popular brewing method in Turkey and other Middle Eastern countries, and is enjoyed for its unique and aromatic taste. Turkish Coffee is made by boiling finely ground coffee beans with water and sugar in a special pot called a cezve, and then pouring the coffee into small cups to serve. The coffee is typically brewed with cardamom or other spices to add flavor, and is enjoyed with a small glass of water to cleanse the palate. Turkish Coffee is a delicious and aromatic way to enjoy coffee that is perfect for savoring and enjoying with friends and family.");
}


// Event listeners for each brewing method button
var option0 = document.getElementById("option0");
option0.addEventListener("click", Start);

var option1 = document.getElementById("option1");
option1.addEventListener("click", FrenchPress);

var option2 = document.getElementById("option2");
option2.addEventListener("click", PourOver);

var option3 = document.getElementById("option3");
option3.addEventListener("click", AeroPress);

var option4 = document.getElementById("option4");
option4.addEventListener("click", Espresso);

var option5 = document.getElementById("option5");
option5.addEventListener("click", ColdBrew);

var option6 = document.getElementById("option6");
option6.addEventListener("click", DripBrew);

var option7 = document.getElementById("option7");
option7.addEventListener("click", MokaPot);

var option8 = document.getElementById("option8");
option8.addEventListener("click", TurkishCoffee);

var reset = document.getElementById("reset");
reset.addEventListener("click", Start);