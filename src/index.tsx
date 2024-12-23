import { createRoot } from 'react-dom/client';
import App from 'app/App';
import { BrowserRouter } from 'react-router';
import 'app/styles/index.scss';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);