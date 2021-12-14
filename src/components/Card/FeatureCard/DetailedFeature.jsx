import Column from '../../atoms/Column';
import Button from '../../atoms/Button';

export default function DetailedFeature({ heading, description, buttonText, list }) {
    return (
        <Column variant="lg6">
            <div className="text-container">
                <h3>{heading}</h3>
                <p>{description}</p>
                <ul className="list-unstyled li-space-lg">
                    {list.map((text, index) => (
                        <li className="media" key={index}>
                            <i className="fas fa-square"></i>
                            <div className="media-body">{text}</div>
                        </li>
                    ))}
                </ul>
                <Button text={buttonText} />
            </div>
        </Column>
    )
}
