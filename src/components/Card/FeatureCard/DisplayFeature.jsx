import features from "../../../variants/features";
import Wrapper from "../../atoms/Wrapper";
import DetailedFeature from "./DetailedFeature";
import ImageFeature from "./ImageFeature";

export default function DisplayFeature({ feature }) {
    const selectedFeature = features[feature];
    
    const {
        image,
        heading,
        description,
        list
    } = selectedFeature;
    
    return (
        <div className="tab-content">
            <div className="tab-pane fade active show">
                <Wrapper>
                    <ImageFeature image={image} />
                    <DetailedFeature
                        heading={heading}
                        description={description}
                        list={list}
                        buttonText="LIGHTBOX"
                    />
                </Wrapper>
            </div>
        </div>
    )
}
