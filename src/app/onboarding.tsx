import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CharacterScene } from "@/components/onboarding/CharacterScene";
import { CTASection } from "@/components/onboarding/CTASection";
import { DecorativeBackground } from "@/components/onboarding/DecorativeBackground";
import { HeroSection } from "@/components/onboarding/HeroSection";
import { OrnamentalFrame } from "@/components/onboarding/OrnamentalFrame";
import { PaginationIndicator } from "@/components/onboarding/PaginationIndicator";

export default function Onboarding() {
  return (
    <DecorativeBackground>
      <OrnamentalFrame />

      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-1 justify-between px-8 pb-6 pt-4">
          <View className="items-center">
            <HeroSection />
            <CharacterScene />
          </View>

          <View className="items-center gap-5 w-full">
            <PaginationIndicator />
            <CTASection />
          </View>
        </View>
      </SafeAreaView>
    </DecorativeBackground>
  );
}
