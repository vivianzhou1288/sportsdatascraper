"use client";
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { AppAuth } from "../context/AppContext";
import {
  Typography,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { useRouter } from "next/navigation";
import LoadingPage from "../components/LoadingPage";
const { getJson } = require("serpapi");

const PlayerPage = () => {
  const { data } = AppAuth();
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (data) {
      setLoading(false); // Set loading to false once data is available
    }
  }, [data]);

  if (loading || !data) {
    return <LoadingPage />; // Render loading state
  }

  // useEffect(() => {
  //   if (data && data.name) {
  //     const fetchImages = async () => {
  //       try {
  //         const response = await fetch(
  //           `/api/image?query=${encodeURIComponent(data.name)}`
  //         );
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         const result = await response.json();
  //         setImage(result); // Adjust based on the actual structure of the result
  //       } catch (err) {
  //         console.log(err.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     fetchImages();
  //   } else {
  //     // If data or data.name is not available, skip fetching and stop loading
  //     setLoading(false);
  //   }
  // }, [data]);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100wh",
        backgroundColor: "#E8E3DE",
        margin: 0,
      }}
    >
      <NavBar />
      <Grid container spacing={3} sx={{ py: 10, px: 10 }}>
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <Typography variant="h6">Name: {data.name}</Typography>
          <Typography variant="h6">Team: {data.team}</Typography>
          <Typography variant="h6">Position: {data.position}</Typography>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ mt: 3 }}
            onClick={() => {
              router.push("/searchpage");
            }}
          >
            New Search
          </Button>
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <Box
            sx={{
              backgroundColor: "#D2C2BC",
              p: 3,
              borderRadius: "8px",
              maxHeight: "70vh",
              overflowY: "scroll",
            }}
          >
            <Typography variant="h7" sx={{ textTransform: "capitalize" }}>
              {data.playerStats.title}
            </Typography>
            <List>
              {Object.entries(data.playerStats)
                .filter(([key]) => key !== "title") // Exclude the title from the stats display
                .map(([key, value]) => (
                  <ListItem key={key}>
                    <ListItemText
                      primary={key}
                      secondary={value}
                      primaryTypographyProps={{ fontWeight: "bold" }}
                    />
                  </ListItem>
                ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
    // <div className="relative flex flex-col min-h-screen bg-[#E8E3DE]">
    //   <NavBar />
    //   <div className="py-10 md:px-[10px] lg:px-[10rem] justify-between flex-col flex md:flex-row ">
    //     <div>
    //       <p>Name: {data.name}</p>
    //       <p>Position: {data.position}</p>
    //     </div>
    //     <div className="bg-[#D2C2BC] p-5 rounded-xl" alt="player">
    //       <div className="mt-5">
    //         <h1>{data.playerStats.title}</h1>
    //         <ul className="list-disc ml-6 mt-2">
    //           {Object.entries(data.playerStats).map(
    //             ([key, value]) =>
    //               key !== "title" && (
    //                 <li key={key} className="mb-2">
    //                   <strong>{key}:</strong> {value}
    //                 </li>
    //               )
    //           )}
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default PlayerPage;
