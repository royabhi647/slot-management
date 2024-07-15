import React, { useState } from 'react';
import axios from 'axios';
import './SlotForm.css';
import Modal from '@mui/material/Modal';

const SlotForm = ({ fetchSlots }) => {
   const [day, setDay] = useState('');
   const [start, setStart] = useState('');
   const [end, setEnd] = useState('');
   const [openTextField, setOpenTextField] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      const newSlot = { day, timeSlots: [{ start, end }] };
      await axios.post('http://localhost:5000/slots', newSlot);
      fetchSlots();
      setDay('');
      setStart('');
      setEnd('');
      setOpenTextField(false);
   };

   const handleClose = () => setOpenTextField(false);

   return (
      <div className="slot-form-container">
         <Modal
            open={openTextField}
            onClose={handleClose}
         >
            <div className='modal-content'>
               <form onSubmit={handleSubmit} className="slot-form">
                  <label htmlFor="day">Day</label>
                  <input
                     id="day"
                     type="text"
                     placeholder="Day"
                     value={day}
                     onChange={(e) => setDay(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase())}
                  />
                  <label htmlFor="start">Start Time</label>
                  <input
                     id="start"
                     type="text"
                     placeholder="Start Time"
                     value={start}
                     onChange={(e) => setStart(e.target.value)}
                  />
                  <label htmlFor="end">End Time</label>
                  <input
                     id="end"
                     type="text"
                     placeholder="End Time"
                     value={end}
                     onChange={(e) => setEnd(e.target.value)}
                  />
                  <button type="submit">Add Slot</button>
               </form>
            </div>
         </Modal>
         <button onClick={() => setOpenTextField(true)} className="open-form-button">Add New Time Slot</button>
      </div>
   );
};

export default SlotForm;