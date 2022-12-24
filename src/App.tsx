import Table from "./components/Table"

const tables = [   
    {
        id:1,
        tableName:1,
        status:'Available'
    },
    {
        id:2,
        tableName:2,
        status:'Occupied'
    },
    {
        id:3,
        tableName:3,
        status:'Occupied'  
    }

]

function App() {

  return (
    <div className="App">
        <Table />
    </div>
  )
}

export default App
