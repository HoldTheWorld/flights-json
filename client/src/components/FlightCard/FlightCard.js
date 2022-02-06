import styles from './flightcard.module.css'

function FlightCard ({el}) {
  
  function getTimeFromMins(mins) {
     let hours = Math.trunc(mins/60);
     let minutes = mins % 60;
     return `${hours} ч. ${minutes} мин.`;
  };

  const segmentsQuantity = el.flight.legs[0].segments.length-1
  const departureCityName = el.flight.legs[0].segments[0].departureCity.caption
  const departureAirportName = el.flight.legs[0].segments[0].departureAirport.caption
  const departureAirportUid = el.flight.legs[0].segments[0].departureAirport.uid
  const departureDate = new Date(el.flight.legs[0].segments[0].departureDate).toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });
  
  const arrivalCityName = el.flight.legs[0].segments[segmentsQuantity].arrivalAirport.caption
  const arrivalAirpotUid = el.flight.legs[0].segments[segmentsQuantity].arrivalAirport.uid
  const arrivalDate = new Date(el.flight.legs[0].segments[segmentsQuantity].arrivalDate).toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });
  const flightDuration = getTimeFromMins(el.flight.legs[0].duration)

  const backSegmentsQuantity = el.flight.legs[1].segments.length-1
  const backDepartureCityName = el.flight.legs[1].segments[0].departureAirport.caption
  const backDepartureAirportUid = el.flight.legs[1].segments[0].departureAirport.uid
  const backDepartureDate = new Date(el.flight.legs[1].segments[0].departureDate).toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });
  const backArrivalCityName = el.flight.legs[1].segments[backSegmentsQuantity].arrivalAirport.caption
  const backArrivalAirpotUid = el.flight.legs[1].segments[backSegmentsQuantity].arrivalAirport.uid
  const backArrivalDate = new Date(el.flight.legs[1].segments[backSegmentsQuantity].arrivalDate).toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });
  const backFlightDuration = getTimeFromMins(el.flight.legs[1].duration)

return (
  <>
      <div className={styles.card_container}>
        <div className={styles.card_head}>
          <div> {el.flight.carrier.caption} </div>
          <div> {el.flight.price.totalFeeAndTaxes.amount} руб. <br/> for adult person </div>
        </div>
        <div className={styles.card_top}>
          <div className={styles.card_direction}>
            {departureCityName}, {departureAirportName}({departureAirportUid}) 	&#8594; 
              {arrivalCityName}, ({arrivalAirpotUid})
          </div>
          <div className={styles.flight_time}> 
              <div>
              {departureDate}
              </div>
              <div>
                Время в пути: {flightDuration} 
              </div>
              <div>
              {arrivalDate}
              </div>
          </div>
          <div className={styles.change_flight}> Пересадок: {segmentsQuantity} </div>
          <div className={styles.company}> Рейс выполняет авиакомпания: {el.flight.carrier.caption}</div>
        </div>
        <div className={styles.card_bottom}>
        <div className={styles.card_direction}>
          {backDepartureCityName},({backDepartureAirportUid}) &#8594; 
          {backArrivalCityName}, ({backArrivalAirpotUid})
          </div>
        <div className={styles.flight_time}> 
              <div>
              {backDepartureDate}
              </div>
              <div>
              Время в пути: {backFlightDuration} 
              </div>
              <div>
              {backArrivalDate}
              </div>
          </div>
          <div className={styles.change_flight}> Пересадок: {backSegmentsQuantity} </div>
          <div className={styles.company}> Рейс выполняет авиакомпания: {el.flight.carrier.caption} </div>
        </div>
        <button className={styles.card_choose_button}> ВЫБРАТЬ </button>
      </div>
  </>
)

}

export default FlightCard
