import React, { useState } from 'react';
import ZoneMap from './ZoneMap';
import axios from 'axios';

function App() {
  const [polygon, setPolygon] = useState([]);
  const [zoneName, setZoneName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/zones', {
        name: zoneName,
        coordinates: polygon
      });
      setMessage('✅ Zone Saved!');
      console.log(res.data);
    } catch (err) {
      console.error(err);
      setMessage('❌ Error saving zone.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>GeoAlert Zone Creator</h2>
      <input
        type="text"
        value={zoneName}
        placeholder="Enter zone name"
        onChange={(e) => setZoneName(e.target.value)}
        style={{ marginBottom: '10px', padding: '5px', width: '50%' }}
      />
      <ZoneMap polygon={polygon} setPolygon={setPolygon} />
      <button onClick={handleSubmit} style={{ marginTop: '15px', padding: '10px' }}>
        Submit Zone
      </button>
      <p>{message}</p>
    </div>
  );
}

export default App;