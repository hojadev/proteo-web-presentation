import SlideContainer from "@/components/SlideContainer";
import SlideHero from "@/components/slides/SlideHero";
import SlideContext from "@/components/slides/SlideContext";
import SlideExperience from "@/components/slides/SlideExperience";
import SlidePillars from "@/components/slides/SlidePillars";
import SlideTechAdvantage from "@/components/slides/SlideTechAdvantage";
import SlideNitroxResponse from "@/components/slides/SlideNitroxResponse";
import SlideReporting from "@/components/slides/SlideReporting";
import SlideMTBF from "@/components/slides/SlideMTBF";
import SlideTST from "@/components/slides/SlideTST";
import SlideScheduleCompliance from "@/components/slides/SlideScheduleCompliance";
import SlideRiskMitigation from "@/components/slides/SlideRiskMitigation";
import SlideClosure from "@/components/slides/SlideClosure";
import SlideFinalInteractive from "@/components/slides/SlideFinalInteractive";
import SlideFinalSummary from "@/components/slides/SlideFinalSummary";

export default function Home() {
  return (
    <main>
      <SlideContainer>
        <SlideHero />
        <SlideExperience />
        <SlidePillars />
        <SlideContext />
        <SlideTechAdvantage />
        <SlideNitroxResponse />
        <SlideReporting />
        <SlideMTBF />
        <SlideTST />
        <SlideScheduleCompliance />
        <SlideRiskMitigation />
        <SlideClosure />
        <SlideFinalInteractive />
        <SlideFinalSummary />
      </SlideContainer>
    </main>
  );
}
