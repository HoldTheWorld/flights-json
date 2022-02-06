import { createContext, useState, useContext} from "react";



const flightContext = createContext()

export function FlightContextProvider({children}) {

  const [flights, setFlights] = useState([])
  const [sortValue, setSortValue] = useState('priceup')
  const [filterValue, setFilterValue] = useState('allchange')



  

  return (
    <flightContext.Provider value={{ flights, setFlights, sortValue, setSortValue, filterValue, setFilterValue }}>
      {children}
    </flightContext.Provider>

  )

}

export const useFlightContext = () => useContext(flightContext)
