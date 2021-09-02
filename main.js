// stapenplan

// 1. maak de zoek-knop en -veld in HTML
// 2. maak een fucntie de verwijst naar de rest contries uri
// 3.

const inputElement = document.getElementById("special-button");
inputElement.addEventListener('click', fetchData);


async function fetchData() {
    try {
        const result = await axios.get('https://restcountries.eu/rest/v2/name/belgium');
        console.log(result.data[0]);
        console.log(result.data[0].name + " is situated in " + result.data[0].subregion + ". It has a population of " + result.data[0].population + " people. The capital is " + result.data[0].capital +".");
        const currencies = valuta(result.data[0].currencies);
        console.log(currencies);
    } catch(error) {
        console.error(error)
    }
}

// const dataFetchButton = document.getElementById("special-button");
// dataFetchButton.addEventListener("click", fetchData);
   //fetchData();

// const banaan = ["Euro, Dollar"]
// 1. declareer een functie
// 2. functie verwacht een array met valuta's
// 3. Zorg dat de functie een string maakt ongecht valuta eenheid (of 1 of 2 zijn)
// 4. Zorg dat de string geraturend word
// 5. test of de functie werkt door hen aan te roepen en te loggen in de console


function valuta (array) {
    return array
    if (array.length === 1 ) {
        return "and you can pay with " + array[0].symbol;
            } else return "and you can pay with " + array[0] + "and" + array[1].symbol;
}
// const result = valuta(banaan);
// console.log(result);

