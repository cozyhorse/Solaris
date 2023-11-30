//test
const planetName = document.querySelector("#planet-name");
const backBtn = document.querySelector("#back")

planetName.textContent = localStorage.getItem("planet-name")

backBtn.addEventListener("click", () => {
    localStorage.clear()
    window.location.href = "./index.html"
}) 