import React from "react"
import { Grommet, Box } from "grommet"
import { CaretDownFill } from "grommet-icons"

import "./layout.css"
import { Header } from "./header"

/**
 * The "Theme" object used for the application. Any changes made here will
 * apply to the whole site/components. For more details please see:
 * https://github.com/grommet/grommet/wiki/Grommet-v2-theming-documentation
 */
const veraTheme = {
  global: {
    colors: {
      veraGray4: "#231F20",
      veraRed: "#EF4136",
      veraWhite: "#FFFFFF",
      veraText: "#4E4E55;",
    },
  },
  select: {
    icons: {
      color: "white",
      down: <CaretDownFill />,
      margin: "0",
    },
  },
}

/**
 * Renders the page and controls the layout of where components are located
 * @param
 */
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grommet theme={veraTheme} full>
      <Header />
      <Box as="main" pad="medium" flex overflow="auto">
        {children}
      </Box>
    </Grommet>
  )
}
