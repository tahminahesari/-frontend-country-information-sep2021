// stappenplan
// 1. maak de zoek-knop en -veld in HTML
// 2. maak een functie die verwijst naar de rest countries uri
// 3.
const dataFetchButton = document.getElementById("special-button");
dataFetchButton.addEventListener("click", fetchData);

async function fetchData() {
    try {
        const {value} = document.getElementById("query")
        console.log(value)
        const result = await axios.get('https://restcountries.eu/rest/v2/name/' + value);//belgium //south%20africa zimbabwe
        console.log(result.data[0]);
        console.log(result.data[0].name + " is situated in " + result.data[0].subregion + ". It has a population of " + result.data[0].population + " people. The capital is " + result.data[0].capital);
        const currencies = valuta(result.data[0].currencies);
        const languages = language(result.data[0].languages);
        // console.log("hoeveel talen zijn er? " + result.data[0].languages.length);
        console.log(currencies);
        console.log(languages);
        document.getElementById("text").innerHTML = '<img height="100px" src="' + result.data[0].flag + '"/><br>' + '<h3>' + result.data[0].name + '</h3>' + result.data[0].name + " is situated in " + result.data[0].subregion + ". It has a population of " + result.data[0].population + " people. The capital is " + result.data[0].capital +"" + currencies + "<br>" +  languages

        // document.getElementById("text").innerHTML =

    } catch (error) {
        console.error(error)
    }
}

// const banaan = ["Euro", "Dollar"]
// 1. declareer een functie
// 2. functie verwacht een array met valuta's
// 3. de functie maakt een string van de valuta's ongeacht of het er een of twee zijn.
// 4. zorg dat de string gereturned wordt
// 5. test of de functie werkt door hem aan te roepen en te loggen in de  console
function valuta (array) {
    let tekst2 = " en je kan betalen met de volgende valuta: ";
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i].name)
        tekst2 = tekst2 + array[i].name
        if (i === array.length - 2) {
            tekst2 = tekst2 + " and "
        } else if (i < array.length -2) {
            tekst2 = tekst2 + ", ";
        }
    }
    tekst2 = tekst2 + ".";
    return tekst2;
    //
    // if (array.length === 1) {
    //     return " and you can pay with " + array[0].name + ".";
    // } else return " and you can pay with " + array[0].name + " and " + array[1].name + ".";
}
// const result = valuta(banaan);
// console.log(result);
//    fetchData();
// 1. declareer een functie
// 2. functie verwacht een array met talen
// 3. de functie maakt een string van de taal ongeacht hoeveel het er zijn
// 4. return de string
// 5. test de functie
function language (array) {
    let tekst = "They speak ";
    for (let i = 0; i < array.length; i++) {
        // if (array.length <= 0) {
        // console.log("They speak " + array[i].name);
        tekst = tekst + array[i].name;
        if (i == array.length - 2){  // als het de laatste is, zet er dan AND tussen
            tekst = tekst + " and ";
        } else if (i < array.length - 2) { // als het niet de laatste is, zet er dan een komma tussen
            tekst = tekst + ", ";
        }
    }
    tekst = tekst + ".";
    return tekst;
}
//
// 1 taal: They speak [language]
// 2 talen: They speak [language] and [language]
// 3 talen: They speak [language], [language] and [language]