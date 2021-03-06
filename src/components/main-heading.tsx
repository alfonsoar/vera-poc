import React from "react"
import { Heading, Box, BoxProps } from "grommet"
import styled from "styled-components"

const StyledHeading = styled(Heading)`
  font-family: Georgia;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  margin: 0;
`

const StyledBox = styled(Box)`

`
/**
 * Renders the main heading for the page
 */
export function MainHeading(props: BoxProps) {
  return (
    <StyledBox alignSelf="center" gap="none" {...props}>
      <StyledHeading color="veraText">Hello Jared!</StyledHeading>
    </StyledBox>
  )
}
