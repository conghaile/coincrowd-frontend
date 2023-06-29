import { Box, Text, Link } from '@chakra-ui/react'

const About = () => {
    return (
        <Box py="1em" px="15vw" flexAlign="center">
            <Text fontWeight='semibold' color='black' fontSize='4xl' textAlign="center">Get rich while touching grass.</Text>
            <br />
            <Text color='black' textAlign="center">
                Browsing /biz/ all day to find the next big shitcoin sucks. Let CoinCrowd take care of the doomscrolling for you. <Link href="https://github.com/conghaile/coincrowd-frontend/blob/main/README.md" color="blue">Learn more here.</Link>
            </Text>
        </Box>
    )
}

export default About