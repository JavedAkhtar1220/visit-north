import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router";
import AppLayout from "./app-layout/AppLayout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </QueryClientProvider>
  );
}

export default App;
