import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import './calendario.css'

const eventos = [
  {
    id: 1,
    title: "Cita con Dr. Pérez",
    start: "2024-05-25T10:00:00",
    end: "2024-05-25T11:00:00",
  },
  {
    id: 2,
    title: "Vacunación de Luna",
    start: "2024-05-26T12:00:00",
    end: "2024-05-26T12:30:00",
  },
  // Más eventos...
];

function CalendarioCitas() {
  // eslint-disable-next-line no-unused-vars
  const [events, setEvents] = useState(eventos);

  return (
    <div
      className="calendar-container"
    >
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale={esLocale}
        events={events}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        buttonText={{
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
        }}
        noEventsText="No hay eventos para mostrar"
      />
    </div>
  );
}

export default CalendarioCitas;
