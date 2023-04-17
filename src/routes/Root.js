import { Outlet, Link } from 'react-router-dom'
import { Box, Text, } from '@chakra-ui/react'
import SearchBar from '../components/SearchBar'

const Root = () => {
    return (
        <Box bg="whiteAlpha.900">
            <Link to={`/`}>
                <Text color='black'>CoinCrowd</Text>
            </Link>
            <Text color='black'>Data-driven insights powered by the crowd.</Text>
            <SearchBar />
            <div class="links">
                <Link to={`/about`}>
                    <Text color='black'>About</Text>
                </Link>
                <Link to={`/`}>
                    <Text color='black'>Coins</Text>
                </Link>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </Box>
    )
}

export default Root