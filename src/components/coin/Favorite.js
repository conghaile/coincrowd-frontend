import { Icon, IconButton } from '@chakra-ui/react'
import { FaRegStar } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const Favorite = ({ loggedIn, loginPrompt, setLoginPrompt, coinName, favoritesList, setFavoritesList }) => {
    let favCopy = [...favoritesList]
    let favorited = favCopy.includes(coinName)

    const handleClick = () => {
        if (!loggedIn) {
            setLoginPrompt(!loginPrompt)
        } else if (favorited) {
            axios.delete(`${process.env.REACT_APP_BASEURL}/favorites?coin=${coinName}`, {
                withCredentials: true,
                credentials: 'include'
            }).then(res => {
                let coin = res.data.coin
                let newFavs = favCopy.filter(fav => fav !== coin)
                setFavoritesList(newFavs)
                
            })
        } else {
            axios.post(`${process.env.REACT_APP_BASEURL}/favorites`, {coin: coinName}, {
                withCredentials: true,
                credentials: 'include'
            }).then(res => {
                let coin = res.data.coin
                favCopy.push(coin)
                setFavoritesList(favCopy)
            })
        }
    }

    if (favorited) {
        return (
            <IconButton aria-label='Favorite' size='sm' colorScheme='transparent' icon={<Icon as={FaRegStar} color="gold"/>} onClick={handleClick}/>
        )
    }
    return (
        <IconButton aria-label='Favorite' size='sm' colorScheme='transparent' icon={<Icon as={FaRegStar} color="black"/>} onClick={handleClick}/>
    )
}