import { Outlet, Link } from 'react-router-dom'
import { Box, Text } from '@chakra-ui/react'

const Root = () => {
    return (
        <Box bg="blackAlpha.900">
            <Link to={`/`}>
                <Text color='whiteAlpha.900'>CoinCrowd</Text>
            </Link>
            <Text color='whiteAlpha.900'>Data-driven insights powered by the crowd.</Text>
            <div class="links">
                <Link to={`/about`}>
                    <Text color='whiteAlpha.900'>About</Text>
                </Link>
                <Link to={`/`}>
                    <Text color='whiteAlpha.900'>Coins</Text>
                </Link>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </Box>
    )
}

export default Root