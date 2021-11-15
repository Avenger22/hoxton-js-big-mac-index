//Country One Data
const countryOneLocalPrice = 5.71
let countryOne = "United States" 
let countryCurrencyOne = "USD"
let countryOneResult = 1 * countryOneLocalPrice
console.log("For 1 Burgers the price in :" + countryOne + " " + "is:" + " " + countryOneResult + " " + countryCurrencyOne)
//Country Two Data
const countryTwoLocalPrice = 4.21
let countryTwo = "European Union" 
let countryCurrencyTwo = "EUR"
let countryTwoResult = 1 * countryTwoLocalPrice
console.log("For 1 Burgers the price in :" + countryTwo + " " + "is:" + " " + countryTwoResult + " " + countryCurrencyTwo)
//Country Three Data
const countryThreeLocalPrice = 21.7
let countryThree = "China" 
let countryCurrencyThree = "CNY"
let countryThreeResult = 1 * countryThreeLocalPrice
console.log("For 1 Burgers the price in :" + countryThree + " " + "is:" + " " + countryThreeResult + " " + countryCurrencyThree)
//Country Four Data
const countryFourLocalPrice = 390.0
let countryFour = "Japan" 
let countryCurrencyFour = "JPY"
let countryFourResult = 1 * countryFourLocalPrice
console.log("For 1 Burgers the price in :" + countryFour + " " + "is:" + " " + countryFourResult + " " + countryCurrencyFour)
//Country Five Data
const countryFiveLocalPrice = 190.0
let countryFive = "India" 
let countryCurrencyFive = "INR"
let countryFiveResult = 1 * countryFiveLocalPrice
console.log("For 1 Burgers the price in :" + countryFive + " " + "is:" + " " + countryFiveResult + " " + countryCurrencyFive)
//Country Six Data
const countrySixLocalPrice = 3.39
let countrySix = "United Kingdom" 
let countryCurrencySix = "GBP"
let countrySixResult = 1 * countrySixLocalPrice
console.log("For 1 Burgers the price in :" + countrySix + " " + "is:" + " " + countrySixResult + " " + countryCurrencySix)

//Test comparasion 
console.log("Is : " + " " + countryFourResult + ">" +  countrySixResult + " " + "???")
console.log(countryFourResult > countrySixResult)

//Calculating the index betwen two coutries in this case USA AND UK country1 and country6
let purchasingPowerParityOne = countryOneResult / countrySixResult
const countryOneSixExchangeRatio = 1.34

console.log("Comparing Exchange Rates:" + purchasingPowerParityOne.toFixed(2) + " " + "1 pound is 1.34 dollar ratio")
let indexFinalOne = ((countryOneSixExchangeRatio - purchasingPowerParityOne) / purchasingPowerParityOne)
let FinalResultOne = indexFinalOne * 100;

console.log("The overvalue of USA Dollar to Pound is : " + " " + FinalResultOne.toFixed(2) + "%")

//Calculating the index betwen two coutries in this case JAPAN AND CHINA country4 and country3
let purchasingPowerParityTwo = countryFourResult / countryThreeResult
const countryFourThreeExchangeRatio = 17.81

console.log("Comparing Exchange Rates:" + purchasingPowerParityOne.toFixed(2) + " " + "1 pound is 1.34 dollar ratio")
let indexFinalTwo= ((countryFourThreeExchangeRatio - purchasingPowerParityTwo) / purchasingPowerParityTwo)
let FinalResultTwo = indexFinalTwo * 100;

console.log("The overvalue of TENI JAPANESE to Chinese Currency is : " + " " + FinalResultTwo.toFixed(2) + "%")
