import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addDepartment, addEmployee } from '../store/departmentsSlice'

type Props = {
    show: boolean,
    handleClose: () => void,
    type: 'department' | 'employee' | null,
    id?: number
}

const ModalWindow: React.FC<Props> = ({ show, handleClose, type, id }: Props) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Создать {type}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='modal-body'>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        type='text'
                        placeholder={`Введите ${type === 'employee' ? 'имя' : 'название'}`}
                    />
                    {type === 'employee' &&
                        <input
                            onChange={(e) => setDesc(e.target.value)}
                            type='text'
                            placeholder='Введите описание'
                        />}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={() => {
                        if (type === 'employee') dispatch(addEmployee({ name: title, desc: desc, id: id }))
                        if (type === 'department') dispatch(addDepartment({ title }))
                        handleClose()
                    }}
                >
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalWindow