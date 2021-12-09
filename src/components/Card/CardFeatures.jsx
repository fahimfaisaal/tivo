import Feature from "./Feature"

export default function CardFeatures({ cardFeatures }) {
    return (
        <ul className="list-unstyled lg-space-lg">
            {cardFeatures.map(([checked, text], index) => (
                <Feature key={index} isChecked={checked} media={text} />
            ))}
        </ul>
    )
}
