import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import BerriesList from './Components/BerriesList';
import { AddBerry } from './Components/AddBerry';
import { Filter } from './Components/Filter';
import { getBerriesFromPokemonAPI } from './api';


function App() {

  const [berries, setBerries] = useState([])
  const berriesSetRef = useRef(new Set());
  const [filterInput, setFilterInput] = useState('')

  const getBerriesCallback = async () => {
    try {
      const berriesAPICallResult = await getBerriesFromPokemonAPI()
      setBerries(berriesAPICallResult)
      berriesAPICallResult.forEach(result => {
        berriesSetRef.current.add(result.name);
      })
    }
    catch (error) {
      console.log('Error in getBerriesCallback', error)
    }
  }

  useEffect(() => {
    getBerriesCallback()
  }, [])

  const filteredBerries = berries.filter(filteredBerry => filteredBerry.name.includes(filterInput))

  return (
    <div className="App">
      <AddBerry
         berries={berries}
         setBerries={setBerries}
      />
      <Filter
        filterInput={filterInput}
        setFilterInput={setFilterInput}
      />
      <BerriesList
        filteredBerries={filteredBerries}
        berries={berries}
        setBerries={setBerries}
      />
    </div>
  );
}

export default App;
