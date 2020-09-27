import React from "react"
import { Header as GrommetHeader, TextInput, Select } from "grommet"
import VeraLogo from "../../static/vera-logo.svg"
import { FormSearch, Close } from "grommet-icons"

/**
 *
 */
export const Header = () => (
  <>
    <GrommetHeader background="veraGray4">
      <VeraLogo />
      <div style={{ width: "275px" }}>
        <TextInput
          placeholder="Search for my state, city or county"
          icon={<FormSearch />}
          reverse
          size="small"
        />
      </div>
    </GrommetHeader>
    <GrommetHeader background="veraRed">
      <p>In aliquam, mauris id commodo dictum</p>
      <Select
        options={["option 1", "option 2", "option 3"]}
        placeholder="Suspendisse"
      />
      <p>elit elementum aliquam</p>
      <Select
        options={["option 1", "option 2", "option 3"]}
        placeholder="Joiyditkdip"
      />
      <Close />
    </GrommetHeader>
  </>
)
