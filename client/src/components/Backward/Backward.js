import styles from './backward.module.css'

function Backward({backward}) {

return (
  <div className={styles.card_bottom}>
  <div className={styles.card_direction}>
      from ---> to
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
)
  

}

export default Backward
