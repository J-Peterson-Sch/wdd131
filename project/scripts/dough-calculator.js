function updateIngredientQuantities(event) {
    // Prevent the default form submission
    event.preventDefault();
    calculateQuantities();
}

function calculateQuantities() {
    const numCrusts = parseInt(document.getElementById('numCrusts').value);
    const diameter = parseInt(document.getElementById('diameter').value);
    
    let doughWeight;
    if (diameter === 10) {
        doughWeight = 175
    }
    else if (diameter === 12){
        doughWeight = 250
    }
    else if (diameter === 14){
        doughWeight = 350
    }
    else if (diameter === 16){
        doughWeight = 350
    }
    
    
    // Calculate total dough needed
    const totalDough = numCrusts * doughWeight;
    
    // Proportionate ingredient amounts based on a total dough required for the recipe (1470g)
    const ratio = totalDough / 2506; 
    
    // Calculate ingredients based on ratio
    const apFlour = 735 * ratio;
    const ooFlour = 735 * ratio;
    const water = 1000 * ratio;
    const salt = 30 * ratio;
    const yeast = 6 * ratio;
    
    // Display results
    document.getElementById('apFlour').textContent = `${apFlour.toFixed(0)}g All Purpose Flour`;
    document.getElementById('ooFlour').textContent = `${ooFlour.toFixed(0)}g OO Flour`;
    document.getElementById('water').textContent = `${water.toFixed(0)}g Water`;
    document.getElementById('salt').textContent = `${salt.toFixed(1)}g Salt`;
    document.getElementById('yeast').textContent = `${yeast.toFixed(1)}g Instant Yeast`;
    
    document.getElementById('results').style.display = 'block';
}

calculateQuantities();