import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EFD8AC" }}>
      <View className="flex-1 items-center justify-center px-8">
        <Text className="text-h2 font-display-bold text-center text-forest">
          Welcome to Speak Darija
        </Text>
        <Text className="text-body-lg font-sans text-text-secondary text-center mt-3">
          Your lessons will show up here.
        </Text>
      </View>
    </SafeAreaView>
  );
}
