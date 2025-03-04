const copywriteText = document.querySelector("#currentyear");
const lastModifiedText = document.querySelector("#lastModified");

const currentYear = new Date().getFullYear();
const currentDate = new Date().toLocaleString();

copywriteText.innerHTML = `&copy;${currentYear}<span > Jordan Peterson USA</span>`;
lastModifiedText.innerHTML = `Last Modification: ${currentDate}`;