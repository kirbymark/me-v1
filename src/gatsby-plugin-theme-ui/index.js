import { merge } from "theme-ui"
import tailwind from "@theme-ui/preset-tailwind"

const myColors = {
    slate: ['', '#f8fafc','#f1f5f9','#e2e8f0','#cbd5e1','#94a3b8','#64748b','#475569','#334155','#1e293b','#0f172a'],
    stone: ['', '#fafaf9','#f5f5f4','#e7e5e4','#d6d3d1','#a8a29e','#78716c','#57534e','#44403c','#292524','#1c1917'],
    blues: ['#d7f2ff', '#b3dcf2', '#91c5e6', '#72b0d9', '#569acc', '#2a74b3', '#0d5499', '#003e80', '#003066', '#00234d', '#001733', '#000b19', '#000000'],
}

const variants = {
  alerts: {
    success: {},
    hint: {},
    warning: {},
    info: {},
    danger: {},
  },
  audio: {
    specimens: {},
  },
  badge: {
    specimens: {},
  },
  tables: {
    borderRadius: {},
    shadow: {},
    space: {},
    specimens: {},
  },
  families: {
    specimens: {},
  },
  rows: {
    specimens: {},
  },
  swatches: {
    specimens: {},
  },
  download: {
    specimens: {},
  },
  typography: {
    fontFamily: {},
    fontSize: {},
    fontWeight: {},
    heading: {},
  },
  codeStyles: {
    default: {},
  },
  video: {
    specimens: {},
  },
}

const theme = merge(tailwind, {
  config: {
    initialColorModeName: `light`,
    useColorSchemeMediaQuery: `system`,
  },
  colors: {
    primary: myColors.blues[6],
    secondary: myColors.blues[5],
    toggleIcon: tailwind.colors.gray[8],
    heading: tailwind.colors.black,
    headingOther: myColors.blues[5],
    divide: myColors.blues[4],
    muted: tailwind.colors.gray[2],
    text: tailwind.colors.black,
    background: tailwind.colors.white,
    cardbackground: myColors.blues[0],
    cardoutline: myColors.blues[1],
    modes: {
      dark: {
        text: tailwind.colors.white,
        primary: myColors.blues[4],
        secondary: myColors.blues[3],
        toggleIcon: tailwind.colors.gray[4],
        background: myColors.blues[11],
        cardbackground: myColors.blues[10],
        cardoutline: myColors.blues[9],
        heading: tailwind.colors.white,
        headingOther: myColors.blues[6],
        divide: myColors.blues[5],
        muted: tailwind.colors.gray[8],
      },
    },
  },
  fonts: {
    body: `-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
  },
  styles: {
    root: {
      color: `text`,
      backgroundColor: `background`,
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
    },
    p: {
      fontSize: [1, 1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
      wordBreak: `break-word`,
    },
    ul: {
      li: {
        fontSize: [1, 1, 2],
        letterSpacing: `-0.003em`,
        lineHeight: `body`,
        "--baseline-multiplier": 0.179,
        "--x-height-multiplier": 0.35,
      },
    },
    ol: {
      li: {
        fontSize: [1, 1, 2],
        letterSpacing: `-0.003em`,
        lineHeight: `body`,
        "--baseline-multiplier": 0.179,
        "--x-height-multiplier": 0.35,
      },
    },
    h1: {
      variant: `text.heading`,
      fontSize: [4, 5, 5, 6],
      mt: 4,
    },
    h2: {
      variant: `text.heading`,
      fontSize: [3, 4, 4, 5],
      mt: 4,
    },
    h3: {
      variant: `text.heading`,
      fontSize: [2, 3, 3, 4],
      mt: 4,
    },
    h4: {
      variant: `text.heading`,
      fontSize: [1, 2, 2, 3],
      mt: 3,
    },
    h5: {
      variant: `text.heading`,
      fontSize: [1, 2],
      mt: 3,
    },
    h6: {
      variant: `text.heading`,
      fontSize: 1,
      mb: 2,
    },
    blockquote: {
      borderLeftColor: `primary`,
      borderLeftStyle: `solid`,
      borderLeftWidth: `4px`,
      mx: 0,
      pl: 4,
      p: {
        fontStyle: `italic`,
      },
    },
    table: {
      width: `100%`,
      my: 4,
      borderCollapse: `separate`,
      borderSpacing: 0,
      [[`th`, `td`]]: {
        textAlign: `left`,
        py: `4px`,
        pr: `4px`,
        pl: 0,
        borderColor: `muted`,
        borderBottomStyle: `solid`,
      },
    },
    th: {
      verticalAlign: `bottom`,
      borderBottomWidth: `2px`,
      color: `heading`,
    },
    td: {
      verticalAlign: `top`,
      borderBottomWidth: `1px`,
    },
    hr: {
      mx: 0,
    },
    img: {
      borderRadius: `4px`,
      boxShadow: `lg`,
      maxWidth: `100%`,
    },
  },
  layout: {
    container: {
      padding: [3, 4],
      // maxWidth: `1024px`,
      maxWidth: `1280px`,
    },
    content: {
      figure: {
        margin: 0,
        img: {
          borderRadius: `4px`,
          boxShadow: `lg`,
          maxWidth: `100%`,
        },
      },
    },
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'text',
      }
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
    },
    outline: {
      color: 'primary',
      bg: 'background',
      '&:hover': {
        bg: 'primary',
        color: 'background',
      }
    },
  },
  text: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
    heading: {
      fontWeight: `600`,
      color: `primary`,
    },
  },
  copyButton: {
    backgroundColor: `background`,
    border: `none`,
    color: `text`,
    cursor: `pointer`,
    fontSize: [`14px`, `14px`, `16px`],
    fontFamily: `body`,
    letterSpacing: `0.025rem`,
    transition: `all 0.3s ease-in-out`,
    "&[disabled]": {
      cursor: `not-allowed`,
    },
    ":not([disabled]):hover": {
      bg: `primary`,
      color: `white`,
    },
    position: `absolute`,
    right: 0,
    zIndex: 1,
    borderRadius: `0 0 0 0.25rem`,
    padding: `0.25rem 0.6rem`,
  },
  dividers: {
    bottom: {
      borderBottomStyle: `solid`,
      borderBottomWidth: `1px`,
      borderBottomColor: `divide`,
      pb: 3,
    },
    top: {
      borderTopStyle: `solid`,
      borderTopWidth: `1px`,
      borderTopColor: `divide`,
      pt: 3,
    },
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999,
    },
  },
  cards: {
    primary: {
      padding: 2,
      mb: 3, mr: 3,
      backgroundColor: `cardbackground`,
      borderRadius: 4,
      color: `primary`,
      border: '2px solid',
      borderColor: 'cardoutline',
      ":hover": {
        color: `secondary`,
        border: '3px solid',
      },
    },
    compact: {
      padding: 1,
      borderRadius: 5,
      color: `secondary`,
      border: '1px solid',
      borderColor: 'cardoutline',
      boxShadow: '3px 3px 3px 2px rgba(128,128,128,0.3)',
      ":hover": {
        boxShadow: '3px 3px 3px 2px rgba(128,128,128,0.6)',
        color: `secondary`,
      },
    },
  },
  links: {
    secondary: {
      color: `secondary`,
      textDecoration: `none`,
      ":hover": {
        color: `heading`,
        textDecoration: `underline`,
      },
      ":focus": {
        color: `heading`,
      },
    },
    listItem: {
      fontSize: [1, 2, 3],
      color: `text`,
    },
    card: {
      fontWeight: 'bold',
      fontSize: 2,
      textDecorationLine: 'none',
      ":hover": {
        color: `heading`,
        textDecoration: `underline`,
      },
    }
  },
  ...variants,
})

export default theme