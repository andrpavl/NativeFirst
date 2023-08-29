import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const ArrowBack = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="feather-icon / arrow-left">
      <Path
        id="Shape"
        d="M20 12H4"
        stroke="#212121"
        strokeOpacity={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        id="Shape_2"
        d="M10 18L4 12L10 6"
        stroke="#212121"
        strokeOpacity={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default ArrowBack;
