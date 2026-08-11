import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-background items-center justify-center gap-6 px-6">
      <Text className="text-h1 font-display text-forest text-center">
        Speak Darija
      </Text>
      <Text className="text-body-lg font-sans-medium text-text-secondary text-center">
        Learn Darija. Speak with confidence.
      </Text>

      <View className="card w-full max-w-sm">
        <View className="badge badge--accent">
          <Text className="text-caption font-sans-semibold text-terracotta">
            New
          </Text>
        </View>
        <Text className="text-h4 font-sans-semibold text-text mt-3">
          Daily Goal
        </Text>
        <Text className="text-body text-text-secondary">15 / 20 XP</Text>
      </View>

      <Link href="/onboarding" asChild>
        <Pressable className="btn btn--primary">
          <Text className="text-body-lg font-sans-semibold text-white">
            Get Started
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
