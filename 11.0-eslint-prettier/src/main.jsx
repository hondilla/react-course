import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import 'normalize.css/normalize.css';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
