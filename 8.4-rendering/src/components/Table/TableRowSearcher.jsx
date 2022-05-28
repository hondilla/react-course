import { useState } from "react"

const TableRowSearcher = ({ setFilter }) => {
    const [search, setSearch] = useState('');

    const onChangeHandler = ({ target }) => {
        setSearch(target.value);
        setFilter(target.value);
    }

    return <input type="text" className="form-control mb-4" placeholder="Busca un país" onChange={ onChangeHandler } value={ search } />
}

export default TableRowSearcher;