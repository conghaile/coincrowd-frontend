import { Favorite } from './Favorite'
import { Link } from 'react-router-dom'
import { Tr, Td } from '@chakra-ui/react'
import { useState } from 'react'


export const Coin = ({ loggedIn, loginPrompt, setLoginPrompt, coin, favoritesList, setFavoritesList }) => {
    return (
        <Tr>
            <Td color="black">
                <Favorite loggedIn={loggedIn} loginPrompt={loginPrompt} setLoginPrompt={setLoginPrompt} coinName={coin[0]} favoritesList={favoritesList} setFavoritesList={setFavoritesList}/> 
                <Link to={`/coins/${coin[0]}`} state={coin[0]}>
                    {coin[0]}
                </Link>
            </Td>
            <Td isNumeric color="black">
                {coin[1]}
            </Td>
        </Tr>
    )
}