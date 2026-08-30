import { Image } from "react-native";

import { images } from "@/constants/images";

export function DecorativeDivider() {
  return (
    <Image
      source={images.dividerOrnament}
      style={{ width: 130, height: 22, marginTop: 10, marginBottom: 10 }}
      resizeMode="contain"
    />
  );
}
