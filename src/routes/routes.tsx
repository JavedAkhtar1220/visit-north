import { Route } from "react-router";
import App from "@/App";

function ComingSoon() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-900">Coming Soon!</h1>
    </div>
  );
}

const appRoutes = (
  //   <Route path="/" element={<App />} errorElement={<ErrorBoundary />}>
  <Route path="/" element={<App />} errorElement={<div>Error</div>}>
    {/* Common Authenticated Routes  */}
    <Route path="*" element={<ComingSoon />} />
  </Route>
);

export default appRoutes;
