import React from "react"
import { Paragraph } from "grommet"
import styled from "styled-components"
import { Layout, SEO, MainHeading, MapChart, MapFilter } from "../components"

const StyledParagraph = styled(Paragraph)`
  font-family: Verdana;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  padding-top: 3.125rem;
`
/**
 * The main Landing page of the site
 */
const IndexPage = () => (
  <Layout>
    <SEO title="vera-poc" />
    <MainHeading />
    <StyledParagraph margin="none" alignSelf="center" color="veraText" fill>
      In aliquam, mauris id commodo dictum, ipsum augue sollicitudin augue, quis
      auctor dui purus id eros. Aliquam porttitor auctor mauris, non pulvinar
      urna varius eget. Suspendisse potenti. Nunc a porttitor ex. Mauris eu nibh
      ut elit elementum aliquam. Morbi nunc dolor, bibendum in dapibus a,
      suscipit ac lorem
    </StyledParagraph>
    <MapFilter />
    <MapChart />
  </Layout>
)

export default IndexPage
