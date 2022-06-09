import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'

type Props = {}

const Main: React.FC = (props: Props) => {
    const navigate = useNavigate()
    return (
        <div className='d-grid gap-2'>
            <Button variant="primary" size="lg" onClick={() => navigate('/departments')}>
                Departments list
            </Button>
        </div>
    )
}

export default Main