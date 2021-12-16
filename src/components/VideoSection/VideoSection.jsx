import SectionWrapper from '../atoms/SectionWrapper';
import Wrapper from '../atoms/Wrapper';
import VideoThumbnail from './VideoThumbnail';

export default function VideoSection() {
    return (
        <SectionWrapper id="video" classes="basic-2">
            <Wrapper variant="lg12">
                <VideoThumbnail
                    imagePath="video-image.png"
                    videoLink="https://www.youtube.com/watch?v=vzVbvrESsS4"
                />
            </Wrapper>
        </SectionWrapper>
    )
}
