import { useState, useEffect } from 'react'

import { Box,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    TableContainer, } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

import axios from 'axios'

import { LoginPrompt } from './LoginPrompt'
import { Coin } from './Coin'

const App = () => {
    const [coins, setCoins] = useState([])
    const [sortedAlpha, setSortedAlpha] = useState([])
    const [sortedMentions, setSortedMentions] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)
    const [loginPrompt, setLoginPrompt] = useState(false)
    const [favoritesList, setFavoritesList] = useState([])

    const token = document.cookie.split('=')[1]

    useEffect(() => {
        if (token !== undefined && token !== "PENDING VERIFICATION") {
            setLoggedIn(true)
        }

        axios
            .get(`${process.env.REACT_APP_BASEURL}/coins`)
            .then(response => {
                setCoins(response.data)
                setSortedMentions(response.data)
                setSortedMentions(response.data)
                axios
                    .get(`${process.env.REACT_APP_BASEURL}/favorites`, {withCredentials: true, credentials: 'include'})
                    .then(res => {
                        setFavoritesList(res.data.coins)
                    })
            })
    }, [])

    useEffect(() => {
        let coinhash = {}
        sortedMentions.forEach(coin => coinhash[coin[0]] = coin[1])
        let sortedNames = Object.keys(coinhash).sort()
        let alphaCoins = []
        sortedNames.forEach(name => {
            let coin = []
            coin.push(name, coinhash[name])
            alphaCoins.push(coin)
        })
        setSortedAlpha(alphaCoins)
    }, [coins])

    useEffect(() => {
        console.log(favoritesList)
    }, [favoritesList])

    

    return (
        <Box my="1em">
            <TableContainer>
                <Table variant="simple" color="whiteAlpha.800" bg="whiteAlpha.200">
                    <Thead>
                        <Tr>
                            <Th
                                _hover={{
                                    color: "#85eab8"
                                }}
                                color="black"
                                onClick={() => setCoins(sortedAlpha)}
                            >
                                Coin
                                <ChevronDownIcon boxSize={4}/>
                            </Th>
                            <Th
                                _hover={{
                                    color: "#85eab8"
                                }}
                                color="black"
                                onClick={() => setCoins(sortedMentions)}
                            >
                                Mentions (24h)
                                <ChevronDownIcon boxSize={4} />
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {coins.map(coin =>
                            
                            <Coin loggedIn={loggedIn} loginPrompt={loginPrompt} setLoginPrompt={setLoginPrompt} coin={coin} favoritesList={favoritesList} setFavoritesList={setFavoritesList}/>
                        )}
                    </Tbody>
                    <Tfoot>Powered by Coingecko</Tfoot>
                </Table>
            </TableContainer>
            <LoginPrompt loginPrompt={loginPrompt} setLoginPrompt={setLoginPrompt}/>
        </Box>
    )
}

export default App;
