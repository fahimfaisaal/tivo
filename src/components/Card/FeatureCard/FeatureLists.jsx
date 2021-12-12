import { useState } from "react";
import Wrapper from "../../atoms/Wrapper";
import FeatureList from "./FeatureList";

export default function FeatureLists({ children }) {
    const [activeFeature, setActiveFeature] = useState('listBuilder');

    const handleFeature = (e) => {
        const value = e.target.id;
        setActiveFeature(value);
    }

    return (
        <Wrapper variant="lg12">
            <ul className="nav nav-tabs">
                <FeatureList
                    activeName={activeFeature}
                    id="listBuilder"
                    icon="fa-list"
                    link="#listBuilder"
                    text="List Builder"
                    handler={handleFeature}
                />
                <FeatureList
                    activeName={activeFeature}
                    id="campaigns"
                    icon="fa-envelope-open-text"
                    link="#campaigns"
                    text="Campaigns"
                    handler={handleFeature}
                />
                <FeatureList
                    activeName={activeFeature}
                    id="analytics"
                    icon="fa-chart-bar"
                    link="#analytics"
                    text="Analytics"
                    handler={handleFeature}
                />
            </ul>
            {children(activeFeature)}
        </Wrapper>
    )
}