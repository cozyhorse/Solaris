const planetList = document.querySelector(".planets");
const planetWrapper = document.querySelector(".planetWrapper");
const galaxyWrapper = document.querySelector(".galaxy-wrapper");
const infoWrapper = document.querySelector(".wrapper");

let planetNumber = 1;
//Clears localStorage on page load
localStorage.clear();
//function to fetch API_KEY and return it
const fetchKey = async () => {
  //Get KEY using POST method
  const response = await fetch(
    "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys",
    {
      method: "POST",
    }
  );

  const data = await response.json();
  console.log("fetch data: ", data.key);
  return data.key;
};

//Initialize Page using this function
const initPage = async () => {
  //We must resolve API_KEY first before we use it because API_KEY returns a promise.
  //Pass key as an argument in the get planet function to initialize page
  getPlanet(await fetchKey());
};

//Function that creates and prints out the planets.
const getPlanet = async (apiKey) => {
  //Store api key in API_KEY
  const API_KEY = apiKey;
  let resp = await fetch(
    "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies",
    {
      method: "GET",
      headers: { "x-zocom": `${API_KEY}` },
    }
  );

  const data = await resp.json();
  console.log("planets", data.bodies);
  //loop through key-value pair using .entries() on the array and assign them using "index" and "item"
  for (const [index] of data.bodies.entries()) {
    // console.log(`index: ${index}. Item: ${item.name}`);
    createRing();
    const planet = document.createElement("div");

    //Add +1 on every "planet-" class made
    planet.classList.add(`planet-${planetNumber++}`);
    planet.classList.add("planet");
    planetWrapper?.append(planet);

    //Click event on the created "planet"
    planet.addEventListener("click", () => {
      // console.log(event.target);

      //Get info on planet based on clicked index
      getInfo(index, data);
    });
  }
};

//Print out the info on each planet using this function
const getInfo = async (index, data) => {
  console.log("getInfo Data", data);
  //Using Set constructor to store unique values
  //and spread operator to convert Set into an array and store it in "uniqueMoons" as a new array with doubles removed
  let uniqueMoons = [...new Set(data.bodies[index].moons)]
    .join(" ")
    .replaceAll(" ", ", ");
  console.log("dataMoons", uniqueMoons);

  //Populate localStorage
  localStorage.setItem("planet-name", `${data.bodies[index].name}`);
  localStorage.setItem("planet-latin-name", `${data.bodies[index].latinName}`);
  localStorage.setItem("planet-description", data.bodies[index].desc);
  localStorage.setItem("planet-from-sun", `${data.bodies[index].distance} KM`);
  localStorage.setItem("planet-circumference", `${data.bodies[index].circumference} KM`);
  localStorage.setItem("planet-max-temp", `${data.bodies[index].temp.day}C`);
  localStorage.setItem("planet-min-temp", `${data.bodies[index].temp.night}C`);
  localStorage.setItem("planet-moons", uniqueMoons);
  localStorage.setItem("planet-index", index);
  console.log(localStorage);

  //redirect to planet-page
  window.location.href = "./planet-page/planetinfo.html";
};

//Create saturnus ring
const createRing = () => {
  const saturnusRing = document.createElement("div");
  const saturnus = document.querySelector(".planet-7");
  saturnusRing.classList.add("ring");
  saturnus?.append(saturnusRing);
};

//Initialize Page
initPage();
