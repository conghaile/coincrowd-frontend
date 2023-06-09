import { Icon, IconButton } from '@chakra-ui/react'
import { FaRegStar } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export const Favorite = ({ loggedIn, loginPrompt, setLoginPrompt }) => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
        if (!loggedIn) {
            setLoginPrompt(!loginPrompt)
        }
    }

    useEffect(() => {
        console.log(loginPrompt)
    }, [loginPrompt])

    if (clicked) {
        if (loggedIn) {
            return (
                <IconButton aria-label='Favorite' size='sm' colorScheme='transparent' icon={<Icon as={FaRegStar} color="gold"/>} onClick={handleClick}/>
            )
        }
    }
    return (
        <IconButton aria-label='Favorite' size='sm' colorScheme='transparent' icon={<Icon as={FaRegStar} color="black"/>} onClick={handleClick}/>
    )
}