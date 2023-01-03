import React from "react"
import renderer from "react-test-renderer"

import ExternalLink from "../externalLink"

describe("ExternalLink", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ExternalLink href="https://linuxhandbook.com/homelab/">Homelab</ExternalLink>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})