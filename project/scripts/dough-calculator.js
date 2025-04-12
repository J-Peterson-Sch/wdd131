const doughBalls = [
    {   
        size:"Personal",
        diameter: 10,
        weight:175
    },
    {   
        size:"Small",
        diameter: 12,
        weight:250
    },
    {
        size:"Medium",
        diameter: 14,
        weight:350
    },
    {
        size:"Large",
        diameter: 16,
        weight:450
    },
    {
        size:"Extra Large",
        diameter: 18,
        weight:580
    }
]

const crustDiaDropDown = document.getElementById('crust-diameter');

function populateDropDown(doughBalls) {

    crustDiaDropDown.innerHTML = "";

    doughBalls.forEach(element => { // <=== This is an array method
        const option = document.createElement('option');
        option.text = `${element.size} - ${element.diameter} inches`;
        option.value = element.weight;
        crustDiaDropDown.add(option);
    });
}

function updateIngredientQuantities(event) {
    event.preventDefault();
    calculateQuantities();
}

function calculateQuantities() {
    const numCrusts = parseInt(document.getElementById('numCrusts').value);
    const doughWeight = parseInt(document.getElementById('crust-diameter').value);
    
    const totalDough = numCrusts * doughWeight;
    
    const ratio = totalDough / 2506; 
    
    const apFlour = 735 * ratio;
    const ooFlour = 735 * ratio;
    const water = 1000 * ratio;
    const salt = 30 * ratio;
    const yeast = 6 * ratio;
    
    document.getElementById('apFlour').textContent = `${apFlour.toFixed(0)}g All Purpose Flour`;
    document.getElementById('ooFlour').textContent = `${ooFlour.toFixed(0)}g OO Flour`;
    document.getElementById('water').textContent = `${water.toFixed(0)}g Water`;
    document.getElementById('salt').textContent = `${salt.toFixed(1)}g Salt`;
    document.getElementById('yeast').textContent = `${yeast.toFixed(1)}g Instant Yeast`;
    
    document.getElementById('results').style.display = 'block';
}

populateDropDown(doughBalls);
calculateQuantities();