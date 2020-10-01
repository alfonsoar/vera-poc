import React from "react"
import styled from "styled-components"
import { FormSearch, Close } from "grommet-icons"
import {
  Header as GrommetHeader,
  TextInput,
  Select,
  Box,
  ResponsiveContext,
} from "grommet"

import VeraLogo from "../../static/vera-logo.svg"

const StyledSelect = styled(Select)`
  font-weight: normal;
  width: 110px;
  height: 30px;
  ::placeholder {
    color: #ffffff;
  }
`

const StyledVeraLogo = styled(VeraLogo)`
  margin-left: 30px;
`

const StyledFirstLabel = styled.p`
  padding-left: 30px;
`

const StyledThirdLabel = styled.p`
  padding-left: 10px;
  font-size: 14px;
`

const StyledSecondLabel = styled.p``

const StyledTextInput = styled(TextInput)`
  background: white;
  width: 275px;
  font-weight: 400
  font-size: 11px;
  color: #4E4E55;
  padding-right: 30px;
  ::placeholder {
    color: #4E4E55;
  }
`

const StyledTextInputSmall = styled(TextInput)`
  background: white;
  width: 200px;
  font-weight: 400
  font-size: 11px;
  color: #4E4E55;
  padding-right: 30px;
  ::placeholder {
    color: #4E4E55;
  }
`

const StyledTextInputContainer = styled.div`
  padding-right: 30px;
`

const StyledDismissIconContainer = styled(Box)`
  padding-right: 30px;
`
/**
 * Renders the `Header` component used for the site.
 */
export function Header() {
  const size = React.useContext(ResponsiveContext)

  return (
    <>
      <GrommetHeader height="60px" background="veraGray4">
        <StyledVeraLogo />
        <StyledTextInputContainer>
        {size === "small" ? (<StyledTextInputSmall
            placeholder="Search for my state..."
            icon={<FormSearch color="#4E4E55" />}
            reverse
            size="small"
          />) : (<StyledTextInput
            placeholder="Search for my state, city or county"
            icon={<FormSearch color="#4E4E55" />}
            reverse
            size="small"
          />)}
        </StyledTextInputContainer>
      </GrommetHeader>
      <GrommetHeader height="60px" background="veraRed">
        <Box justify="start" direction="row" gap="medium">
          {size === "small" ? (
            <StyledThirdLabel> In aliquam, mauris id commodo dictum</StyledThirdLabel>
          ) : (
            <StyledFirstLabel>
              In aliquam, mauris id commodo dictum
            </StyledFirstLabel>
          )}
          <StyledSelect
            options={["option 1", "option 2", "option 3"]}
            placeholder="Suspendisse"
            alignSelf="center"
          />
          {size !== "small" && (
            <>
              <StyledSecondLabel>elit elementum aliquam </StyledSecondLabel>
              <StyledSelect
                options={["option 1", "option 2", "option 3"]}
                placeholder="Joiyditkdip"
                alignSelf="center"
              />
            </>
          )}
        </Box>
        <StyledDismissIconContainer justify="end" direction="row">
          <Close size="small" />
        </StyledDismissIconContainer>
      </GrommetHeader>
    </>
  )
}
