import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";

export default function Onboarding() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF9F1" }}>
      <View className="flex-1 justify-between px-6 pb-6">
        <View className="items-center">
          <View className="flex-row items-center gap-2 mt-2">
            {/* Local images auto-size to their source dimensions unless an
                explicit style width/height is set, which wins over className. */}
            <Image
              source={images.mascotLogo}
              style={{ width: 44, height: 44 }}
              resizeMode="contain"
            />
            <View>
              <Text className="text-h4 font-display text-forest leading-none">
                Speak
              </Text>
              <Text className="text-h4 font-display text-terracotta leading-none">
                Darija
              </Text>
            </View>
          </View>

          <Text className="text-h1 font-display text-forest text-center mt-8">
            Your AI Darija
          </Text>
          <Text className="text-h1 font-display text-terracotta text-center">
            teacher.
          </Text>

          <Text className="text-body-lg font-sans-medium text-text-secondary text-center mt-4">
            Real conversations, personalized{"\n"}lessons, anytime, anywhere.
          </Text>

          <Text className="text-gold text-h4 mt-4">✦</Text>

          <View className="w-full items-center mt-2">
            <Image
              source={images.mascotWelcome}
              style={{ width: "100%", height: 224 }}
              resizeMode="contain"
            />

            <View className="badge badge--success absolute left-0 top-4">
              <Text className="text-body-sm font-sans-semibold text-forest">
                Salam!
              </Text>
            </View>

            <View className="badge badge--accent absolute right-0 top-2">
              <Text className="text-body-sm font-sans-semibold text-terracotta">
                Labas?
              </Text>
            </View>

            <View className="badge badge--gold absolute right-4 top-20">
              <Text className="text-body-sm font-sans-semibold text-gold">
                Bslama!
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-row items-center justify-center gap-3">
          <Text className="text-gold text-h4">✦</Text>

          <Pressable className="btn bg-forest flex-1">
            <Text className="text-body-lg font-sans-semibold text-white">
              Get Started
            </Text>
            <Text className="text-white text-h4 font-sans-semibold">›</Text>
          </Pressable>

          <Text className="text-gold text-h4">✦</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
