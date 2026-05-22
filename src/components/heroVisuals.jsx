import AnimationGlobe from "./animations/globe.jsx";
import AnimationQuality from "./animations/quality.jsx";
import AnimationDigital from "./animations/digital.jsx";
import AnimationDataAnalytics from "./animations/dataAnalytic.jsx";
import AnimationSupport from "./animations/support.jsx";
import AnimationCloudDevops from "./animations/cloudDevops.jsx";
import AnimationBlockChain from "./animations/digitalInnovation.jsx";

export default function HeroVisuals({ isMobile }) {
  if (isMobile) {
    return <AnimationGlobe />;
  }

  return (
    <>
      <AnimationGlobe />
      <AnimationDataAnalytics />
      <AnimationQuality />
      <AnimationCloudDevops />
      <AnimationDigital />
      <AnimationBlockChain />
      <AnimationSupport />
    </>
  );
}
