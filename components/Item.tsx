import React, { FC } from 'react'
import { Employee } from '../hooks/useEmployees'

type ItemProps = {
    employee: Employee
}

const Item: FC<ItemProps> = ({ employee: { name, teamId } }) => {
    return (
        <div className="p-5 border-b-2">
            <div>{name}</div>
            <div>{teamId}</div>
        </div>
    )
}

export default Item
