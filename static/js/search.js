
document.addEventListener('DOMContentLoaded', () => {
  const navOpenBtn = document.getElementById('navOpenBtn');
  const navCloseBtn = document.getElementById('navCloseBtn');
  const navLinks = document.getElementById('navLinks');

  // Toggle navbar (hamburger) for small screens
  navOpenBtn.addEventListener('click', () => {
    navLinks.style.left = '-140px';
  });

  navCloseBtn.addEventListener('click', () => {
    navLinks.style.left = '-100%';
  });

  // Toggle search box visibility
  searchIcon.addEventListener('click', () => {
    searchBox.style.display = searchBox.style.display === 'none' ? 'block' : 'none';
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const searchIcon = document.getElementById('searchIcon');
  const searchBox = document.getElementById('searchBox');

  // Toggle the visibility of the search box when clicking the search icon
  searchIcon.addEventListener('click', () => {
    searchBox.classList.toggle('show'); // Add/remove the "show" class
  });
});