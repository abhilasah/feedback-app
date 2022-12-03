import AppErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Layout from './components/layout/layout';
import AppRouter from './router/AppRouter';

function App() {
    console.log(import.meta.env.VITE_APP_TITLE);
    return (
        <div>
            <AppErrorBoundary>
                <Layout>
                    <AppRouter />
                </Layout>
            </AppErrorBoundary>
        </div>
    );
}

export default App;
