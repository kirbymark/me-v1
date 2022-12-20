import * as React from "react"
import { Text } from "theme-ui"
import { Button } from "theme-ui"
import { Link } from "theme-ui"
import { Card } from "theme-ui"
import { Image } from "theme-ui"
import { Divider } from 'theme-ui'
import { Paragraph } from 'theme-ui'
import { Heading } from 'theme-ui'
import { Box } from 'theme-ui'
import { preToCodeBlock } from "@lekoarts/themes-utils"
import Code from "@lekoarts/gatsby-theme-minimal-blog/src/components/code"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import ExternalLink from "../../../gatsby-plugin-theme-ui/components/ExternalLink"

const MdxComponents = {
  Text: (props: any) => <Text {...props} />,
  Button: (props: any) => <Button {...props} />,
  Title: (props: any) => <Title {...props} />,
    Image: (props: any) => <Image {...props} />,
  Link: (props: any) => <Link {...props} />,
  ExternalLink: ({children, href, ...props}) => (
		<ExternalLink href={href} {...props}>
			{children}
		</ExternalLink>
	),
  Card: ({image, imageText="image text", title, text, ...props}) => (
    
            <Card {...props} >
              <Box p={2}>
                <Box p={2} sx={{position: 'relative', }}>
                  <Image src={image} alt={imageText} />
                  <Box bg='cardbackground' sx={{position: 'absolute', bottom: '40px', }}>
                    <Heading as='h1' sx={{color: 'primary', ml: 3, mr: 4, my: 2 }}>{title}</Heading>
                  </Box>
                  
                </Box>
                <Paragraph variant="block">{text}</Paragraph>
                </Box>
            </Card>
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