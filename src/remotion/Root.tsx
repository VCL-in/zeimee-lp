import { Composition } from "remotion";
import { HeroUiFlow } from "./hero/HeroUiFlow";

export function RemotionRoot() {
  return (
    <Composition
      id="HeroUiFlow"
      component={HeroUiFlow}
      durationInFrames={900}
      fps={60}
      width={1920}
      height={1080}
    />
  );
}
