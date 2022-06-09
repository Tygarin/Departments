import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'

type Props = {}

const BackBtn: React.FC = (props: Props) => {
    const navigate = useNavigate()
    return (
        <Button
            variant="outline-secondary"
            onClick={() => navigate('/departments')}
        >
            Назад
        </Button>
    )
}

export default BackBtn