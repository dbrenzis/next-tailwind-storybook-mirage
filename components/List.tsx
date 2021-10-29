import React from 'react'
import { useGetEmployeeById, useGetEmployees } from '../hooks/useEmployees'
import { useGetTeams } from '../hooks/useTeams'
import Item from './Item'

const List = () => {
    const { data, isLoading } = useGetEmployees()
    const employee = useGetEmployeeById()
    const teams = useGetTeams()
    return (
        <div className=" m-10 border-2 border-black">
            {isLoading ?
                <div>Loading...</div>
                :
                data?.employees.map((employee, idx) => <Item key={idx} employee={employee} />)
            }

        </div>
    )
}

export default List
