import React from 'react';
import axios from 'axios';
import './style.css';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const SlotItem = ({ slot, fetchSlots }) => {

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/slots/delete/${slot._id}`);
    fetchSlots();
  };

  return (
    <div className='timing-container'>
      {slot.timeSlots.map((timeSlot, index) => (
        <div key={index} className='timing'>
          <div className='start-container'>
            <p>{timeSlot.start}</p>
          </div>
          <div className='mid-container'>-</div>
          <div className='end-container'>
            <p>{timeSlot.end}</p>
          </div>
        </div>
      ))}
      <div className='delete-btn'>
        <DeleteOutlineOutlinedIcon onClick={handleDelete}/>
      </div>
    </div>
  );
};

export default SlotItem;
