import * as React from "react";
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg";

const AddIcon = (props) => (
  <Svg
    width={70}
    height={40}
    viewBox="0 0 70 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="40 / Toolbar / new" clipPath="url(#clip0_12_109)">
      <Rect id="Rectangle" width={70} height={40} rx={20} fill="#FF6C00" />
      <Path
        id="Union"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.5 13.5H34.5V19.5H28.5V20.5H34.5V26.5H35.5V20.5H41.5V19.5H35.5V13.5Z"
        fill="white"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_12_109">
        <Rect width={70} height={40} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default AddIcon;