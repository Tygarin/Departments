import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { departmentInterface, employeeInterface } from "../interfaces";

export const fetchDepartments = createAsyncThunk(
    'departments/fetchDepartments',
    async function () {
        const response = await fetch('https://62a050a3a9866630f80b9dc0.mockapi.io/sda')

        const data = await response.json()

        return data
    }
)

export interface State {
    departments: departmentInterface[],
    status: string | null,
    error: string | null
}

const departmentSlice = createSlice({
    name: 'department',
    initialState: {
        departments: [],
        status: null,
        error: null
    } as State,
    reducers: {
        addDepartment(state, action) {
            state.departments.push({
                id: state.departments.length + 1,
                title: action.payload.title,
                employees: []
            });
        },
        addEmployee(state, action) {
            const currentDepartment = state.departments.find((e: departmentInterface) => e.id === action.payload.id)
            const lastId = currentDepartment?.employees[currentDepartment?.employees.length - 1]?.id || 0
            currentDepartment?.employees.push({
                id: lastId + 1,
                name: action.payload.name,
                desc: action.payload.desc
            })
        },
        deleteEmployee(state, action) {
            const currentDepartment = state.departments.find((e: departmentInterface) => e.id == action.payload.departmentId)
            if (currentDepartment)
                currentDepartment.employees = currentDepartment.employees.filter((item: employeeInterface) => item.id !== action.payload.employeeId)
        }
    },
    extraReducers: {
        [String(fetchDepartments.pending)]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [String(fetchDepartments?.fulfilled)]: (state, action) => {
            state.status = 'resolved'
            state.departments = action.payload
        },
        [String(fetchDepartments?.rejected)]: (state, action) => { },
    }
})

export const { addDepartment, addEmployee, deleteEmployee } = departmentSlice.actions;

export default departmentSlice.reducer