// I thought I needed to save the reviews, so this is not needed. 
// But saving because I may come back and add the functionality
// const selectProductName = document.querySelector('#productName');
// const radioStar1 = document.querySelector('#1star');
// const radioStar2 = document.querySelector('#2star');
// const radioStar3 = document.querySelector('#3star');
// const radioStar4 = document.querySelector('#4star');
// const radioStar5 = document.querySelector('#5star');
// const checkDurability = document.querySelector('#durability');
// const checkEaseOfUse = document.querySelector('#easeOfUse');
// const checkPerformance = document.querySelector('#performance');
// const checkDesign = document.querySelector('#design');
// const textboxWrittenReview = document.querySelector('#writtenReview');
// const textboxUserName = document.querySelector('#userName');
const form = document.querySelector("form");

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

// Populate Product Name select element
const productSelect = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Print to the console for debuging
// let reviewCount = getReviewCount() || 0;

// console.log(reviewCount);


function setRevewCount() {
    localStorage.setItem('reviewCount', JSON.stringify(reviewcount));
  }
  
function getReviewCount() {
    return JSON.parse(localStorage.getItem('reviewCount'));
}

form.addEventListener("submit", function (event) {

    if (form.checkValidity()) {
        
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCount = Number(reviewCount) + 1;
        localStorage.setItem('reviewCount', reviewCount);
    }
});