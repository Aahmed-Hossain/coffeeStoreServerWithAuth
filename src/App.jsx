import { useLoaderData } from 'react-router-dom';
import './App.css';
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';

function App() {
const loadedCoffees = useLoaderData();
const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className='m-8'>
      <h1 className='text-purple-500 text-4xl font-semibold text-center p-16'>Hot Hot Cold Cold Coffee: {coffees.length}</h1>
      <div className='grid grid-cols-2 gap-4'>
      {
        coffees.map(coffee => <CoffeeCard 
          key={coffee._id} 
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}></CoffeeCard>)
      }
      </div>
    </div>
  )
}

export default App
