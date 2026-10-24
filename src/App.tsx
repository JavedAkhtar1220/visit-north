import { Typography } from "@mui/material";
import AppLayout from "./app-layout/AppLayout";
import PageLayout from "./app-layout/PageLayout";

function App() {
  return (
    <AppLayout>
      <PageLayout title="My App">
        <Typography
          sx={{
            fontSize: 88,
            fontFamily: "Space Grotesk",
          }}
        >
          123,1232
        </Typography>
        {Array.from({ length: 100 }).map((_, index) => (
          <Typography key={index}>Content {index + 1}</Typography>
        ))}
      </PageLayout>
    </AppLayout>
  );
}

export default App;
