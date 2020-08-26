import React from "react"
import * as Highcharts from "highcharts"
import factory from "highcharts/modules/map"
import HighchartsReact from "highcharts-react-official"

import { mapData } from "../static/map-data"
if (typeof Highcharts === 'object') {
  factory(Highcharts)
}

const data = [
  ["us-ma", 0],
  ["us-wa", 1],
  ["us-ca", 2],
  ["us-or", 3],
  ["us-wi", 4],
  ["us-me", 5],
  ["us-mi", 6],
  ["us-nv", 7],
  ["us-nm", 8],
  ["us-co", 9],
  ["us-wy", 10],
  ["us-ks", 11],
  ["us-ne", 12],
  ["us-ok", 13],
  ["us-mo", 14],
  ["us-il", 15],
  ["us-in", 16],
  ["us-vt", 17],
  ["us-ar", 18],
  ["us-tx", 19],
  ["us-ri", 20],
  ["us-al", 21],
  ["us-ms", 22],
  ["us-nc", 23],
  ["us-va", 24],
  ["us-ia", 25],
  ["us-md", 26],
  ["us-de", 27],
  ["us-pa", 28],
  ["us-nj", 29],
  ["us-ny", 30],
  ["us-id", 31],
  ["us-sd", 32],
  ["us-ct", 33],
  ["us-nh", 34],
  ["us-ky", 35],
  ["us-oh", 36],
  ["us-tn", 37],
  ["us-wv", 38],
  ["us-dc", 39],
  ["us-la", 40],
  ["us-fl", 41],
  ["us-ga", 42],
  ["us-sc", 43],
  ["us-mn", 44],
  ["us-mt", 45],
  ["us-nd", 46],
  ["us-az", 47],
  ["us-ut", 48],
]

const mapOptions = {
  chart: {
    map: "countries/us/custom/us-all-mainland",
  },
  title: {
    text: "USA"
  },
  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: "bottom",
    },
  },
  colorAxis: {
    min: 0,
  },
  series: [
    {
      mapData: mapData,
      name: "America",
      data: data,
    },
  ],
}

export default function Home() {
  // fetch(
  //   "https://raw.githubusercontent.com/vera-institute/jail-population-data/master/jail_population.csv"
  // )
  //   .then(response => response.text())
  //   .then(text => {
  //     console.log(text)
  //   })

  return (
    <div>
      <h1>ITP 2.0 POC</h1>

      <HighchartsReact
        options={mapOptions}
        constructorType={"mapChart"}
        highcharts={Highcharts}
      />
    </div>
  )
}
