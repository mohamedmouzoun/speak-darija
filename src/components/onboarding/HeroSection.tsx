import { DecorativeDivider } from "./DecorativeDivider";
import { HeroSubtitle } from "./HeroSubtitle";
import { HeroTitle } from "./HeroTitle";

export function HeroSection() {
  return (
    <>
      <HeroTitle />
      <DecorativeDivider />
      <HeroSubtitle />
    </>
  );
}
