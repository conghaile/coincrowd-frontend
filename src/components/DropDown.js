import axios from 'axios'
import { useState, useEffect } from 'react'

const DropDown = ({ coin, weeks, func }) => {
    const [open, setOpen] = useState(false)
    const [menuText, setMenuText] = useState("All")
    const [menuOptions, setMenuOptions] = useState([])
    const [sources, setSources] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:3001/sources/${coin}`)
            .then(response => {
                setSources(response.data)       
            })
    }, [])
    

    const handleOpen = () => {
        setOpen(!open)
        if (menuText !== "All") {
            if (!menuOptions.includes("All"))
                var newMenuOptions = sources
                newMenuOptions.unshift("All")
                setMenuOptions(newMenuOptions)
        }
        else {
            setMenuOptions(sources)
        }
    }

    const handleOptionClick = (option) => {
        console.log(weeks)
         if (option !== "All") {
            axios
                .get(`http://localhost:3001/sourcedata/${option}/${coin}/${weeks}`)
                .then(response => {
                    func(response.data)
                })
         }
         else {
            axios
                .get(`http://localhost:3001/coindata/${coin}/${weeks}`)
                .then(response => {
                    func(response.data)
                })
         }
         setMenuText(option)
         setOpen(!open)
    }

    return (
        <div className="dropdown">
            <p>Select source</p>
            <button onClick={handleOpen}>{menuText}</button>
            {open ?
                menuOptions.map(option => 
                    <button onClick={() => handleOptionClick(option)}>{option}</button>
                )
            : null}
        </div>
    )

}

export default DropDown