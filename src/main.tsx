import ReactDOM from 'react-dom/client';

import 'modern-css-reset';

import App from './App';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(<App />);
}
