import React, { useState } from "react";
import { Box, Tabs, Tab, Typography, Grid, Paper } from "@mui/material";
import church from "../assets/img/church2.jpg";
import altar from "../assets/img/altar2.jpg";
import prayer from "../assets/img/chuch1.jpg";

const tabItems = [
  {
    label: "Our Vision",
    content: "To create an atmosphere where believers can discover and nurture their potentials in accordance with God's purpose for their lives.",
    verse: "Colossians 1:10",
    img: church,
  },
  {
    label: "Our Mission",
    content: "Our mission is to serve the NAF Community through pastoral care, robust Biblical guidance, and build the spiritual and moral resilience of personnel to fulfill Airpower tasks demanded by National Defense and security imperatives.",
    img: altar,
  },
  {
    label: "Command Philosophy",
    content: "To develop the spiritual, moral, and ethical component of NAF personnel to effectively meet the Airpower Demands of National Security in all Operational Environments.",
    img: prayer,
  },
  {
    label: "The Key Enablers",
    content: (
      <ul>
        <li>Provide sustainable pastoral care, moral, and ethical guidance for enhanced NAF operations.</li>
        <li>Create an enabling environment for mutual respect and harmonious co-existence between personnel and their dependents irrespective of faith differences.</li>
        <li>Prioritize sound Biblical teaching and qualitative worship atmospheres as well as enhanced spiritual and material welfare.</li>
      </ul>
    ),
    img: altar,
  },
];

function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-${index}`}
      sx={{ p: 3, width: "100%" }}
      {...other}
    >
      {value === index && children}
    </Box>
  );
}

export default function CenteredTabs() {
  const [value, setValue] = useState(0);
  const handleChange = (_, newValue) => setValue(newValue);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: "600px", md: "800px" },
        mx: "auto",
        mt: 5,
      }}
    >
      {/* Tabs */}
      <Paper
  elevation={3}
  sx={{
    borderRadius: "100px",
    overflow: "hidden",
    width: "80%",
    textAlign: "center",
    margin: "auto", // Centers horizontally
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Centers child elements
    justifyContent: "center",
  }}
>
  <Tabs
    value={value}
    onChange={handleChange}
    visibleScrollbar
    variant="scrollable"
    centered
    textColor="black"
    indicatorColor="primary"
    aria-label="Church Support Tabs"
    sx={{
      "& .MuiTabs-indicator": {
        display: "none", // Removes the underline indicator
      },
      "& .MuiTab-root": {
        textTransform: "none",
        fontWeight: "bold",
        transition: "color 0.3s",
        "&:hover": {
          textDecoration: "none", // Prevents underline on hover
          backgroundColor: "#ec3237",
          borderRadius: "40px",
        },
        "&.Mui-selected": {
          // Keeps the selected tab styled
          backgroundColor: "#ec3237",
          borderRadius: "40px",
        },
      },
    }}
  >
    {tabItems.map((item, index) => (
      <Tab key={index} label={item.label} id={`tab-${index}`} />
    ))}
  </Tabs>
</Paper>


    {/* Tab Panels */}
{tabItems.map((item, index) => (
  <CustomTabPanel key={index} value={value} index={index}>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto px-4 py-8">
      {/* Image Section */}
      <div className="w-full flex justify-center">
        <img
          src={item.img}
          alt={item.label}
          className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="text-center lg:text-left font-Fira space-y-4 leading-8">
        <p className="text-white font-bold text-lg">{item.label}</p>

        {typeof item.content === "string" ? (
          <p className="text-xl text-gray-800">{item.content}</p>
        ) : (
          <div className="text-left text-lg text-gray-800  [&_ol]:list-decimal [&_ul]:list-disc [&_li]:mb-2 [&_ol]:pl-6 [&_ul]:pl-6">
            {item.content}
          </div>
        )}

        {item.verse && (
          <p className="italic text-gray-600 font-semibold">{item.verse}</p>
        )}
      </div>
    </div>
  </CustomTabPanel>
))}

    </Box>
  );
}
