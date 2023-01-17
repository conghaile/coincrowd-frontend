import { useState, useEffect } from 'react'
import axios from 'axios'
import CoinChart from './CoinChart'
import DropDown from './DropDown'

const App = () => {
    const [clicked, setClicked] = useState(false)
    const [coins, setCoins] = useState([])
    const [coinData, setCoinData] = useState([])
    const [selectedCoin, setSelectedCoin] = useState("None")
    const [weeks, setWeeks] = useState(1)
    const [firstRender, setFirstRender] = useState(true)
    const [priceData, setPriceData] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3001/coins')
            .then(response => {
                setCoins(response.data.coins)
        
                })
    }, [])

    useEffect(() => {
            if (firstRender) setFirstRender(false)
            if (!firstRender) {
                axios
                        .get(`http://localhost:3001/coindata/${selectedCoin}/${weeks}`)
                        .then(response => {
                            setCoinData(response.data)            
                        })
                axios
                    .get(`http://localhost:3001/pricedata/${selectedCoin}/${weeks}`)
                    .then(response => {
                        setPriceData(response.data.prices)
                    })
            }
        }, [selectedCoin, weeks])

    const handleBack = (event) => {
        event.preventDefault()
        setWeeks(1)
        setClicked(!clicked)
    }

    const handleCoinClick = (event) => {
        setSelectedCoin(event.target.innerText)
        setClicked(!clicked)
    }

    if (!clicked) {
        return (
            <div>
                <div key ="coins" className="coins">
                    {coins.map(coin => 
                        <button className="coin" onClick={handleCoinClick}>{coin}</button>
                    )}

                </div>
            </div>
        )
    }


    return (
        <div>
            <h1>{selectedCoin}</h1>
            <DropDown coin={selectedCoin} weeks={weeks} func={setCoinData}/>
            <button onClick={() => setWeeks(1)}>7d</button>
            <button onClick={() => setWeeks(2)}>14d</button>
            <button onClick={() => setWeeks(4)}>28d</button>
            <button onClick={() => setWeeks(24)}>6 mo</button>
            <button onClick={() => setWeeks(52)}>YTD</button>
            <button onClick={handleBack}>Back</button>
            <div>
                <CoinChart mentions={coinData} price={priceData}/>
            </div>
        </div>
    )
    
}

export default App;
