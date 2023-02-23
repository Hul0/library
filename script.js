const searchInput = document.getElementById('search');
const items = document.querySelectorAll('.item');

searchInput.addEventListener('keyup', function() {
  const searchTerm = searchInput.value.toLowerCase();
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});
const h1Elements = document.querySelectorAll('h1');

// Add an event listener to the search input
searchInput.addEventListener('keyup', function() {
  // Loop through all the h1 elements and hide them
  for (let i = 0; i < h1Elements.length; i++) {
    h1Elements[i].style.display = 'none';
  }
});