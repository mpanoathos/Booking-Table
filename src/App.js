import React, {
     useReducer } from 'react';
import BookingForm from './BookingForm';
const App = () => {
  const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  };

  const updateTimes = (state, selectedDate) => {
    // Modify the availableTimes based on the selected date
    // For now, returning the same available times regardless of the date
    return initializeTimes();
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    dispatch(selectedDate);
  };

  return (
    <div>
      <h1>Main Component</h1>
      <BookingForm availableTimes={availableTimes} handleDateChange={handleDateChange} />
    </div>
  );
};
export default App;