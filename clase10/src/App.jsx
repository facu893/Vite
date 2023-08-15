import { useState } from 'react';
import './App.css';
import Card from '../Components/Card';

function App() {
  const [count, setCount] = useState(0);

  // Estilos en línea para la tarjeta
  const cardStyles = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    margin: '0 auto',
  };

  return (
    <div className='App' style={cardStyles}>
      <h1>CARD</h1>
      <form action=""></form>
        <Card />
    </div>
  );
}

export default App;
