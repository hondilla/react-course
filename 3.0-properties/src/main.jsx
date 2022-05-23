'use strict';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Table from './components/Table/Table';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <StrictMode>
      <Table title="React Course" />
    </StrictMode>
  );
