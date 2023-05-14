import { useLocation } from 'react-router-dom'
import ErrorPage from '../components/Error-page'
import CoinChart from '../components/CoinChart'
import DaySelect from '../components/DaySelect'
import { useState, useEffect } from 'react'
import axios from 'axios'


import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    Button,
    Link,
    Text
  } from '@chakra-ui/react'

  import { ChevronDownIcon } from '@chakra-ui/icons'

const Coin = () => {
    const location = useLocation()
    const coin = location.state
    const url = `https://www.coingecko.com/en/coins/${coin}`

    const [coinData, setCoinData] = useState([])
    const [days, setDays] = useState("24_hours")
    const [priceData, setPriceData] = useState([])
    const [sources, setSources] = useState([])
    const [menuItems, setMenuItems] = useState([])
    const [menuText, setMenuText] = useState("Select source")

    useEffect(() => {
        
        axios
            .get(`${process.env.REACT_APP_BASEURL}/mentions/?coin=${coin}&timeframe=${days}`)
            .then(response => {
                setCoinData(response.data)
                })
        
            // axios
            //     .get(`${process.env.REACT_APP_BASEURL}/sourcedata/${menuText}/${coin}/${days}`)
            //     .then(response => {
            //         setCoinData(response.data)
            //     })
        
    }, [days, menuText])

    // useEffect(() => {
    //     axios
    //         .get(`${process.env.REACT_APP_BASEURL}/pricedata/${coin}/${days}`)
    //         .then(response => {
    //             setPriceData(response.data.prices)
    //         })
    // }, [days])

    // Testing shit
    // useEffect(() => {
    //     axios
    //         .get(`${process.env.REACT_APP_BASEURL}/price?coin=${coin}&days=${days}`)
    //         .then(response => {
    //             setPriceData(response.data)
    //         })
    // }, [days])

    // useEffect(() => {
    //     axios
    //         .get(`${process.env.REACT_APP_BASEURL}/sources/${coin}`)
    //         .then(response => {
    //             setSources(response.data)
    //             setMenuItems(response.data)       
    //         })
    // }, [])

    // useEffect(() => {
    //     if (menuText === "Select source" || menuText === "All") {
    //         setMenuItems(sources)
    //     } else {
    //         let newMenuItems = sources.filter(source => source !== menuText)
    //         newMenuItems.push("All")
    //         setMenuItems(newMenuItems)
            
    //     }
        
    // }, [menuText])

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
            <Link color='black' href={url}>Coingecko sanity check</Link>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                    {menuText}
                </MenuButton>
                <MenuList>
                    {menuItems.map(item => <MenuItem onClick={() => setMenuText(item)}>{item}</MenuItem>)}
                </MenuList>
            </Menu>
            <DaySelect func={setDays}/>
            <CoinChart mentions={coinData} days={days}/>
        </Box>
    )
}

export default Coin