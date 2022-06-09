import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router'
import BackBtn from '../components/BackBtn'
import { departmentInterface, employeeInterface } from '../interfaces'

const EmployeePage: React.FC = ({ }: any) => {
  const location = useLocation()
  const { departments, status } = useSelector((state: any) => state.departments)
  const [employee, setEmployee] = useState<employeeInterface>({} as employeeInterface)
  useEffect(() => {
    const arr = location.pathname.split('/')
    const departmentsId = arr ? arr[arr.length - 2] : 0
    const employeesId = arr ? arr[arr.length - 1] : 0
    
    if (status === 'resolved') {
      const currentDepartment = departments.find((item: departmentInterface) => item.id == departmentsId)
      const currentEmployee = currentDepartment?.employees.find((item: employeeInterface) => item.id == employeesId)
      setEmployee(currentEmployee)
    }
  }, [departments, location])

  return (
    <div>
      <div>
        {employee?.name}
        <br/>
        {employee?.desc}
      </div>
      <BackBtn />
    </div>
  )
}

export default EmployeePage