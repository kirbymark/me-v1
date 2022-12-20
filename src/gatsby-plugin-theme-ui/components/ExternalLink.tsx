/** @jsx jsx */
import * as React from "react"
import { jsx, ThemeUICSSObject } from "theme-ui"
import theme from "../index"

const externalLinkStyles: ThemeUICSSObject = {
  color: `primary`,
  textDecorationLine: `none`,
  "&:hover": { textDecorationLine: `underline` },
}

const ExternalLink = ({children, ...props}) => (
  <a sx={{ ...externalLinkStyles }} target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
)

export default ExternalLink

