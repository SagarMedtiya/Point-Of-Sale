import React from 'react'

interface ITableProps  {
    tableNumber: string;
    status: string
}

const Table = ({tableNumber, status}: ITableProps) => {
  return (
    <div>
        <h3>{tableNumber}</h3>
        <span>{status}</span>
    </div>
  )
}

export default Table