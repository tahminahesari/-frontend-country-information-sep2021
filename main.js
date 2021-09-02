// stapenplan

// 1. maak de zoek-knop en -veld in HTML
// 2. maak een fucntie de verwijst naar de rest contries uri
// 3.

const inputElement = document.getElementById("special-button");
inputElement.addEventListener('click', fetchData);


async function fetchData() {
    try {
        const result = await axios.get('https://restcountries.eu/rest/v2/name/korea (Republic of)');
        console.log(result.data[0]);
    } catch(error) {
        console.error(error)
    }
}

const dataFetchButton = document.getElementById("special-button");
dataFetchButton.addEventListener("click", fetchData);

   //fetchData();
