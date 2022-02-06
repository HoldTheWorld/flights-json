import './App.css';
import Mainpage from './components/Mainpage/Mainpage';
import { useEffect } from 'react'
import { useFlightContext } from './context/flightContext'

function App() {

  const {setFlights, sortValue, filterValue, setFilterValue} = useFlightContext()

  useEffect(() => {
  async function getFlights() {
  const response = await fetch(`http://localhost:3000/${sortValue}/sort`, {
    credentials: 'include', 
  })
  
  if(response.ok) {
    const allFlights = await response.json()
      if (filterValue == 'allchange') {
        setFlights(allFlights)
      } else if (filterValue == 'onechange') {
        const filteredFlight = allFlights.filter((el) => (el.flight.legs[0].segments.length-1 == 1) && (el.flight.legs[1].segments.length-1 == 1))
        setFlights(filteredFlight)
      } else if (filterValue == 'zerochange') {
        const filteredFlight = allFlights.filter((el) => (el.flight.legs[0].segments.length-1 == 0) && (el.flight.legs[1].segments.length-1 == 0))
        setFlights(filteredFlight)
      }
    } else {
      throw new Error('error to get flights')
    }
  }
  getFlights()
}, [sortValue, filterValue])
  
  return (
    <div className='main_container'>
      <Mainpage/>
    </div>
  );
}

export default App;
