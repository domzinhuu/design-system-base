import { ComponentProps } from "@stitches/react"
import { styled } from "../styles"

export const Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",

  cursor: "pointer",

  svg: {
    width: "$4",
    height: "$4"
  },

  "&:disabled": {
    cursor: "not-allowed"
  },

  variants: {
    variant: {
      primary: {
        color: "$white",
        background: "$primary500",

        "&:not(:disabled):hover": {
          backgroundColor: "$primary300"
        },
        "&:disabled": {
          backgroundColor: "$gray200"
        }
      },
      secondary: {
        color: "$primary300",
        border: "1px solid $primary500",

        "&:not(:disabled):hover": {
          backgroundColor: "$primary500",
          color: "$white"
        },
        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200"
        }
      },
      tertiary: {
        color: "$gray300",

        "&:not(:disabled):hover": {
          color: "$gray500"
        },
        "&:disabled": {
          backgroundColor: "$gray200"
        }
      }
    },
    size: {
      sm: {
        padding: "0 $4",
        height: 38
      },
      md: {
        height: 46
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
})

export interface ButtonProps extends ComponentProps<typeof Button> {}
Button.displayName = "Button"
