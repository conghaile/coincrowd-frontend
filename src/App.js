import { useState, useEffect } from 'react'
import axios from 'axios'
import Coin from './Coin'

const App = () => {
    const [clicked, setClicked] = useState(false)
    const [coins, setCoins] = useState([])
    const [coinData, setCoinData] = useState([])
    const [selectedCoin, setSelectedCoin] = useState("None")
    const [weeks, setWeeks] = useState(5)
    const [firstRender, setFirstRender] = useState(true)

    useEffect(() => {
        axios
            .get('http://localhost:3001/all')
            .then(response => {
                setCoins(response.data.coins)
        
                }
    )}, [])

    const handleBack = (event) => {
        event.preventDefault()
        setWeeks(5)
        setClicked(!clicked)
    }

    const handleCoinClick = (event) => {
        setSelectedCoin(event.target.innerText)
        setClicked(!clicked)
    }

    useEffect(() => {
        if (firstRender) setFirstRender(false)
        if (!firstRender) {
            axios
                .get(`http://localhost:3001/coindata/${selectedCoin}/${weeks}`)
                .then(response => {
                    setCoinData(response.data.Coins)
                })
        }
    }, [selectedCoin, weeks])

    if (!clicked) {
        return (
            <div key ="coins" className="coins">
                {coins.map(coin => 
                    <div>
                        <button onClick={handleCoinClick}>{coin}</button>
                    </div>
                )}

            </div>
        )
    }


    return (
        <div>
            <h1>{selectedCoin}</h1>
            <Coin data={coinData}/>
            <p>Weeks: {weeks}</p>
            <button onClick={() => setWeeks(1)}>7d</button>
            <button onClick={() => setWeeks(2)}>14d</button>
            <button onClick={() => setWeeks(4)}>28d</button>
            <button onClick={() => setWeeks(24)}>6 mo</button>
            <button onClick={() => setWeeks(52)}>YTD</button>
            <button onClick={handleBack}>Back</button>
        </div>
    )
    
}

export default App;
