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

// Background decorations
function createBackgroundDecorations() {
  const bgDecoration = document.getElementById('bgDecoration');
  if (!bgDecoration) return;

  // Add floating hearts
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 15}s`;
    heart.style.animationDuration = `${15 + Math.random() * 10}s`;
    bgDecoration.appendChild(heart);
  }

  // Add twinkling stars
  for (let i = 0; i < 30; i++) {
    const star = document.createElement('div');
    star.className = 'floating-star';
    star.innerHTML = '✦';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    bgDecoration.appendChild(star);
  }

  // Add glowing orbs
  const orbColors = ['#ec4899', '#8b5cf6', '#3b82f6', '#06b6d4'];
  for (let i = 0; i < 4; i++) {
    const orb = document.createElement('div');
    orb.className = 'orb';
    orb.style.width = `${150 + Math.random() * 100}px`;
    orb.style.height = orb.style.width;
    orb.style.background = orbColors[i];
    orb.style.left = `${Math.random() * 100}%`;
    orb.style.top = `${Math.random() * 100}%`;
    orb.style.animationDelay = `${i * 5}s`;
    bgDecoration.appendChild(orb);
  }

  // Add sparkles
  for (let i = 0; i < 40; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 2}s`;
    bgDecoration.appendChild(sparkle);
  }
}

// Calendar functionality
let currentCalendarDate = new Date();

function generateCalendar() {
  const calendarGrid = document.getElementById('calendarGrid');
  const monthYearElement = document.getElementById('monthYear');

  if (!calendarGrid || !monthYearElement) return;

  const year = currentCalendarDate.getFullYear();
  const month = currentCalendarDate.getMonth();

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  monthYearElement.textContent = `${monthNames[month]} ${year}`;

  // Clear calendar
  calendarGrid.innerHTML = '';

  // Add day headers
  dayNames.forEach(day => {
    const dayHeader = document.createElement('div');
    dayHeader.className = 'calendar-day-header';
    dayHeader.textContent = day;
    calendarGrid.appendChild(dayHeader);
  });

  // Get first day of month and total days
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  // Previous month days
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    const dayElement = document.createElement('div');
    dayElement.className = 'calendar-day other-month';
    dayElement.textContent = daysInPrevMonth - i;
    calendarGrid.appendChild(dayElement);
  }

  // Current month days
  const today = new Date();
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement('div');
    dayElement.className = 'calendar-day';
    dayElement.textContent = day;

    // Check if today
    if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
      dayElement.classList.add('today');
    }

    // Check if it's the first day of the month (special date)
    if (day === 1) {
      dayElement.classList.add('important');
    }

    calendarGrid.appendChild(dayElement);
  }

  // Next month days (fill remaining cells)
  const totalCells = firstDayOfMonth + daysInMonth;
  const remainingCells = 42 - totalCells; // 6 rows * 7 days = 42
  for (let i = 1; i <= remainingCells; i++) {
    const dayElement = document.createElement('div');
    dayElement.className = 'calendar-day other-month';
    dayElement.textContent = i;
    calendarGrid.appendChild(dayElement);
  }
}

function changeMonth(delta) {
  currentCalendarDate.setMonth(currentCalendarDate.getMonth() + delta);
  generateCalendar();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  createBackgroundDecorations();
  generateCalendar();
});