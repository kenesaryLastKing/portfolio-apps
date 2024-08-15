import { theme } from './Theme'

type FontPropsType = {
  family?: string
  weight?: number
  color?: string
  lineHeight?: number
  Fmin?: number
  Fmax?: number
}

export const font = ({
  family,
  weight,
  color,
  lineHeight,
  Fmin,
  Fmax,
}: FontPropsType) => `
font-family: ${family || 'Roboto'};
font-weight: ${weight || 400};
color: ${color || theme.colors.fontBlack};
line-height: ${lineHeight || 1.2};
font-size: calc((100vw - 425px)/(1440 - 425) * (${Fmax} - ${Fmin}) + ${Fmin}px )
`
