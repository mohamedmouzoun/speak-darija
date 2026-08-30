import { ImageBackground, type ImageBackgroundProps } from "react-native";

import { images } from "@/constants/images";

type Props = Omit<ImageBackgroundProps, "source">;

export function DecorativeBackground({ style, children, ...rest }: Props) {
  return (
    <ImageBackground
      source={images.parchmentTexture}
      resizeMode="cover"
      style={[{ flex: 1 }, style]}
      {...rest}
    >
      {children}
    </ImageBackground>
  );
}
