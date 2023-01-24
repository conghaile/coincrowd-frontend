import { useLocation, Link } from 'react-router-dom'
import ErrorPage from '../components/Error-page'
import CoinChart from '../components/CoinChart'
import DropDown from '../components/DropDown'
import WeekSelect from '../components/WeekSelect'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Coin = () => {
    const location = useLocation()
    const coin = location.state

    const [coinData, setCoinData] = useState([])
    const [weeks, setWeeks] = useState(1)
    const [priceData, setPriceData] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:3001/coindata/${coin}/${weeks}`)
            .then(response => {
                setCoinData(response.data)
            })
    }, [weeks])

    useEffect(() => {
        axios
            .get(`http://localhost:3001/pricedata/${coin}/${weeks}`)
            .then(response => {
                setPriceData(response.data.prices)
            })
    }, [weeks])

    if (!coin) {
        return (
            <div>
                <ErrorPage />
            </div>
        )
    }

    return (
        <div>
            <DropDown coin={coin} weeks={weeks} func={setCoinData}/>
            <WeekSelect func={setWeeks}/>
            <CoinChart mentions={coinData} price={priceData}/>
        </div>
    )
}

export default Coin