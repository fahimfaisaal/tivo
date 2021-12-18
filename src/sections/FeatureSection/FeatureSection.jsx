import SectionHeading from '../../components/atoms/SectionHeading';
import SectionWrapper from "../../components/atoms/SectionWrapper";
import DisplayFeature from "../../components/Card/FeatureCard/DisplayFeature";
import FeatureLists from "../../components/Card/FeatureCard/FeatureLists";

export default function FeatureSection() {
    return (
        <SectionWrapper id="features" classes="tabs">
            <SectionHeading
                aboveHeading="FEATURES"
                heading="Marketing Automation"
                paragraph="Take your business strategy to the next level and automatize your marketing tasks to save time for product development. Tivo can provide results in less than 2 weeks"
            />
            <FeatureLists>
                {(activeFeature) => <DisplayFeature feature={activeFeature} />}
            </FeatureLists>
        </SectionWrapper>
    )
}
