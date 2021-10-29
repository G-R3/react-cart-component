import '../styles/App.css';
import Cartitem from './Cartitem';

function App() {
  const items = [
    {
      id: 1,
      name: 'Skateboard Deck',
      price: 60,
      qty: 1,
    },
    {
      id: 2,
      name: 'Skateboard Trucks',
      price: 24.99,
      qty: 1,
    },
    {
      id: 3,
      name: 'Skateboard Bearings',
      price: 17.95,
      qty: 1,
    },
    {
      id: 4,
      name: 'Skateboard Wheels',
      price: 15,
      qty: 1,
    },
    {
      id: 5,
      name: 'Griptape',
      price: 4,
      qty: 1,
    },
  ];
  return (
    <div className="App">
      {items.map((item) => (
        <Cartitem
          key={item.id}
          name={item.name}
          price={item.price}
          qty={item.qty}
        />
      ))}
    </div>
  );
}

export default App;
