import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import App from './App.tsx';
import { Provider } from '@/components/ui/provider';
import '../styles/index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ConfigProvider>
            <Provider>
                <App />
            </Provider>
        </ConfigProvider>
    </StrictMode>
);
