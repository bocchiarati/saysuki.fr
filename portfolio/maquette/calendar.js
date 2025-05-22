import { flashMessage } from "./flash.js";

let draggableInstance = null;
function initCalendar() {
    const containerEl = document.getElementById('external-events');
    const calendarEl = document.getElementById('calendar');

    // Nettoyer l'instance précédente du Draggable si elle existe
    if (draggableInstance) {
        draggableInstance.destroy();
    }

    // Créer une nouvelle instance du Draggable
    draggableInstance = new FullCalendar.Draggable(containerEl, {
        itemSelector: '.fc-event',
        eventData: function(eventEl) {
            const data = JSON.parse(eventEl.dataset.event);
            return {
                title: data.title,
                color: data.color,
                id: data.id,
            };
        }
    });

    // Nettoyer le calendrier existant s'il y en a un
    if (calendarEl._calendar) {
        calendarEl._calendar.destroy();
    }

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialDate: '2025-04-01',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
            { title: '🧇Sofien', start: '2025-04-01T17:30:00', end: '2025-04-02T08:00:00', color: 'purple' },
            { title: '🍩Sarah', start: '2025-04-02T17:30:00', end: '2025-04-03T08:00:00', color: 'blue' },
            { title: '🍔Alex', start: '2025-04-03T17:30:00', end: '2025-04-04T08:00:00', color: 'green' },
            { title: '🍕Nina', start: '2025-04-04T17:30:00', end: '2025-04-05T08:00:00', color: 'orange' },
            { title: '🍣Thomas', start: '2025-04-05T08:00:00', end: '2025-04-05T20:00:00', color: 'red' },
            { title: '🍦Emma', start: '2025-04-05T20:00:00', end: '2025-04-06T08:00:00', color: 'pink' },
            { title: '🍉Lucas', start: '2025-04-06T08:00:00', end: '2025-04-06T20:00:00', color: 'teal' },
            { title: '🧇Sofien', start: '2025-04-06T20:00:00', end: '2025-04-07T08:00:00', color: 'purple' },
            { title: '🍩Sarah', start: '2025-04-07T17:30:00', end: '2025-04-08T08:00:00', color: 'blue' },
            { title: '🍔Alex', start: '2025-04-08T17:30:00', end: '2025-04-09T08:00:00', color: 'green' },
            { title: '🍕Nina', start: '2025-04-09T17:30:00', end: '2025-04-10T08:00:00', color: 'orange' },
            { title: '🍣Thomas', start: '2025-04-10T17:30:00', end: '2025-04-11T08:00:00', color: 'red' },
            { title: '🍦Emma', start: '2025-04-11T17:30:00', end: '2025-04-12T08:00:00', color: 'pink' },
            { title: '🍉Lucas', start: '2025-04-12T08:00:00', end: '2025-04-12T20:00:00', color: 'teal' },
            { title: '🧇Sofien', start: '2025-04-12T20:00:00', end: '2025-04-13T08:00:00', color: 'purple' },
            { title: '🍩Sarah', start: '2025-04-13T08:00:00', end: '2025-04-13T20:00:00', color: 'blue' },
            { title: '🍔Alex', start: '2025-04-13T20:00:00', end: '2025-04-14T08:00:00', color: 'green' },
            { title: '🍕Nina', start: '2025-04-14T17:30:00', end: '2025-04-15T08:00:00', color: 'orange' },
            { title: '🍣Thomas', start: '2025-04-15T17:30:00', end: '2025-04-16T08:00:00', color: 'red' },
            { title: '🍦Emma', start: '2025-04-16T17:30:00', end: '2025-04-17T08:00:00', color: 'pink' },
            { title: '🍉Lucas', start: '2025-04-17T17:30:00', end: '2025-04-18T08:00:00', color: 'teal' },
            { title: '🧇Sofien', start: '2025-04-18T17:30:00', end: '2025-04-19T08:00:00', color: 'purple' },
            { title: '🍩Sarah', start: '2025-04-19T08:00:00', end: '2025-04-19T20:00:00', color: 'blue' },
            { title: '🍔Alex', start: '2025-04-19T20:00:00', end: '2025-04-20T08:00:00', color: 'green' },
            { title: '🍕Nina', start: '2025-04-20T08:00:00', end: '2025-04-20T20:00:00', color: 'orange' },
            { title: '🍣Thomas', start: '2025-04-20T20:00:00', end: '2025-04-21T08:00:00', color: 'red' },
            { title: '🍦Emma', start: '2025-04-21T17:30:00', end: '2025-04-22T08:00:00', color: 'pink' },
            { title: '🍉Lucas', start: '2025-04-22T17:30:00', end: '2025-04-23T08:00:00', color: 'teal' },
            { title: '🧇Sofien', start: '2025-04-23T17:30:00', end: '2025-04-24T08:00:00', color: 'purple' },
            { title: '🍩Sarah', start: '2025-04-24T17:30:00', end: '2025-04-25T08:00:00', color: 'blue' },
            { title: '🍔Alex', start: '2025-04-25T17:30:00', end: '2025-04-26T08:00:00', color: 'green' },
            { title: '🍕Nina', start: '2025-04-26T08:00:00', end: '2025-04-26T20:00:00', color: 'orange' },
            { title: '🍣Thomas', start: '2025-04-26T20:00:00', end: '2025-04-27T08:00:00', color: 'red' },
            { title: '🍦Emma', start: '2025-04-27T08:00:00', end: '2025-04-27T20:00:00', color: 'pink' },
            { title: '🍉Lucas', start: '2025-04-27T20:00:00', end: '2025-04-28T08:00:00', color: 'teal' },
            { title: '🧇Sofien', start: '2025-04-28T17:30:00', end: '2025-04-29T08:00:00', color: 'purple' },
            { title: '🍩Sarah', start: '2025-04-29T17:30:00', end: '2025-04-30T08:00:00', color: 'blue' },
            { title: '🍔Alex', start: '2025-04-30T17:30:00', end: '2025-05-01T08:00:00', color: 'green' }
        ],

        timeZone: "Europe/Paris",
        eventTimeFormat: {
            hour: 'numeric',
            meridiem: false,
            hour12: false
        },
        displayEventEnd: true,
        selectable: true,
        editable: true,
        droppable: true,
        dayMaxEvents: true,
        drop: function (info) {
            // Empêcher la duplication de l'événement
            const eventEl = info.draggedEl;
            const eventData = JSON.parse(eventEl.dataset.event);

            // Vérifier si un événement similaire existe déjà à cette date
            const existingEvents = calendar.getEvents().filter(event =>
                event.title === eventData.title &&
                event.start.getTime() === info.date.getTime()
            );

            if (existingEvents.length > 0) {
                info.revert();
            }
        },
        eventClick: function(info) {
            const eventObj = info.event;
            if (confirm("Vous allez supprimé l'événement : " + eventObj.title)) {
                eventObj.remove();
                flashMessage("success", "L'astreinte a été supprimé.");
            }
        },
    });

    // Stocker la référence du calendrier
    calendarEl._calendar = calendar;
    return calendar;
}


// Fonction pour initialiser le calendrier
export async function initializeCalendar() {
    if (document.getElementById('calendar') !== null) {
        const calendar = initCalendar();
        calendar.render();
    }
}
