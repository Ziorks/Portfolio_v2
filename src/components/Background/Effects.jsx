import {
  BrightnessContrast,
  DotScreen,
  EffectComposer,
  HueSaturation,
  ToneMapping,
  Vignette,
} from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";

function Effects() {
  return (
    <EffectComposer>
      <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      <HueSaturation saturation={-0.4} hue={-0.5} />
      <BrightnessContrast contrast={0.2} />
      <Vignette darkness={2.5} offset={-1.1} opacity={0.92} />
      <DotScreen opacity={0.2} scale={0.9} />
    </EffectComposer>
  );
}

export default Effects;
