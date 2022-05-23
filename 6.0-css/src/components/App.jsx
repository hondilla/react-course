import Table from './Table/Table';

const App = () => {
  const columns = [ 'Id', 'Nombre' ];
  const rows = [
    {"id": 1, "name": "Spain"}, 
    {"id": 2, "name": "Andorra"},
    {"id": 3, "name": "Portugal"}
  ];

  return <Table 
    title="React Course" 
    rows={ rows } 
    columns={ columns }
  />
}

export default App;