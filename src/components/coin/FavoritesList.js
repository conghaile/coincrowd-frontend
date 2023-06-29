import {
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Tfoot,
    Text,
    Box,
    
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useState, useEffect } from 'react'

import { Coin } from './Coin'

export const FavoritesList = ({ loggedIn, favoritesList, loginPrompt, setLoginPrompt, setFavoritesList, fullFavs }) => {
    //am I using state and effects in an absurd manner because of dumb design choices? yeah probably
    //is John Stupid my uncle? you betcha
    //do i give a fuck? no siree
    const [favsCopy, setFavsCopy] = useState([])
    const [favsAlpha, setFavsAlpha] = useState([])
    const [favsMentions, setFavsMentions] = useState([])

    useEffect(() => {
        setFavsCopy(fullFavs)
        setFavsMentions(fullFavs)
        let favsHash = {}
        fullFavs.forEach(coin => favsHash[coin[0]] = coin[1])
        let favNames = Object.keys(favsHash).sort()
        let sorted = []
        favNames.forEach(favName => {
            let fav = []
            fav.push(favName, favsHash[favName])
            sorted.push(fav)
        })
        setFavsAlpha(sorted)

    }, [fullFavs])

    if (loggedIn) {
        if (favoritesList.length > 0) {
            return (
                <Box>
                    <Text fontWeight="semibold" color='black' fontSize='3xl'>Your favorites</Text>
                    <TableContainer>
                        <Table variant="simple" color="whiteAlpha.800" bg="whiteAlpha.200">
                            <Thead>
                                <Tr>
                                    <Th
                                        _hover={{
                                            color: "#85eab8"
                                        }}
                                        color="black"
                                        onClick={() => setFavsCopy(favsAlpha)}
                                    >
                                        Coin
                                        <ChevronDownIcon boxSize={4}/>
                                    </Th>
                                    <Th
                                        _hover={{
                                            color: "#85eab8"
                                        }}
                                        color="black"
                                        onClick={() => setFavsCopy(favsMentions)}
                                        textAlign="right"
                                    >
                                        Mentions (24h)
                                        <ChevronDownIcon boxSize={4} />
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {favsCopy.map(coin =>
                                    
                                    <Coin loggedIn={loggedIn} loginPrompt={loginPrompt} setLoginPrompt={setLoginPrompt} coin={coin} favoritesList={favoritesList} setFavoritesList={setFavoritesList}/>
                                )}
                            </Tbody>
                            
                        </Table>
                    </TableContainer>
                    <br />
                </Box>
                
            )
        } else {
            return (
                <Box>
                    <Text fontWeight="semibold" color='black' fontSize='3xl'>Your favorites</Text>
                    <Text as='i'>You don't have any favorites yet. Click the star next to a coin name to start building your portfolio.</Text>
                    <br />
                    <br />
                </Box>
                
            )
        }
        
    }
}