import { useState } from "react"

const TableRowSearcher = ({ setSearch }) => {
    const [input, setInput] = useState('');

    const onChangeHandler = ({ target }) => {
        setSearch(target.value);
        setInput(target.value);
    }

    return <input 
        type="text" 
        className="form-control mb-4" 
        placeholder="Busca un país" 
        onChange={ onChangeHandler }
        value={ input }
    />
}

export default TableRowSearcher;