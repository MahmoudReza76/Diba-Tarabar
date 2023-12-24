"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import FirstTabContent from "./FirstTabContent";

export default function BlogTabs({ data }) {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderTop: "4px solid #D9D9D9",
        padding: "0 25px",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab
          sx={{ color: "#141414", fontSize: "16px", fontWeight: "800" }}
          value="one"
          label="آخرین مطالب"
          wrapped
        />
        <Tab value="two" label="یک ماه گذشته " />
        <Tab value="three" label="یک سال گذشته" />
      </Tabs>
      {value === "one" && (
        <div>
          <FirstTabContent data={data} />
        </div>
      )}
      {value === "two" && <div>محتوای تب دو</div>}
      {value === "three" && <div>محتوای تب سه</div>}
    </Box>
  );
}
