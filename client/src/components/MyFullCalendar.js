import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import events from './events'
import styled from 'styled-components'


const CalendarDiv = styled.div`

`

export default function MyFullCalendar() {
  return (
    <CalendarDiv >
      <FullCalendar
        id="calendar"
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={true}   
      />
    </CalendarDiv >
  )
}

