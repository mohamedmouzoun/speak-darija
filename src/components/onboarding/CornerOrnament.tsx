import { Image } from "react-native";

import { images } from "@/constants/images";

const SIZE = 72;

type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const POSITION_STYLE = {
  "top-left": { top: 2, left: 2 },
  "top-right": { top: 2, right: 2 },
  "bottom-left": { bottom: 2, left: 2 },
  "bottom-right": { bottom: 2, right: 2 },
} as const;

const MIRROR_TRANSFORM = {
  "top-left": [],
  "top-right": [{ scaleX: -1 }],
  "bottom-left": [{ scaleY: -1 }],
  "bottom-right": [{ scaleX: -1 }, { scaleY: -1 }],
} as const;

export function CornerOrnament({ corner }: { corner: Corner }) {
  return (
    <Image
      source={images.frameCorner}
      style={{
        position: "absolute",
        width: SIZE,
        height: SIZE,
        ...POSITION_STYLE[corner],
        transform: MIRROR_TRANSFORM[corner],
      }}
    />
  );
}
