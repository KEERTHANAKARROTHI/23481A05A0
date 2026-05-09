"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

const notifications = [
  {
    id: 1,
    type: "Placement",
    message: "CSX Corporation hiring",
    timestamp: "2026-04-22 17:51:18",
  },
  {
    id: 2,
    type: "Result",
    message: "Mid-sem results released",
    timestamp: "2026-04-22 17:50:54",
  },
  {
    id: 3,
    type: "Event",
    message: "Tech Fest tomorrow",
    timestamp: "2026-04-22 17:50:06",
  },
];

export default function Home() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Campus Notifications Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {notifications.map((notification) => (
            <Grid item xs={12} md={6} lg={4} key={notification.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    {notification.type}
                  </Typography>

                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {notification.message}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 2 }}
                  >
                    {notification.timestamp}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}