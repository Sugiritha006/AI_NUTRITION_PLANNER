let selectedRegion = null;

function selectRegion(region) {
  selectedRegion = region;
  localStorage.setItem("region", region);
  alert(region + " cuisine selected");
}

function goToResults() {
  if (!selectedRegion) {
    alert("Please select a cuisine");
    return;
  }
  window.location.href = "results.html";
}

// ----- MOCK DATA (REMOVE WHEN API CONNECTED) -----
const mockData = [
  {
    name: "Dal Tadka",
    calories: 120,
    protein: 7,
    region: "Punjabi",
    image: "https://via.placeholder.com/300"
  },
  {
    name: "Paneer Tikka",
    calories: 260,
    protein: 18,
    region: "Punjabi",
    image: "https://via.placeholder.com/300"
  }
];

// ----- RENDER RESULTS -----
if (window.location.pathname.includes("results.html")) {
  const region = localStorage.getItem("region");
  const grid = document.getElementById("foodGrid");

  const filtered = mockData.filter(item => item.region === region);

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "food-card";

    card.innerHTML = `
      <img src="${item.image}" />
      <h3>${item.name}</h3>
      <p>Calories: ${item.calories} kcal</p>
      <p>Protein: ${item.protein} g</p>
      <small>${item.region}</small>
    `;

    grid.appendChild(card);
  });
}
