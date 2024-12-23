import { createRoot } from 'react-dom/client';
import App from 'app/App';
import { BrowserRouter } from 'react-router';
import 'app/styles/index.scss';
import { StoreProvider } from 'app/providers/StoreProvider';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <StoreProvider>
            <App />
        </StoreProvider>
    </BrowserRouter>
);