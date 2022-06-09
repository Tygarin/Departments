export interface employeeInterface {
    id: number,
    name: string,
    desc: string
}

export interface departmentInterface {
    id: number,
    title: string,
    employees: employeeInterface[]
}