import React from 'react'
import { useHistory, useLocation } from 'react-router'

const Welcome = () => {
    const history = useHistory()
    const location = useLocation()
    return (
        <div>
            <h1>Welcome {location.state.name}</h1>
        </div>
    )
}

export default Welcome
