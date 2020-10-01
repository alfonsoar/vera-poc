import React from "react"
import { Box, Select, ResponsiveContext } from "grommet"
import styled from "styled-components"

const StyledBox = styled(Box)`
  padding-top: 3%;
`

const StyledSelect = styled(Select)`
  font-weight: normal;
  width: 60px;
  height: 30px;
`

/**
 * Renders the main heading for the page
 */
export function MapFilter() {
  const size = React.useContext(ResponsiveContext)

  return (
    <StyledBox alignSelf="center" direction="row">
      <StyledSelect
        options={["option 1", "option 2", "option 3"]}
        placeholder="Uctor"
        alignSelf="center"
      />

      <StyledSelect
        options={["option 1", "option 2", "option 3"]}
        placeholder="Suspendisse"
        alignSelf="center"
      />

      <StyledSelect
        options={["option 1", "option 2", "option 3"]}
        placeholder="Turna varius"
        alignSelf="center"
      />
      {size !== "small" && (
        <>
          <StyledSelect
            options={["option 1", "option 2", "option 3"]}
            placeholder="Varius"
            alignSelf="center"
          />

          <StyledSelect
            options={["option 1", "option 2", "option 3"]}
            placeholder="Porttitor"
            alignSelf="center"
          />
          <StyledSelect
            options={["option 1", "option 2", "option 3"]}
            placeholder="Dapibus"
            alignSelf="center"
          />
        </>
      )}
    </StyledBox>
  )
}
