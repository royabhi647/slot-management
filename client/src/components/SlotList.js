import React, { useState } from 'react';
import './style.css';
import SlotDays from "./SlotDays";

const SlotList = ({ slots, fetchSlots }) => {
  const [activeDays, setActiveDays] = useState({});

  const handleDayChange = (event, day) => {
    const updatedDays = { ...activeDays, [day]: event.target.checked };
    setActiveDays(updatedDays);
  };

  const getActiveDaysDisplay = () => {
    return slots
      .filter(slot => activeDays[slot.day])
      .map((slot, index) => {
        const times = slot.timeSlots.map(t => `${t.start} - ${t.end}`).join(', ');
        return <div key={index}>{slot.day}: {times}</div>;
      })
  };

  return (
    <div className='container'>
      {Object.values(activeDays).some(value => value) && (
        <div className="active-days-header">
          Working Hours: <div style={{ display: "flex", flexDirection: "column" }}>
            {getActiveDaysDisplay()}
          </div>
        </div>
      )}
      <SlotDays slots={slots} activeDays={activeDays} onDayChange={handleDayChange} fetchSlots={fetchSlots} />
    </div>
  );
};

export default SlotList;
