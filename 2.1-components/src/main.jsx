import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Table from './components/Table';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <StrictMode>
      <Table />
    </StrictMode>
  );
