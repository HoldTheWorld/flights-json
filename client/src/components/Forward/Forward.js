import styles from './forward.module.css'

function Forward({forward}) {

  console.log(forward[forward.length-1].arrivalAirport);

return (
  <>

    <div className={styles.card_top}>
    <div className={styles.card_direction}>

    </div>
    <div className={styles.flight_time}> 
        <div>
        20:40 18 avg 
        </div>
        <div>
        14:45 min 
        </div>
        <div>
        19 avg 09:25 
        </div>
     </div>
    <div className={styles.change_flight}> change </div>
    <div className={styles.company}> company </div>
  </div>
 
  </>
)
  

}

export default Forward
