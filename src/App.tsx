import { useState } from 'react';
import AppErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import AppRouter from './router/AppRouter';

function App() {
    console.log(import.meta.env.VITE_APP_TITLE);
    const [darkMode, setDarkMode] = useState(true);
    return (
        <div className={`min-h-full ${darkMode ? 'dark' : ''}`}>
            <div className="bg-white dark:bg-slate-800">
                <AppErrorBoundary>
                    <button
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        Toggle Mode
                    </button>
                    <AppRouter />
                </AppErrorBoundary>
            </div>
        </div>
    );
}

export default App;
