import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import axios from 'axios'

const App = () => {
    const [coins, setCoins] = useState([])
    const [sortedAlpha, setSortedAlpha] = useState([])
    const [sortedMentions, setSortedMentions] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3001/coins')
            .then(response => {
                setCoins(response.data)
                setSortedMentions(response.data)
                setSortedMentions(response.data)
                
                // let coinhash = {}
                // console.log("coins", coins)
                // coins.forEach(coin => coinhash[coin[0]] = coin[1])
                // console.log("coinhash", coinhash)
                // let sortedNames = Object.keys(coinhash).sort()
                // console.log("sorted names", sortedNames)
                // let alphaCoins = []
                // sortedNames.forEach(name => {
                //     let coin = []
                //     coin.push(name, coinhash[name])
                //     alphaCoins.push(coin)
                // })
                // console.log("alphaCoins", alphaCoins)
                // setSortedAlpha(alphaCoins)
                // console.log("sortedAlpha", sortedAlpha)
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

    return (
        <Box m={50}>
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
                            <Tr>
                                    <Td color="black">
                                        <Link to={`/coins/${coin[0]}`} state={coin[0]}>
                                            {coin[0]}
                                        </Link>
                                    </Td>
                                    <Td isNumeric color="black">
                                        {coin[1]}
                                    </Td>
                            </Tr>
                        )}
                    </Tbody>
                    <Tfoot>Powered by Coingecko</Tfoot>
                </Table>
        </TableContainer>
        </Box>
    )
}

export default App;
