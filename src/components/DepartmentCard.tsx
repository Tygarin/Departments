import React from 'react'
import { Card } from 'react-bootstrap'
import { employeeInterface } from '../interfaces'

type Props = {
    title: string,
    employees: employeeInterface[],
}

const DepartmentCard: React.FC<Props> = ({ title, employees }: Props) => {
    return (
        <Card className='department-card'>
            <Card.Body>
                <Card.Title>
                    Название: {title}
                </Card.Title>
                {employees.map(e =>
                    <Card.Text key={e.id}>
                        {e.name}
                    </Card.Text>)}
            </Card.Body>
        </Card>
    )
}

export default DepartmentCard