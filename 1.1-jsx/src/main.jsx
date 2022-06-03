import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <table>
        <thead>
          <tr>
            <th>Título columna</th>
            <th>Título columna</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Valor de Celda</td>
            <td>Valor de Celda</td>
          </tr>
          <tr>
            <td>Valor de Celda</td>
            <td>Valor de Celda</td>
          </tr>
        </tbody>
      </table>
    </React.StrictMode>
  );
