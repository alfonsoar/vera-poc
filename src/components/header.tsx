import React from "react"
import styled from "styled-components"
import { FormSearch, Close } from "grommet-icons"
import { Header as GrommetHeader, TextInput, Select, Box } from "grommet"

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

const FirstLabel = styled.p`
  padding-left: 30px;
`

const StyledTextInput = styled(TextInput)`
  background: white;
  width: 275px;
  font-weight: 400
  font-size: 11px;
  color: #4E4E55;
  ::placeholder {
    color: #4E4E55;
  }
`
/**
 *
 */
export const Header = () => {
  return (
    <>
      <GrommetHeader height="60px" background="veraGray4">
        <StyledVeraLogo />
        <div style={{ paddingRight: "30px" }}>
          <StyledTextInput
            placeholder="Search for my state, city or county"
            icon={<FormSearch color="#4E4E55"/>}
            reverse
            size="small"
          />
        </div>
      </GrommetHeader>
      <GrommetHeader height="60px" background="veraRed">
        <Box justify="start" direction="row" gap="medium">
          <FirstLabel>In aliquam, mauris id commodo dictum</FirstLabel>
            <StyledSelect
              options={["option 1", "option 2", "option 3"]}
              placeholder="lalala"
              alignSelf="center"
            />
          <p>elit elementum aliquam</p>
          <StyledSelect
            options={["option 1", "option 2", "option 3"]}
            placeholder="Joiyditkdip"
            alignSelf="center"
          />
        </Box>
        <Box justify="end" direction="row">
          <Close size="small" />
        </Box>
      </GrommetHeader>
    </>
  )
}
