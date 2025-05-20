import './js/bootstrap.js';
import { initializeCalendar } from "./js/calendar.js"

// Réinitialiser le calendrier lors de la navigation
document.addEventListener('turbo:load', initializeCalendar);
import './styles/app.css';
