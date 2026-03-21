import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

function CalendarComponent() {
  return <Calendar locale="ja-JP" calendarType="gregory" />;
}

export default CalendarComponent;
