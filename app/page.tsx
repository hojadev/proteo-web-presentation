import SlideContainer from "@/components/SlideContainer";
import SlideHero from "@/components/slides/SlideHero";
import SlideExperience from "@/components/slides/SlideExperience";
import SlidePillars from "@/components/slides/SlidePillars";
import SlideTechAdvantage from "@/components/slides/SlideTechAdvantage";
import SlideNitroxResponse from "@/components/slides/SlideNitroxResponse";
import SlideReporting from "@/components/slides/SlideReporting";
import SlideFinalInteractive from "@/components/slides/SlideFinalInteractive";

export default function Home() {
  return (
    <main>
      <SlideContainer>
        <SlideHero />
        <SlideExperience />
        <SlidePillars />
        <SlideTechAdvantage />
        <SlideNitroxResponse />
        <SlideReporting />
        <SlideFinalInteractive />
      </SlideContainer>
    </main>
  );
}
