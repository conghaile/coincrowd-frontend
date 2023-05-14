import { Box, Button, Input, InputGroup, InputRightElement, FormControl, FormLabel } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)
    const [failed, setFailed] = useState(false)

    const handleShow = () => setShow(!show)

    const handleSubmit = () => {
        setFailed(false)
        axios
            .post(`${process.env.REACT_APP_BASEURL}/native-signup`, {
                "email": email,
                "password": password
            },
            {
                withCredentials: true,
                credentials: 'include'
            }
            )
            .catch((error) => {
                if (error) {
                    setFailed(true)
                }
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
                            <Input placeholder="Email" onSubmit={(e) => {
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
                {failed ? <Box>An account already exists with that email address. Please sign in.</Box> : <div></div>}
            </Box>
        </Box>
    )
}

export default SignUp