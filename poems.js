// Función para guardar el poema
function savePoem(poemNumber) {
  const poemContent = document.querySelector('.poem-content').innerHTML;
  localStorage.setItem(`poem${poemNumber}`, poemContent);
  
  // Animación de guardado
  const saveButton = document.querySelector('.save-button');
  saveButton.textContent = '¡Guardado!';
  saveButton.style.background = 'linear-gradient(45deg, #22c55e, #16a34a)';
  
  setTimeout(() => {
    saveButton.textContent = 'Guardar Poema';
    saveButton.style.background = 'linear-gradient(45deg, #7e22ce, #4a148c)';
  }, 2000);
}

// Cargar el poema guardado cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
  const poemNumber = window.location.pathname.match(/poema(\d)\.html/)[1];
  const savedPoem = localStorage.getItem(`poem${poemNumber}`);
  
  if (savedPoem && savedPoem !== 'Escribe aquí tu poema...') {
    document.querySelector('.poem-content').innerHTML = savedPoem;
  }
});