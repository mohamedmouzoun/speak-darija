import Svg, { Path } from "react-native-svg";

// A small four-point sparkle used to flank the pagination dots.
export function PaginationFlourish() {
  return (
    <Svg width={14} height={14} viewBox="0 0 20 20">
      <Path
        d="M10 0 C11 6, 14 9, 20 10 C14 11, 11 14, 10 20 C9 14, 6 11, 0 10 C6 9, 9 6, 10 0 Z"
        fill="#9C6B2E"
      />
    </Svg>
  );
}
