// Selecting the elements for the nav menu and the search box
const navOpenBtn = document.querySelector('.navOpenBtn');
const navCloseBtn = document.querySelector('.navCloseBtn');
const navLinks = document.querySelector('.nav-links');
const searchIcon = document.getElementById('searchIcon');
const searchBox = document.getElementById('searchBox');

// Open the nav when navOpenBtn is clicked
navOpenBtn.addEventListener('click', () => {
    navLinks.style.display = 'block';
    navOpenBtn.style.display = 'none';
});

// Close the nav when navCloseBtn is clicked
navCloseBtn.addEventListener('click', () => {
    navLinks.style.display = 'none';
    navOpenBtn.style.display = 'block';
});


