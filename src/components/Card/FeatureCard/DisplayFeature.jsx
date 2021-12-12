import features from "../../../variants/features";
import Button from "../../atoms/Button";
import Column from "../../atoms/Column";
import Wrapper from "../../atoms/Wrapper";

export default function DisplayFeature({ feature }) {
    const selectedFeature = features[feature];
    
    const {
        image: { path, alt },
        heading,
        description,
        list
    } = selectedFeature;
    
    return (
        <div className="tab-content">
            <div className="tab-pane fade active show">
                <Wrapper>
                    <Column variant="lg6">
                        <img
                            className="img-fluid"
                            src={path}
                            alt={alt}
                        />
                    </Column>
                    <Column variant="lg6">
                        <div className="text-container">
                            <h3>{ heading }</h3>
                            <p>{ description }</p>
                            <ul className="list-unstyled li-space-lg">
                                {list.map((text, index) => (
                                    <li className="media" key={index}>
                                        <i className="fas fa-square"></i>
                                        <div className="media-body">{text}</div>
                                    </li>
                                ))}
                            </ul>
                            <Button text="LIGHTBOX" />
                        </div>
                    </Column>
                </Wrapper>
            </div>
        </div>
    )
}
