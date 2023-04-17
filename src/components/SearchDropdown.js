import { Link } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

const SearchDropdown = ({ results, search }) => {
    if (results.length > 0) {
        results.forEach(result => {
            console.log(result[0])
        })
        return (
            <Box borderColor='black' border='1px'> 
                {results.map(result => 
                    <div>
                        <Link to={`/coins/${result[0]}`} state={result[0]}>
                            {result[0]}
                        </Link>
                    </div>
                )}
            </Box>
        )
    } else if (search.length > 0 && results.length === 0) {
        return (
            <div>Nudding found sir...</div>
        )
    }
}

export default SearchDropdown