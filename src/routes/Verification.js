import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

export const Verification = () => {

    let [failed, setFailed] = useState(false)
    let [searchParams, setSearchParams] = useSearchParams()
    const token = searchParams.get("token")
    
    useEffect(() => {
        if (token !== null) {
            axios.get(`${process.env.REACT_APP_CLIENTROOT}/verify-user?token=${token}`, {
                withCredentials: true,
                credentials: 'include'
            }).then(() => {
                window.location.replace(`${process.env.REACT_APP_BASEURL}`)
            }).catch(err => {
                if (err) {
                    setFailed(true)
                }
            })
        }
    }, [])

    if (failed) {
        return (
            //Will link to a retry page later
            <h1>Verification failed.</h1>
        )
    }


    return (
        <h1>Please wait while we verify your account...</h1>
    )
}