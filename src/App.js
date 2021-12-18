import './App.css';
import DescriptionSection from './sections/DescriptionSection/DescriptionSection';
import FeatureSection from './sections/FeatureSection/FeatureSection';
import FeatureSubSection from './sections/FeatureSubSection/FeatureSubSection';
import PricingSection from './sections/PricingSection/PricingSection';
import VideoSection from './sections/VideoSection/VideoSection';

const descriptionCard = [
    {
        image: {
            path: 'description-1.png',
            alt: 'Lists Builder'
        },
        card: {
            heading: 'Lists Builder',
            description: 'It\'s very easy to start creating email lists for your marketing actions.Just create your Tivo account'
        }
    },
    {
        image: {
            path: 'description-2.png',
            alt: 'Campaign Tracker'
        },
        card: {
            heading: 'Campaign Tracker',
            description: 'Campaigns is a feature we\'ve developed since the beginning because it\'s at the core of Tivo\'s functionalities'
        }
    },
    {
        image: {
            path: 'description-3.png',
            alt: 'Analytics Tool'
        },
        card: {
            heading: 'Analytics Tool',
            description: 'Tivo collects customer data in order to help you analyse different situations and take required action'
        }
    }
]

function App() {
  return (
    <>
      <DescriptionSection descriptionCard={descriptionCard}/>
      <FeatureSection />
      <FeatureSubSection />
      <VideoSection />
      <PricingSection />
    </>
  )
}

export default App;
