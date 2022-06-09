import React, { useState } from 'react'
import { Accordion, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { departmentInterface, employeeInterface } from '../interfaces'
import AccordionItem from './AccordionItem'
import ModalWindow from './Modal'

type Props = {}

interface Modal {
    type: 'department' | 'employee' | null,
    open: boolean,
    id?: number
}

const Sidebar: React.FC = (props: Props) => {
    const departments = useSelector((state: any) => state.departments.departments)
    const [isModal, setModal] = useState<Modal>({
        type: null,
        open: false,
        id: 0
    })
    return (
        <div className='sidebar'>
            <div>
                <Accordion alwaysOpen>
                    {departments?.map((e: departmentInterface) => (
                        <AccordionItem
                            key={e.id}
                            id={e.id}
                            title={e.title}
                            employees={e.employees}
                            addEmployee={(id: number) => setModal({
                                type: 'employee',
                                open: true,
                                id: id
                            })}
                        />
                    ))}
                </Accordion>
                <Button
                    className='add-btn'
                    variant="light"
                    onClick={() => setModal({
                        type: 'department',
                        open: true
                    })}
                >
                    Создать Department
                </Button>
            </div>
            <ModalWindow
                type={isModal.type}
                show={isModal.open}
                id={isModal.id}
                handleClose={() => setModal({
                    type: null,
                    open: false
                })}
            />
        </div>
    )
}

export default Sidebar