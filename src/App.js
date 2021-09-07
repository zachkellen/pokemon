import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([]);

  const fetchAPI = (event) => {
    event.preventDefault();
    axios.get('https://pokeapi.co/api/v2/pokemon')
      // .then(res => res.json())
      .then(res => {
        console.log(res.data.results)
        setPokemon(res.data.results)
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <h1>Here are the Pokemen</h1>
      <button onClick={fetchAPI}>Get my Pokes</button>
      <br></br>
      <ul>
        {
          pokemon.map((item,i)=>{
            return <li key={i}>{item.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
