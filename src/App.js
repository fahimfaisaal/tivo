import './App.css';
import DescriptionSection from './components/DescriptionSection/DescriptionSection';
import FeatureSection from './components/FeatureSection/FeatureSection';
import FeatureSubSection from './components/FeatureSubSection/FeatureSubSection';
import PricingSection from './components/PricingSection/PricingSection';
import VideoSection from './components/VideoSection/VideoSection';

function App() {
  return (
    <>
      <DescriptionSection />
      <FeatureSection />
      <FeatureSubSection />
      <VideoSection />
      <PricingSection />
    </>
  )
}

export default App;
