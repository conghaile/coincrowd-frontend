import { Box, Button, Input, InputGroup, InputRightElement, FormControl, FormLabel } from '@chakra-ui/react'
import { SignupMessage } from '../components/signup/SignupMessage'
import { useState } from 'react'
import axios from 'axios'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)
    const [emailResponse, setEmailResponse] = useState("")

    const handleShow = () => setShow(!show)

    const handleSubmit = () => {
        setEmailResponse("")
        axios
            .post(`${process.env.REACT_APP_BASEURL}/native-signup`, {
                "email": email,
                "password": password
            },
            {
                withCredentials: true,
                credentials: 'include'
            }).then(res => {
                if (res.status === 200) {
                    setEmailResponse("success")
                }
            })
            .catch((error) => {
                const res = error.response
                if (res.status === 502) {
                    setEmailResponse("error")
                } else if (res.status === 401) {
                    setEmailResponse("failed")
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
                <SignupMessage response={emailResponse}/>
            </Box>
        </Box>
    )
}

export default SignUp