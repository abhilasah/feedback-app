import { useState } from 'react';
import AppErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import AppRouter from './router/AppRouter';

function App() {
    console.log(import.meta.env.VITE_APP_TITLE);
    const [darkMode, setDarkMode] = useState(true);
    return (
        <div
            className={` font-body w-full h-screen ${
                darkMode ? 'dark' : ''
            } bg-blue-900`}
        >
            <div className="">
                <AppErrorBoundary>
                    <button
                        className="bg-transparent hover:bg-red-500 bg-red-400 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
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
