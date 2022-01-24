// ELEMENTS

const darkModeToggler = document.getElementById('dark-mode-toggler');

const burger = document.getElementById('burger');
const nav = document.getElementById('navigation');
const navLinks = document.querySelectorAll('.nav-link');

const heroSection = document.querySelector('.hero-section');

// FUNCTIONS 

function toggleNav() {
    nav.classList.toggle('nav-active');
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function warning(message) {
    alert(message)
}

async function getData(url) {
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log("You've got and error!:", error);
        })
}

// EVENT LISTENERS 

burger.addEventListener('click', toggleNav);
darkModeToggler.addEventListener('click', toggleDarkMode);

const greet = console.log('hola')

module.exports = {
    greet
}