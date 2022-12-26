import Table from "./components/Table"

const tables = [   
    {
        id:1,
        tableNumber:1,
        status:'Available'
    },
    {
        id:2,
        tableNumber:2,
        status:'Occupied'
    },
    {
        id:3,
        tableNumber:3,
        status:'Occupied'  
    }

]

function App() {

  return (
    <div className="App">
        <div className="flex gap-2">
            {
                tables.map(table=> (<Table key={table.id} tableNumber={table.tableNumber} status={table.status}/>))
            }
        </div>
    </div>
  )
}

export default App
