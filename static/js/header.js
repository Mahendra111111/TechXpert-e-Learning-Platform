// Search Box Toggle
const searchIcon = document.getElementById('searchIcon');
const searchBox = document.getElementById('searchBox');
const nav = document.querySelector('.nav');

searchIcon.addEventListener('click', () => {
  nav.classList.toggle('openSearch');
});

// Close Popup
const popup = document.getElementById('popup');
const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Handle Search Results
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
  const query = searchInput.value.trim();
  if (query) {
    showPopupResults(query);
  } else {
    popup.style.display = 'none';
  }
});

function showPopupResults(query) {
  const results = document.getElementById('results');
  results.innerHTML = ''; // Clear existing results

  // Simulating search results
  const sampleResults = [
    `Result for "${query} 1"`,
    `Result for "${query} 2"`,
    `Result for "${query} 3"`
  ];

  sampleResults.forEach(result => {
    const resultItem = document.createElement('div');
    resultItem.className = 'card';
    resultItem.textContent = result;
    results.appendChild(resultItem);
  });

  popup.style.display = 'block'; // Show popup
}
