import { Outlet, Link } from 'react-router-dom'
import { Box, Text, } from '@chakra-ui/react'
import SearchBar from '../components/SearchBar'
import Login from '../components/Login'




const Root = () => {
    
    return (
        <Box mx="5em" my="3em">
            <Box display="flex" justifyContent="space-between">
                <Box bg="whiteAlpha.900">
                    <Link to={`/`}>
                        <Text color='black'>CoinCrowd</Text>
                    </Link>
                    <Text color='black'>Data-driven insights powered by the crowd.</Text>
                    <div class="links">
                        <Link to={`/about`}>
                            <Text color='black'>About</Text>
                        </Link>
                        <Link to={`/`}>
                            <Text color='black'>Coins</Text>
                        </Link>
                    </div>
                </Box>
                <Box>
                    <Login />
                    <SearchBar />
                </Box>
            </Box>
            <Box>
                <div id="detail">
                        <Outlet />
                    </div>
            </Box>
        </Box>
    )
}

export default Root