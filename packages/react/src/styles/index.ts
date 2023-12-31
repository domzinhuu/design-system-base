import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space
} from "@msrsoftware/tokens"
import { createStitches, defaultThemeMap } from "@stitches/react"

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space"
  },
  theme: {
    colors,
    fonts,
    radii,
    space,
    lineHeights,
    fontWeights,
    fontSizes
  }
})
