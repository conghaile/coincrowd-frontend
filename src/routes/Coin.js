import { useLocation } from 'react-router-dom'
import ErrorPage from '../components/Error-page'
import CoinChart from '../components/coin/CoinChart'
import DaySelect from '../components/coin/DaySelect'
import { useState, useEffect } from 'react'
import axios from 'axios'


import {
    Box,
    Text
  } from '@chakra-ui/react'


const Coin = () => {
    const location = useLocation()
    const coin = location.state

    const [coinData, setCoinData] = useState([])
    const [days, setDays] = useState("24_hours")
    
    const handleDaySelect = (days) => {
        axios
            .get(`${process.env.REACT_APP_BASEURL}/mentions/?coin=${coin}&timeframe=${days}`)
            .then(response => {
                setCoinData(response.data)
                setDays(days)
                })
    }

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BASEURL}/mentions/?coin=${coin}&timeframe=${days}`)
            .then(response => {
                setCoinData(response.data)
            })
    }, [])

    // Not necessary until CoinCrowd becomes adequately funded
    // useEffect(() => {
    //     axios
    //         .get(`${process.env.REACT_APP_BASEURL}/pricedata/${coin}/${days}`)
    //         .then(response => {
    //             setPriceData(response.data.prices)
    //         })
    // }, [days])

    if (!coin) {
        return (
            <div>
                <ErrorPage />
            </div>
        )
    }

    return (
        <Box display='flex' flexDir='column' alignItems='flex-start'>
            <Text as='b' fontSize="3xl">{coin}</Text>
            
            <DaySelect handleDaySelect={handleDaySelect}/>
            <CoinChart mentions={coinData} days={days}/>
        </Box>
    )
}

export default Coin