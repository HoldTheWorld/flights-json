import Filterblock from "../Filterblock/Filterblock"
import FlightCard from "../FlightCard/FlightCard"
import styles from "./mainpage.module.css"
import { useFlightContext } from '../../context/flightContext'


function Mainpage() {

  const { flights } = useFlightContext()

return (
    <>
      <div className={styles.filter_container}>
        <Filterblock/>
      </div>
      <div className={styles.cards_container}>
        {flights.map((el) => {
        return   <FlightCard key={el.flightToken} el={el}/>
        })}
      </div>
    </>
  )
}

export default Mainpage
