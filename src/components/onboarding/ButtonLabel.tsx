import { Text } from "react-native";

// Renders a faux small-caps label: a full-size capital leads each word,
// followed by smaller capitals, since RN has no font-variant support.
export function ButtonLabel({ children }: { children: string }) {
  const words = children.split(" ");

  return (
    <Text className="font-display-semibold" style={{ color: "#2E1A05" }}>
      {words.map((word, index) => (
        <Text key={word}>
          <Text className="text-body-lg">{word.charAt(0).toUpperCase()}</Text>
          <Text className="text-body-sm">{word.slice(1).toUpperCase()}</Text>
          {index < words.length - 1 ? " " : ""}
        </Text>
      ))}
    </Text>
  );
}
