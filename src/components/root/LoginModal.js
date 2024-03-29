import { Box, Button, Input, InputGroup, InputRightElement, FormControl, FormLabel, Link, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginModal = ({ clicked, setClicked }) => {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [badPassword, setBadPassword] = useState(false)
    const [unverified, setUnverified] = useState(false)
    const [noAccountExists, setNoAccountExists] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => setClicked(!clicked)
    const handleShow = () => setShow(!show)
    const handleSubmit = event => {
        event.preventDefault()
        nativeLogin(email, password)
    };

    const nativeLogin = (email, password) => {
        setBadPassword(false)
        setUnverified(false)
        setNoAccountExists(false)
        axios
            .post(`${process.env.REACT_APP_BASEURL}/native-login`, {
                "email": email,
                "password": password
            }, {
                withCredentials: true,
                credentials: 'include'
            }).then(() => {
                window.location.reload()
            })
            .catch(error => {
                //Need to handle specific response codes from server
                const res = error.response
                if (res.status === 401) {
                    setBadPassword(true)
                } else if (res.status === 403) {
                    setUnverified(true)
                } else if (res.status === 404) {
                    setNoAccountExists(true)
                }
            })
    }
    

    if (clicked) {
        return (
            <Box left={0} right={0} top={0} bottom={0} position='fixed' height='100vh' width='100vw' backgroundColor='blackAlpha.700' display="flex" justifyContent="center" alignItems="center">
                <Box width='30vw' height='50vh' backgroundColor='white' padding="10px" >
                    <Box top={0} right={0}>
                        <Button onClick={handleClick}>Close</Button>
                    </Box>
                    <Box>       
                        <form onSubmit={handleSubmit}>
                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input placeholder="Email" onSubmit={handleSubmit} onChange = {event => setEmail(event.currentTarget.value)}/>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input placeholder="Password" type={show ? 'text' : 'password'} onSubmit={handleSubmit} onChange = {event => setPassword(event.currentTarget.value)}/>
                                    <InputRightElement>
                                        <Button onClick={handleShow}>Show</Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            {badPassword ? <Text color="red">Incorrect email or password.</Text> : <div></div>}
                            {noAccountExists ? <Text color="red">No account exists with that email. Please sign up instead.</Text> : <div></div>}
                            <Button type="submit" width="full" variant="outline" mt={4}>
                                Sign in
                            </Button>
                        </form>
                        <Button>Sign in with Google</Button>
                        <Button>Sign in with Facebook</Button>
                        <Box>Need an account? <Link href={`/signup`}>Sign up.</Link></Box>
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default LoginModal