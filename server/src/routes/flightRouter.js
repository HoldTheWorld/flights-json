const router = require('express').Router();
const fs = require('fs').promises
const pathToFiles = `${process.env.PWD}/public/files/flights.json`

router.get('/:sortValue/sort', async (req, res) => {
  const {sortValue} = req.params;
  try{ 
    const data = await fs.readFile(pathToFiles)
    const parsed = JSON.parse(data)
    const flightsArr = [] 
    for (let i = 0; i < parsed.result.flights.length; i++) {
      flightsArr.push(parsed.result.flights[i])
    }
    if(sortValue == 'priceup') {
      const flightsPriceup = flightsArr.sort((a, b) => {
        return  a.flight.price.totalFeeAndTaxes.amount - b.flight.price.totalFeeAndTaxes.amount
       })
       res.status(202).json(flightsPriceup)
    } else if(sortValue == 'pricedown') {
      const flightsDown = flightsArr.sort((a, b) => {
        return  b.flight.price.totalFeeAndTaxes.amount - a.flight.price.totalFeeAndTaxes.amount
       })
       res.status(202).json(flightsDown)
    } else if(sortValue == 'time') {
      const flightsTimeup = flightsArr.sort((a, b) => {
        return  (a.flight.legs[0].duration + a.flight.legs[1].duration) - (b.flight.legs[0].duration + b.flight.legs[1].duration) 
       })
       res.status(202).json(flightsTimeup)
    }
  } catch (err) {
    throw new Error(err)
  }
})





module.exports = router;


//parsed.result.flights[i].flight.legs   - всегда массив из двух объектов (туда и обратно)
//parsed.result.flights[0].flight.legs[i].segments - каждый сегмент это  массив с 1 или двумя объектами (2 с пересадкой, 1 без пересадок) 

// авиакомпания parsed.result.flights[i].flight.carrier.caption
//цена parsed.result.flights[i].flight.price.totalFeeAndTaxes.amount

//parsed.result.flights[0].flight.legs[1].segments.length-1 - количество пересадок

//авиакомпания parsed.result.flights[0].flight.legs[1].segments[0].airline
//аэропорт вылета  parsed.result.flights[0].flight.legs[1].segments[0].departureAirport
//{"uid":"LHR","caption":"Лондон, Хитроу"}
//город вылета  parsed.result.flights[0].flight.legs[1].segments[0].departureCity
//{"uid" : "MOW","caption" : "Москва"}
//дата вылета parsed.result.flights[0].flight.legs[1].segments[0].departureDate

//аэропорт прилета parsed.result.flights[0].flight.legs[1].segments[0].arrivalAirport
//город прилета  parsed.result.flights[0].flight.legs[1].segments[0].arrivalCity
//дата прилета  parsed.result.flights[0].flight.legs[1].segments[0].arrivalDate
//время в пути в минутах parsed.result.flights[0].flight.legs[1].segments[0].travelDuration


