import React, { useCallback, useEffect, useState } from 'react';
import SlotForm from './components/SlotForm';
import SlotList from './components/SlotList';
import axios from 'axios';

const App = () => {
  const [slots, setSlots] = useState([]);

  const fetchSlots = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:5000/slots/getSlot');
      setSlots(response.data);
    } catch (error) {
      console.error('Failed to fetch slots:', error);
    }
  }, []);

  useEffect(() => {
    fetchSlots();
  }, [fetchSlots]);

  return (
    <div>
      <SlotForm fetchSlots={fetchSlots} />
      <SlotList slots={slots} fetchSlots={fetchSlots} />
    </div>
  );
};

export default App;