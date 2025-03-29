const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const header = document.querySelector("header");
const unfilterTemples = document.getElementById("home");
const filterOldTemples = document.getElementById("old");
const filterNewTemples = document.getElementById("new");
const filterLargeTemples = document.getElementById("large");
const filterSmallTemples = document.getElementById("small");


//Event listener to toggle the open class when you click the button
hamButton.addEventListener("click", () => {
navigation.classList.toggle("open");
hamButton.classList.toggle("open");
header.classList.toggle("open");
});

let filterdTempleList = [];

function clearForFiltering() {
    filterdTempleList = [];
    document.querySelector(".photogrid").innerHTML = "";
}

unfilterTemples.addEventListener("click", function(){
    clearForFiltering();
    temples.forEach(createTempleCards);
});

filterOldTemples.addEventListener("click", function(){
    clearForFiltering();
    temples.forEach(temple => {
        let year = parseInt(temple.dedicated.substring(0, 4));
        if (year < 1900) {
            filterdTempleList.push(temple);
        }
    });
    filterdTempleList.forEach(createTempleCards);
});

filterNewTemples.addEventListener("click", function(){
    clearForFiltering();
    temples.forEach(temple => {
        let year = parseInt(temple.dedicated.substring(0, 4));
        if (year > 2000) {
            filterdTempleList.push(temple);
        }
    });
    filterdTempleList.forEach(createTempleCards);
});

filterLargeTemples.addEventListener("click", function(){
    clearForFiltering();
    temples.forEach(temple => {
        if (temple.area > 90000) {
            filterdTempleList.push(temple);
        }
    });
    filterdTempleList.forEach(createTempleCards);
});

filterSmallTemples.addEventListener("click", function(){
    clearForFiltering();
    temples.forEach(temple => {
        if (temple.area < 10000) {
            filterdTempleList.push(temple);
        }
    });
    filterdTempleList.forEach(createTempleCards);
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    // 
    {
        templeName: "Copenhagen Denmark",
        location: "Copenhagen, Denmark",
        dedicated: "2004, May, 23",
        area: 25000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/copenhagen-denmark-temple/copenhagen-denmark-temple-16169-main.jpg"
        },
        {
        templeName: "Halifax Nova Scotia",
        location: "Dartmouth, Nova Scotia",
        dedicated: "1999, November, 14",
        area: 10700,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/halifax-nova-scotia-temple/halifax-nova-scotia-temple-57120-main.jpg"
        },
        {
        templeName: "San Juan Puerto Rico",
        location: "San Juan, Puerto Rico",
        dedicated: "2023, January, 15",
        area: 6988,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/san-juan-puerto-rico-temple/san-juan-puerto-rico-temple-48152-main.jpg"
        },
  ];

  // Function to generate and append HTML to .photogrid
function addTempleFigure(templeName, location, dedicationDate, area, imageUrl) {
    
    const figure = document.createElement('figure');

    const figcaption = document.createElement('figcaption');
    figcaption.textContent = templeName;

    const dataContainer = document.createElement('div');
    dataContainer.className = 'temple-data';

    const locationData = document.createElement('p');
    locationData.textContent = `Location: ${location}}`;
    
    const dedicationData = document.createElement('p');
    dedicationData.textContent = `Dedicated: ${dedicationDate}`;
    
    const sizeData = document.createElement('p');
    sizeData.textContent = `Size: ${area} sqr feet`;

    const imgContainer = document.createElement('div');
    imgContainer.className = 'temple-image';

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = templeName;
    img.loading = 'lazy';

    figure.appendChild(dataContainer);
    dataContainer.appendChild(figcaption);
    dataContainer.appendChild(locationData);
    dataContainer.appendChild(dedicationData);
    dataContainer.appendChild(sizeData);
    figure.appendChild(imgContainer);
    imgContainer.appendChild(img);

    const photogrid = document.querySelector('.photogrid');
    if (photogrid) {
        photogrid.appendChild(figure);
    }
}

// Function to append the temple cards to the photogrid class
const createTempleCards = temple => {
    addTempleFigure(temple.templeName, temple.location, temple.dedicated, temple.area, temple.imageUrl);
};

temples.forEach(createTempleCards);

