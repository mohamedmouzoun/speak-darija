import { Image } from "react-native";

import { images } from "@/constants/images";

export function BottomCenterOrnament() {
  return (
    <Image
      source={images.bottomOrnament}
      style={{
        position: "absolute",
        bottom: 4,
        left: "50%",
        marginLeft: -50,
        width: 100,
        height: 35,
      }}
      resizeMode="contain"
    />
  );
}
