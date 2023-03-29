import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const OpenMenu = (props) => (
  <Svg
    width={18}
    height={14}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M1 13h16M1 1h16H1Zm0 6h16H1Z'
      stroke='#000'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)

export default OpenMenu
