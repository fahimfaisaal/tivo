import Button from '../atoms/Button';
import CardFeatures from './CardFeatures';
import CardHeading from './CardHeading';

export default function PricingCard({ heading, features }) {
    return (
        <div className="card">
            <div className="card-body">
                <CardHeading
                    cardTitle={heading.title}
                    price={heading.price}
                    frequency={heading.frequency}
                />

                <div class="divider"></div>

                <CardFeatures cardFeatures={features} />
                
                <div className="button-wrapper">
                    <Button text="SIGN UP"/>
                </div>
            </div>
        </div>
    )
}
