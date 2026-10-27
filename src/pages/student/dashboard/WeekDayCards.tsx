import { Box, Card, Typography } from "@mui/material";

export default function WeekDayCards() {
  const mockData = [
    {
      id: 1,
      day: "M",
      completedModules: 10,
    },
    {
      id: 2,
      day: "T",
      completedModules: 8,
    },
    {
      id: 3,
      day: "W",
      completedModules: 6,
    },
    {
      id: 4,
      day: "T",
      completedModules: 7,
    },
    {
      id: 5,
      day: "F",
      completedModules: 5,
    },
    {
      id: 6,
      day: "S",
      completedModules: 4,
    },
    {
      id: 7,
      day: "S",
      completedModules: 3,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: 2,
        overflowX: "auto",
        overflowY: "hidden",
      }}
    >
      {mockData.map((item) => (
        <Card
          key={item.id}
          sx={{
            minWidth: { xs: "63px", md: "85px" },
            width: { xs: "63px", md: "85px" },
            height: { xs: "75px", md: "100px" },
            borderRadius: "60px",
            bgcolor: "#D3F9D8",
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "none",
            flexShrink: 0,
          }}
        >
          <Typography
            variant="h6"
            fontSize={{ xs: 12, md: 16 }}
            fontWeight={400}
          >
            {item.day}
          </Typography>
          <Typography
            fontWeight={600}
            variant="h6"
            fontSize={{ xs: 14, md: 20 }}
          >
            {item.completedModules}
          </Typography>
        </Card>
      ))}
    </Box>
  );
}
