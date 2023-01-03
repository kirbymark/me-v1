import React from "react"
import renderer from "react-test-renderer"

import Alert from "../alert"

describe("Alert", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Alert type="success">Let's improve people's lives together!</Alert>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})