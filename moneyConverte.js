// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (dollar) => {
    const euro = dollar / oneEuroIs.USD;
    const yen = euro * oneEuroIs.JPY;
    return yen;
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD;
}

const YentoPound = (yen) => {
    const euro = yen / oneEuroIs.JPY;
    const pound = euro * oneEuroIs.GBP;
    return pound;
}