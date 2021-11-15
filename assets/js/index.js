//Country One Data
const countryOneLocalPrice = 5.65
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
const countryThreeLocalPrice = 22.4
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
const countrySixLocalPrice = 3.49
let countrySix = "United Kingdom" 
let countryCurrencySix = "GBP"
let countrySixResult = 1 * countrySixLocalPrice
console.log("For 1 Burgers the price in :" + countrySix + " " + "is:" + " " + countrySixResult + " " + countryCurrencySix)

//Test comparasion 
console.log("Is : " + " " + countryFourResult + ">" +  countrySixResult + " " + "???")
console.log(countryFourResult > countrySixResult)

//Calculating the index betwen two coutries in this case USA AND UK country1 and country6
let purchasingPowerParityOne = countryOneResult / countrySixResult
const countryOneSixExchangeRatio = 1.36

console.log("Comparing Exchange Rates:" + purchasingPowerParityOne.toFixed(2) + " " + "1 pound is 1.36 dollar ratio")
let indexFinalOne = ((purchasingPowerParityOne - countryOneSixExchangeRatio) / countryOneSixExchangeRatio)
let FinalResultOne = indexFinalOne * 100;

console.log("The overvalue of USA Dollar to Pound is where pound is base currency : " + " " + FinalResultOne.toFixed(2) + "%")

//Calculating the index betwen two coutries in this case JAPAN AND CHINA country4 and country3
let purchasingPowerParityTwo =countryFourResult / countryThreeResult
const countryFourThreeExchangeRatio = 16.97

console.log("Comparing Exchange Rates:" + purchasingPowerParityTwo.toFixed(2) + " " + "1 Juan Chinese to 16.79 YEN Japanese ratio")
let indexFinalTwo= ((purchasingPowerParityTwo- countryFourThreeExchangeRatio) / countryFourThreeExchangeRatio)
let FinalResultTwo = indexFinalTwo * 100;

console.log("The overvalue of YEN JAPANESE where chinese is the base currency to Chinese Currency is : " + " " + FinalResultTwo.toFixed(2) + "%")

//Calculating the index betwen two coutries in this case JAPAN AND CHINA country4 and country3
let purchasingPowerParityThree = 5.74
const countryThreeFourExchangeRatio = 5.89

console.log("Comparing Exchange Rates:" + purchasingPowerParityThree.toFixed(2) + " " + "1 Juan Chinese to 16.79 YEN Japanese ratio")
let indexFinalThree= ((purchasingPowerParityThree - countryThreeFourExchangeRatio) / countryThreeFourExchangeRatio)
let FinalResultThree = indexFinalThree * 100;

console.log("The overvalue of Chinese yan where japanese yen is the base currency to Chinese Currency is : " + " " + FinalResultThree.toFixed(2) + "%")

//So for each comparasion of index you either choose 1 as base and change the formula to not shot -% etc but the logic remains overvalus and undervalus of two currencys