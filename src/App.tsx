import AppLayout from "./app-layout/AppLayout";
import PageLayout from "./app-layout/PageLayout";

function App() {
  return (
    <AppLayout>
      <PageLayout title="My App">
        {Array.from({ length: 100 }).map((_, index) => (
          <div key={index}>Content {index + 1}</div>
        ))}
      </PageLayout>
    </AppLayout>
  );
}

export default App;
