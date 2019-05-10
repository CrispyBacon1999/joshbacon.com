import React, { Component } from "react"
import { Stack, Text, Link, FontWeights } from "office-ui-fabric-react"
import "./index.css"

import { NeutralColors } from "@uifabric/fluent-theme/lib/fluent/FluentColors"
import Card from "../components/Card"
import { Depths } from "@uifabric/fluent-theme/lib/fluent/FluentDepths"

const boldStyle = { root: { fontWeight: FontWeights.semibold } }

class App extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            height: 400,
            width: "100%",
            marginBottom: -400,
            background: "linear-gradient(to top, #0099dd, #00aaff)",
            boxShadow: Depths.depth8,
          }}
        />
        <Stack
          horizontalAlign="center"
          verticalAlign="center"
          verticalFill
          styles={{
            root: {
              width: "960px",
              margin: "0 auto",
              textAlign: "center",
              color: "#605e5c",
              fontFamily:
                "Segoe UI,SegoeUI,Helvetica Neue,Helvetica,Arial,sans-serif",
            },
          }}
          className="App"
          gap={15}
        >
          <h1
            style={{
              fontFamily: "Oleo Script Swash Caps",
              fontSize: "5rem",
            }}
          >
            vyper
          </h1>
          <Stack horizontal gap={20}>
            <Card headline="Quick.">
              Have your bot up and running in less than 5 minutes.
            </Card>
            <Card headline="Simple.">
              Designed to be easy to use with very little learning curve.
            </Card>
            <Card headline="Extensible.">
              Extend with plugins to handle the toughest of tasks.
            </Card>
          </Stack>
        </Stack>
      </div>
    )
  }
}

export default App
