import { Input } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import SearchDropdown from './SearchDropdown'

const SearchBar = () => {
    let location = useLocation()
    const [ searchTerm, setSearchTerm ] = useState("")
    const [ results, setResults ] = useState([])
    const handleChange = (event) => setSearchTerm(event.target.value)
    
    useEffect(() => {
        if (searchTerm.length > 0) {
            axios
                .get(`${process.env.REACT_APP_BASEURL}/search?search=${searchTerm}`)
                .then(res => {
                    setResults(res.data)
                })
        } else {
            setResults([])
        }
    }, [searchTerm])

    useEffect(() => {
        setSearchTerm("")
    }, [location])

    return (
        <div className="searchBarContainer">
            <Input htmlsize={5} placeholder="Search..." width="auto" value={searchTerm} onChange={handleChange}/>
            <SearchDropdown results={results} search={searchTerm}/>
        </div>
    )
}

export default SearchBar