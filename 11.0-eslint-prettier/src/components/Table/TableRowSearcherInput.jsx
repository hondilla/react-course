import { forwardRef } from 'react';

const TableRowSearcherInput = (props, ref) => (
  <input
    type='text'
    className='form-control'
    placeholder='Busca un país'
    ref={ref}
  />
);

export default forwardRef(TableRowSearcherInput);
