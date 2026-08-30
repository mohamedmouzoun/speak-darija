import { Image, View } from "react-native";

import { images } from "@/constants/images";

// The arch, architecture, palm tree, characters, and speech bubbles are a
// single flattened illustration asset rather than separate layers, so this
// renders as one image instead of the individual sub-elements.
export function CharacterScene() {
  return (
    <View
      className="border-b-2 border-gold"
      style={{ width: "100%", aspectRatio: 880 / 584, marginTop: 20 }}
    >
      <Image
        source={images.onboardingHero}
        style={{ width: "100%", height: "100%" }}
        resizeMode="contain"
      />
    </View>
  );
}
