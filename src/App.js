import React, { useState } from 'react'
import GiftCard from './components/GiftCard'
import { Data } from './data'

import './App.css';


function App() {
  const { card } = Data 
  const [gifts, setGifts] = useState(card);
  
  
  
  return (
    <div className="App">
       {gifts.map((gift) => (
      <GiftCard key ={ gift.name } img={gift.img} message={gift.message} name={gift.name}/> 
    ))}
    </div>
  );
}

export default App;
