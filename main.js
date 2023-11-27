
let API_KEY = fetch(
  "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys",
  {
    method: "POST",
  }
)
  .then((response) => response.json())
  .then((data) => {
    console.log("fetch data: ", data.key);
    const API_KEY = data.key;
    return API_KEY;
  });


API_KEY.then(requestedKey => {
    console.log("requestedKey: ", requestedKey);
    getInfo(requestedKey);

})



const getPlanet = async (apiKey) => {
    let resp = await fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
    method: 'GET',
    headers: {'x-zocom':`${apiKey}`}
})

const data = await resp.json()
console.log("planets", data);

}

//getInfo()

