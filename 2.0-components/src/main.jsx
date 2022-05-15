import React from 'react'
import ReactDOM from 'react-dom/client'

const Table = () => <table>
  <thead>
    <tr>
      <th>Column Title</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row Value</td>
    </tr>
  </tbody>
</table>;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Table></Table>
  </React.StrictMode>
);