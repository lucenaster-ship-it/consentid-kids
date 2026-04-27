import { Navbar, Hero, ProblemSection, ImpactSection } from "./components/CoreSections";
import { SolutionSection, RiskAnalysisDemo, HowItWorks } from "./components/FeatureSections";
import { ROICalculator, FAQ, LeadForm, Footer } from "./components/ConversionSections";

export default function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProblemSection />
      <ImpactSection />
      <SolutionSection />
      <HowItWorks />
      <RiskAnalysisDemo />
      <ROICalculator />
      <FAQ />
      <LeadForm />
      <Footer />
    </main>
  );
}
