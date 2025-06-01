document.addEventListener('DOMContentLoaded', () => {
  // Fecha objetivo: 16 de octubre de 2027 a las 00:00:00
  const targetDate = new Date('2027-10-16T00:00:00');

  // Elementos del DOM para el contador
  const yearsElement = document.getElementById('years');
  const monthsElement = document.getElementById('months');
  const weeksElement = document.getElementById('weeks');
  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');
  
  const countdownContainer = document.getElementById('countdown-container');
  const finalMessage = document.getElementById('final-message');
  
  // Función para agregar ceros a la izquierda
  function padNumber(number) {
    return number.toString().padStart(2, '0');
  }

  // Función para agregar animación al cambiar números
  function updateElementWithAnimation(element, newValue) {
    const paddedValue = padNumber(newValue);
    if (element.textContent !== paddedValue) {
      element.style.transform = 'scale(1.1)';
      element.textContent = paddedValue;
      setTimeout(() => {
        element.style.transform = 'scale(1)';
      }, 100);
    }
  }
  
  function updateCountdown() {
    const currentDate = new Date();
    
    if (currentDate >= targetDate) {
      countdownContainer.classList.add('hidden');
      finalMessage.classList.remove('hidden');
      return;
    }

    const timeDiff = targetDate - currentDate;
    
    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
    const remainingAfterYears = timeDiff % (1000 * 60 * 60 * 24 * 365.25);
    
    const months = Math.floor(remainingAfterYears / (1000 * 60 * 60 * 24 * 30.44));
    const remainingAfterMonths = remainingAfterYears % (1000 * 60 * 60 * 24 * 30.44);
    
    const weeks = Math.floor(remainingAfterMonths / (1000 * 60 * 60 * 24 * 7));
    const remainingAfterWeeks = remainingAfterMonths % (1000 * 60 * 60 * 24 * 7);
    
    const days = Math.floor(remainingAfterWeeks / (1000 * 60 * 60 * 24));
    const remainingAfterDays = remainingAfterWeeks % (1000 * 60 * 60 * 24);
    
    const hours = Math.floor(remainingAfterDays / (1000 * 60 * 60));
    const remainingAfterHours = remainingAfterDays % (1000 * 60 * 60);
    
    const minutes = Math.floor(remainingAfterHours / (1000 * 60));
    const seconds = Math.floor((remainingAfterHours % (1000 * 60)) / 1000);

    // Actualizar elementos con animación
    updateElementWithAnimation(yearsElement, years);
    updateElementWithAnimation(monthsElement, months);
    updateElementWithAnimation(weeksElement, weeks);
    updateElementWithAnimation(daysElement, days);
    updateElementWithAnimation(hoursElement, hours);
    updateElementWithAnimation(minutesElement, minutes);
    updateElementWithAnimation(secondsElement, seconds);
  }
  
  // Actualizar cada segundo
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // Corregir el enlace de YouTube Music
  const playlistContainer = document.querySelector('.playlist-container iframe');
  if (playlistContainer) {
    playlistContainer.src = "https://www.youtube.com/embed/videoseries?list=PLDbeoZ57LM7uaUlAboUhaAgtGSbR5FQmS";
  }
});