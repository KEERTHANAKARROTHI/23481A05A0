"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
  Chip,
  Box,
  Avatar,
  Rating,
} from "@mui/material";

import MovieIcon from "@mui/icons-material/Movie";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import StarIcon from "@mui/icons-material/Star";
import TheatersIcon from "@mui/icons-material/Theaters";

const movies = [
  {
    id: 1,
    title: "Interstellar",
    genre: "Sci-Fi",
    rating: 4.9,
    release: "2014",
    description:
      "A team of explorers travel through a wormhole in space to save humanity.",
  },
  {
    id: 2,
    title: "Joker",
    genre: "Drama",
    rating: 4.7,
    release: "2019",
    description:
      "A failed comedian transforms into Gotham City's infamous criminal.",
  },
  {
    id: 3,
    title: "Avengers: Endgame",
    genre: "Action",
    rating: 4.8,
    release: "2019",
    description:
      "The Avengers assemble for one final battle against Thanos.",
  },
];

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right,rgb(16, 24, 40),rgb(31, 41, 55))",
      }}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "linear-gradient(90deg,#7b1fa2,#512da8)",
        }}
      >
        <Toolbar>
          <MovieIcon sx={{ mr: 1 }} />

          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            CineVerse Movies Hub
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 5 }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            color: "white",
            fontWeight: 700,
            mb: 1,
          }}
        >
          Trending Movies
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "#d1d5db",
            mb: 5,
          }}
        >
          Discover blockbuster movies, ratings, and cinematic experiences.
        </Typography>

        <Grid container spacing={4}>
          {movies.map((movie) => (
            <Grid item xs={12} sm={6} lg={4} key={movie.id}>
              <Card
                sx={{
                  borderRadius: 5,
                  overflow: "hidden",
                  background:
                    "linear-gradient(to bottom,rgb(255,255,255),rgb(240,240,255))",
                  transition: "0.3s",
                  height: "100%",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: 10,
                  },
                }}
              >
                <Box
                  sx={{
                    height: 180,
                    background:
                      "linear-gradient(135deg,#7b1fa2,#512da8)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: "white",
                      color: "#512da8",
                    }}
                  >
                    <TheatersIcon sx={{ fontSize: 40 }} />
                  </Avatar>
                </Box>

                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Chip
                      icon={<LocalFireDepartmentIcon />}
                      label={movie.genre}
                      color="secondary"
                    />

                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#512da8",
                      }}
                    >
                      {movie.release}
                    </Typography>
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    {movie.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {movie.description}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Rating
                      value={movie.rating}
                      precision={0.1}
                      readOnly
                    />

                    <Typography sx={{ fontWeight: 600 }}>
                      {movie.rating}
                    </Typography>

                    <StarIcon
                      sx={{
                        color: "#ffb300",
                        fontSize: 20,
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}