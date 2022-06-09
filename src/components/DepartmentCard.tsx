import React from 'react'
import { Card } from 'react-bootstrap'
import { employeeInterface } from '../interfaces'

type Props = {
    title: string,
    employees: employeeInterface[],
}

const DepartmentCard: React.FC<Props> = (props: Props) => {
    return (
        <Card className='department-card'>
            <Card.Body>
                <Card.Title>
                    Название: {props.title}
                </Card.Title>
                {props.employees.map(e =>
                    <Card.Text key={e.id}>
                        {e.name}
                    </Card.Text>)}
            </Card.Body>
        </Card>
    )
}

export default DepartmentCard