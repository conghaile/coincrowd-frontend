import { useEffect, useState } from 'react'
import LoginModal from './LoginModal'

const Login = ({ loginEndpoint }) => {
    const [clicked, setClicked] = useState(false)

    // Passing this directly to LoginModal doesn't seem to work, have to pass setClicked and define handleClick again inside it
    const handleClick = () => setClicked(!clicked)

    return (
        <div>
            <button onClick={handleClick}>Login</button>
            <LoginModal clicked={clicked} setClicked={setClicked}/>
        </div>
    )
}

export default Login