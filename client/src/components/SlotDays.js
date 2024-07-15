import React from 'react';
import Switch from '@mui/material/Switch';
import SlotItem from './SlotItem';
import './style.css';

function SlotDays({ slots, activeDays, onDayChange, fetchSlots }) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  return (
    <div>
      {days.map((day) => (
        <div key={day} style={{display:"flex"}}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Switch
              checked={!!activeDays[day]}
              onChange={(e) => onDayChange(e, day)}
              inputProps={{ 'aria-label': `${day} switch` }}
            />
            <h4 style={{ marginLeft: 8, display: "flex", alignItems: "center" }}>{day}</h4>
          </div>
          <div className='slot-item-container'>
          {activeDays[day] && slots.filter(slot => slot.day.toLowerCase() === day.toLowerCase()).map(slot => (
            <SlotItem key={slot._id} slot={slot} fetchSlots={fetchSlots} />
          ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SlotDays;
