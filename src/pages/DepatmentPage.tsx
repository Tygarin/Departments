import React from 'react'
import { useSelector } from 'react-redux'
import BackBtn from '../components/BackBtn'
import DepartmentCard from '../components/DepartmentCard'
import Loader from '../components/Loader'
import { departmentInterface } from '../interfaces'

type Props = {}

const DepatmentPage: React.FC = (props: Props) => {
    const {status, departments} = useSelector((state: any) => state.departments)
    const resolvedCondition = status === 'resolved'
    const loadingCondition = status === 'loading'
    
    return (
        <div>
            <div className='card-content'>
                {resolvedCondition && departments.map((elem: departmentInterface) => (
                    <DepartmentCard
                        key={elem.id}
                        title={elem.title}
                        employees={elem.employees}
                    />
                ))}
                {loadingCondition && <Loader />}
            </div>
        </div>
    )
}

export default DepatmentPage