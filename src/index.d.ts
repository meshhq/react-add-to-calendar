import * as React from 'react'
import * as moment from 'moment'

// Interfaces
interface ReactAddToCalendarProps {
	event: CalendarEventInterface
}

export interface CalendarEventInterface {
	title: string
	description: string
	location: string
	startTime: moment.Moment
	endTime: moment.Moment
}

// Declare the Module with accepted props.
declare class ReactAddToCalendar extends React.Component<ReactAddToCalendarProps, any> { }

export default ReactAddToCalendar