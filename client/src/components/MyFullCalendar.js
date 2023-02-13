import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import events from './events'

// const events = [
//   { title: 'Meeting', start: new Date() }
// ]

export default function MyFullCalendar() {
  return (
    <div>
      <h2>Program Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={true}
        events={events}
      />
    </div>
  )
}

// a custom render function
// function renderEventContent(eventInfo) {
//   return (
//     <>
//       <b>{eventInfo.timeText}</b>
//       <i>{eventInfo.event.title}</i>
//     </>
//   )
// }