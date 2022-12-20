import * as React from "react"
import { Text } from "theme-ui"
import { Button } from "theme-ui"
import { Link } from "theme-ui"
import { preToCodeBlock } from "@lekoarts/themes-utils"
import Code from "@lekoarts/gatsby-theme-minimal-blog/src/components/code"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import ExternalLink from "../../../gatsby-plugin-theme-ui/components/ExternalLink"

const MdxComponents = {
  Text: (props: any) => <Text {...props} />,
  Button: (props: any) => <Button {...props} />,
  Title: (props: any) => <Title {...props} />,
  Link: (props: any) => <Link {...props} />,
  ExternalLink: ({children, href, ...props}) => (
		<ExternalLink href={href} {...props}>
			{children}
		</ExternalLink>
	),
  pre: (preProps: any) => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />
  },
}

console.log('loaded MDXcomponents');

export default MdxComponents