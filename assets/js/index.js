const countryOneLocalPrice = 5.71
let countryOne = "United States" 
let countryCurrencyOne = "USD"
let countryOneResult = 1 * countryOneLocalPrice
console.log("For 1 Burgers the price in :" + countryOne + " " + "is:" + " " + countryOneResult + " " + countryCurrencyOne)

const countryTwoLocalPrice = 4.21
let countryTwo = "European Union" 
let countryCurrencyTwo = "EUR"
let countryTwoResult = 1 * countryTwoLocalPrice
console.log("For 1 Burgers the price in :" + countryTwo + " " + "is:" + " " + countryTwoResult + " " + countryCurrencyTwo)

const countryThreeLocalPrice = 21.7
let countryThree = "China" 
let countryCurrencyThree = "CNY"
let countryThreeResult = 1 * countryThreeLocalPrice
console.log("For 1 Burgers the price in :" + countryThree + " " + "is:" + " " + countryThreeResult + " " + countryCurrencyThree)

const countryFourLocalPrice = 390.0
let countryFour = "Japan" 
let countryCurrencyFour = "JPY"
let countryFourResult = 1 * countryFourLocalPrice
console.log("For 1 Burgers the price in :" + countryFour + " " + "is:" + " " + countryFourResult + " " + countryCurrencyFour)

const countryFiveLocalPrice = 190.0
let countryFive = "India" 
let countryCurrencyFive = "INR"
let countryFiveResult = 1 * countryFiveLocalPrice
console.log("For 1 Burgers the price in :" + countryFive + " " + "is:" + " " + countryFiveResult + " " + countryCurrencyFive)

const countrySixLocalPrice = 3.39
let countrySix = "United Kingdom" 
let countryCurrencySix = "GBP"
let countrySixResult = 1 * countrySixLocalPrice
console.log("For 1 Burgers the price in :" + countrySix + " " + "is:" + " " + countrySixResult + " " + countryCurrencySix)

console.log("Is : " + " " + countryFourResult + ">" +  countrySixResult + " " + "???")
console.log(countryFourResult > countrySixResult)

let purchasingPowerParityOne = countryOneResult / countryTwoResult
console.log("Comparing Exchange Rates:" + purchasingPowerParityOne.toFixed(2) + " " + "1 pound is 1.34 dollar ratio")
let exchangeRatioOne = ((1.34 - 1.56) / 1.56)
let FinalResultOne = exchangeRatioOne / purchasingPowerParityOne * 100;
console.log("The overvalue of USA Dollar to Pound is : " + " " + FinalResultOne.toFixed(2) + "%")
