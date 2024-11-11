// Získáme tlačítko podle jeho ID
const button = document.getElementById('button-order');

// Přidáme událost pro kliknutí na tlačítko
button.addEventListener('click', function() {
  // Změníme text tlačítka na "Objednáno"
  button.textContent = 'Objednáno';
});