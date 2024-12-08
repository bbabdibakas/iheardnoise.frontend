import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'app/styles/index.scss'
import App from 'app/App';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
