import React from 'react'
import { Accordion, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { employeeInterface } from '../interfaces'
import { deleteEmployee } from '../store/departmentsSlice'

type Props = {
    id: number,
    title: string,
    employees: employeeInterface[],
    addEmployee: (id: number) => void
}

function AccordionItem({ id, title, employees, addEmployee }: Props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <Accordion.Item eventKey={JSON.stringify(id)}>
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
                {employees.map((employee: employeeInterface) => (
                    <div key={employee.id} className='d-flex'>
                        <Button
                            variant='light'
                            className='accordion-btn'
                            key={employee.id}
                            onClick={() => navigate(`/departments/${id}/${employee.id}`)}
                        >
                            {employee.name}
                        </Button>
                        <Button
                            as="input"
                            type="button"
                            className='m-2'
                            value="x"
                            onClick={() => dispatch(deleteEmployee({
                                employeeId: employee.id,
                                departmentId: id
                            }))}
                        />
                    </div>
                ))}
                <Button
                    onClick={() => addEmployee(id)}
                    className='add-btn'
                    variant="info"
                >
                    Создать Employee
                </Button>
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default AccordionItem