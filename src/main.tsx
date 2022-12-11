import AppErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Layout from "./components/layout/layout";
import AppRouter from "./router/AppRouter";

const Main = (props:any) => {
  console.log(import.meta.env.VITE_APP_TITLE);
  return (
      <div>
          <AppErrorBoundary>
              <Layout>
                  <AppRouter {...props} />
              </Layout>
          </AppErrorBoundary>
      </div>
  );
}

export default Main;