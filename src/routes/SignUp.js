import { Box, Button, Input, InputGroup, InputRightElement, FormControl, FormLabel } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)

    const handleShow = () => setShow(!show)

    const handleSubmit = () => {
        axios
            .post(`${process.env.REACT_APP_BASEURL}/native-signup`, {
                "email": email,
                "password": password
            })
            .then(res => {
                console.log(res)
            })
    }

    
    return (
        <Box>
            <Box width='30vw' height='50vh' backgroundColor='white' padding="10px" >
                <Box>       
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }}>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder="Username" onSubmit={(e) => {
                                e.preventDefault()
                                handleSubmit()
                            }} onChange = {event => setEmail(event.currentTarget.value)}/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input placeholder="Password" type={show ? 'text' : 'password'} onSubmit={(e) => {
                                    e.preventDefault()
                                    handleSubmit()
                                }} onChange = {event => setPassword(event.currentTarget.value)}/>
                                <InputRightElement>
                                    <Button onClick={handleShow}>Show</Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Button type="submit" width="full" variant="outline" mt={4}>
                            Sign up
                        </Button>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}

export default SignUp