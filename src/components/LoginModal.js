import { Box, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useState } from 'react'

const LoginModal = ({ clicked, setClicked }) => {
    const [show, setShow] = useState(false)

    const handleClick = () => setClicked(!clicked)
    const handleShow = () => setShow(!show)

    if (clicked) {
        return (
            <Box left={0} right={0} top={0} bottom={0} position='fixed' height='100vh' width='100vw' backgroundColor='blackAlpha.700' display="flex" justifyContent="center" alignItems="center">
                <Box display="flex" width='30vw' height='50vh' backgroundColor='white' padding="10px" flex-direction="column">
                    <Box display="flex" flexDirection="row">
                    <Button onClick={handleClick}>Close</Button>
                    </Box>
                    
                    <Box>
                        <InputGroup>
                            <Input placeholder="Username"/>
                            <Input placeholder="Password" type={show ? 'text' : 'password'}/>
                            <InputRightElement>
                                <Button onClick={handleShow}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        
                        <Button>Sign in with Google</Button>
                        <Button>Sign in with Facebook</Button>
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default LoginModal