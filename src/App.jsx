import React from "react"
import { Cyclist } from "./components"

import "./App.css"

const App = () => {
  return (
    <>
      <h1 id='heading'>42 London - Cyclist</h1>
      <section>
        <Cyclist name={"Tadej Pogacar"} team={"UAE"} type={"GC"} age={26} tdf={17} />
        <Cyclist name={"Jonas Vinegaard"} team={"Visma-Lease a Bike"} type={"GC"} age={27} tdf={9} />
        <Cyclist name={"Mark Cavendish"} team={"Astana Qazaqatan"} type={"Sprinter"} age={39} tdf={35} />
        <Cyclist name={"Emile Sherrott"} team={"N/A"} type={"N/A"} age={33} tdf={0} />
      </section>
    </>
  )
}

export default App
