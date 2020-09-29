import React from "react";
import { Grommet, Box } from "grommet";
import { CaretDownFill } from "grommet-icons"


import "./layout.css";
import { Header } from "./header";

/** 
 * 
*/
const veraTheme = {
  global: {
    colors: {
      veraGray4: '#231F20',
      veraRed: '#EF4136',
      veraWhite: "#FFFFFF"
    },
  },
  select: {
    icons: {
      color: "white",
      down: <CaretDownFill/>
    },
  }
};

/**
 * 
 * @param 
 */
export const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <Grommet
      theme={veraTheme}
      full
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box as="main" pad="medium" flex overflow="auto">
        {children}
      </Box>
    </Grommet>
  )
}
