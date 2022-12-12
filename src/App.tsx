import AppErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Layout from './components/layout/layout';
import AppRouter from './router/AppRouter';

function App() {
    console.log(import.meta.env.VITE_APP_TITLE);
    return (
        <AppErrorBoundary>
            <Layout>
                <AppRouter />
            </Layout>
        </AppErrorBoundary>
    );
}

export default App;
