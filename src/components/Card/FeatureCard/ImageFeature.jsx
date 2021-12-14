import Column from "../../atoms/Column"

export default function ImageFeature({ image: { path, alt } }) {
    return (
        <Column variant="lg6">
            <img
                className="img-fluid"
                src={path}
                alt={alt}
            />
        </Column>
    )
}
