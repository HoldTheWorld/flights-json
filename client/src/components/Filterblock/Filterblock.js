import styles from './filterblock.module.css'
import { useFlightContext } from '../../context/flightContext'

function Filterblock() {

  const { sortValue , setSortValue, filterValue, setFilterValue} = useFlightContext()

  const handleSubmitSort = (ev) => {
    setSortValue(ev.target.value)
  }

  const handleSubmitFilter = (ev) => {
    setFilterValue(ev.target.value)
  }

  return (
    <div className={styles.filterblock}>
          <p> Сортировать </p>
          <label>
            <input onChange={handleSubmitSort} id='priceup' value='priceup' type='radio' name='sort' checked={sortValue == 'priceup'}/> 
            по возрастанию цены
          </label>
          <label>
            <input onChange={handleSubmitSort} id='pricedown' value='pricedown' type='radio' name='sort' checked={sortValue == 'pricedown'}/> 
           по убыванию в цене
          </label>
          <label>
            <input onChange={handleSubmitSort} id='time' value='time' type='radio' name='sort' checked={sortValue == 'time'}/>  
            по времени в пути
          </label>

          <p> Фильтровать </p>
          <label>
            <input onChange={handleSubmitFilter} id='allchange' value='allchange' type='checkbox' name='filter' checked={filterValue == 'allchange'}/> 
           показать все
          </label>
          <label>
            <input onChange={handleSubmitFilter} id='onechange' value='onechange' type='checkbox' name='filter' checked={filterValue == 'onechange'}/> 
           1 пересадка
          </label>
          <label>
            <input onChange={handleSubmitFilter} id='zerochange' value='zerochange' type='checkbox' name='filter' checked={filterValue == 'zerochange'}/>  
            0 пересадок
          </label>
    </div>
  )
}

export default Filterblock
