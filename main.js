//Hämtar nycklen och lägger den i en variabel
let API_KEY = fetch(
  "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys",
  {
    method: "POST",
  }
)
  .then((response) => response.json())
  .then((data) => {
    console.log("fetch data: ", data.key);
    return data.key
  });


//Pga att API_KEY returnerar en promise så måste vi resolve:a den först innan vi får nyckeln vilket vi kan göra med then.
//Sen placera in nyckeln som en variabel i funktionen där vi vill använda den.
API_KEY.then(requestedKey => {
    console.log("requestedKey: ", requestedKey);
    getPlanet(requestedKey);

})




const getPlanet = async (apiKey) => {
    let resp = await fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
    method: 'GET',
    headers: {'x-zocom':`${apiKey}`}
})

const data = await resp.json()
console.log("planets", data);

}


