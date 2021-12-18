import SectionWrapper from '../../components/atoms/SectionWrapper';
import Wrapper from '../../components/atoms/Wrapper';
import DetailedFeature from '../../components/Card/FeatureCard/DetailedFeature';
import ImageFeature from '../../components/Card/FeatureCard/ImageFeature';

export default function FeatureSubSection() {
    return (
        <SectionWrapper id="details" classes="basic-1">
            <Wrapper>
                <DetailedFeature
                    heading="Now Is The Time To Upgrade Your Marketing Solution"
                    description="Target the right customers for your business with the help of Tivo's patented segmentation technology and deploy efficient marketing campaigns. Keep your customers happy and loyal."
                    list={[
                        'Understand customers and meet their requirements',
                        'Targeted client base with Tivo\'s efficient technology'
                    ]}
                    buttonText="SIGN UP"
                />
                <ImageFeature image={{
                    path: './features-3.png',
                    alt: 'Analytics Control'
                }} />
            </Wrapper>
        </SectionWrapper>
    )
}
