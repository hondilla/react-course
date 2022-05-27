import { useState } from "react"

const TableRowSearcher = ({ rows, setFilteredRows }) => {
    const [search, setSearch] = useState('');

    const onChangeHandler = ({ target }) => {
        setSearch(target.value);
        const filteredRows = rows.filter(({ name }) => 
            name.toLowerCase().includes(target.value.toLowerCase())
        );
        setFilteredRows(filteredRows);
    }

    return <input type="text" className="form-control mb-4" placeholder="Busca un país" onChange={ onChangeHandler } value={ search } />
}

export default TableRowSearcher;