import Header from './Header/Header';
import Table from './Table/Table';

const App = () => {
  const columns = [ 'Id', 'Nombre' ];
  const rows = [
    {"id": 1, "name": "Spain"}, 
    {"id": 2, "name": "Andorra"},
    {"id": 3, "name": "Portugal"}
  ];

  return <>
    <Header title="React Course" />
    <div className="container">
        <Table rows={ rows } columns={ columns } />
    </div>
  </>
}

export default App;