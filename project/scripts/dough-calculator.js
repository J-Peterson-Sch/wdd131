function updateIngredientQuantities(event) {
    // Prevent the default form submission
    event.preventDefault();
    calculateQuantities();
}

function calculateQuantities() {
    const numCrusts = parseInt(document.getElementById('numCrusts').value);
    const diameter = parseInt(document.getElementById('diameter').value);
    
    // Dough weight for 12-inch and 14-inch crusts
    const doughWeight = diameter === 12 ? 250 : 350;
    
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
    document.getElementById('apFlour').textContent = `All Purpose Flour: ${apFlour.toFixed(0)}g`;
    document.getElementById('ooFlour').textContent = `OO Flour: ${ooFlour.toFixed(0)}g`;
    document.getElementById('water').textContent = `Water: ${water.toFixed(0)}g`;
    document.getElementById('salt').textContent = `Salt: ${salt.toFixed(1)}g`;
    document.getElementById('yeast').textContent = `Instant Yeast: ${yeast.toFixed(1)}g`;
    
    document.getElementById('results').style.display = 'block';
}

calculateQuantities();