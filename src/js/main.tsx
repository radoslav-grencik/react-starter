import ReactDOM from 'react-dom/client';

import App from '@/js/App';

import 'modern-css-reset';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(<App />);
}
