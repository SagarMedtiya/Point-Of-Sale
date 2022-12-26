import React from 'react'

interface ITableProps  {
    tableNumber: number;
    status: string
}

const Table = ({tableNumber, status}: ITableProps) => {
  return (
    <div className='bg-slate-600 p-4 text-center'>
        <h3 className='text-3xl'>{tableNumber}</h3>
        <span>{status}</span>
    </div>
  )
}

export default Table;