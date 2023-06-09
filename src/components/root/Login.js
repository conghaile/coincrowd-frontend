import { useEffect, useState } from 'react'
import LoginModal from './LoginModal'
import axios from 'axios'

const Login = () => {
    const [clicked, setClicked] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const [email, setEmail] = useState('')

    const sessionToken = document.cookie.split('=')[1]

    // Passing this directly to LoginModal doesn't seem to work, have to pass setClicked and define handleClick again inside it
    const handleClick = () => setClicked(!clicked)
    
    const handleLogout = () => {
        setLoggedIn(false)
        axios.get(`${process.env.REACT_APP_BASEURL}/logout`).then(() => {
            document.cookie = 'SESSION_ID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
            window.location.reload()
        })
        
    }
    
    useEffect(() => {
        if (sessionToken !== undefined) {
            axios.get(`${process.env.REACT_APP_BASEURL}/ensure-login`, { withCredentials: true, credentials: 'include'}).then((res) => {
                setLoggedIn(true)
                setEmail(res.data.email)
            }).catch((error) => {
                if (error.response.status === 401) {
                    setLoggedIn(false)
                }
            })
        }
    }, [])

    if (!loggedIn) {
        return (
            <div>
                <button onClick={handleClick}>Login</button>
                <LoginModal clicked={clicked} setClicked={setClicked}/>
            </div>
        )
    }

    return (
        <div>
            <div>Logged in as {email}</div>
            <button onClick={handleLogout}>Log out</button>
        </div>
    )
}

export default Login