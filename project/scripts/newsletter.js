const newsletterContent = document.getElementById('form-content');
const newsletterThankYou = document.getElementById('newsletter-sign-up-thank-you');
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    if (form.checkValidity()) {
        
        let formSubmitted = localStorage.getItem('newsletterRequested') || false;
        formSubmitted = true;
        localStorage.setItem('newsletterRequested', formSubmitted);
    }
});

let formSubmitted = localStorage.getItem('newsletterRequested') || false;

if (formSubmitted){
    newsletterContent.style.display = 'none';
    newsletterThankYou.classList.toggle('hidden');
}