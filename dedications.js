// Array para almacenar las dedicatorias
let dedications = JSON.parse(localStorage.getItem('dedications')) || [];

// Función para agregar una nueva dedicatoria
function addDedication() {
  const songTitle = document.getElementById('songTitle').value;
  const artist = document.getElementById('artist').value;
  const message = document.getElementById('message').value;
  
  if (!songTitle || !artist || !message) {
    alert('Por favor completa todos los campos');
    return;
  }
  
  const dedication = {
    id: Date.now(),
    songTitle,
    artist,
    message,
    date: new Date().toLocaleDateString()
  };
  
  dedications.unshift(dedication);
  localStorage.setItem('dedications', JSON.stringify(dedications));
  
  // Limpiar campos
  document.getElementById('songTitle').value = '';
  document.getElementById('artist').value = '';
  document.getElementById('message').value = '';
  
  // Actualizar lista
  displayDedications();
  
  // Mostrar confirmación
  const button = document.querySelector('.save-button');
  button.textContent = '¡Dedicatoria Agregada!';
  button.style.background = 'linear-gradient(45deg, #22c55e, #16a34a)';
  
  setTimeout(() => {
    button.textContent = 'Agregar Dedicatoria';
    button.style.background = 'linear-gradient(45deg, #7e22ce, #4a148c)';
  }, 2000);
}

// Función para mostrar las dedicatorias
function displayDedications() {
  const container = document.getElementById('dedicationsList');
  container.innerHTML = dedications.map(dedication => `
    <div class="dedication-card">
      <h3>${dedication.songTitle}</h3>
      <p><em>Por ${dedication.artist}</em></p>
      <p>${dedication.message}</p>
      <small>Dedicado el ${dedication.date}</small>
    </div>
  `).join('');
}

// Cargar dedicatorias al iniciar
document.addEventListener('DOMContentLoaded', displayDedications);