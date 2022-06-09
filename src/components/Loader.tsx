import React from 'react'
import { Spinner } from 'react-bootstrap'

type Props = {}

const Loader = (props: Props) => {
    return (
        <div className='loader'>
            <Spinner animation="border" />
        </div>
    )
}

export default Loader