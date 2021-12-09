export default function CardHeading({ cardTitle, price, frequency }) {
    return (
        <>
            <div className="card-title">{cardTitle}</div>
            <div className="price">
                <span className="currency">$</span>
                <span className="value">{price}</span>
            </div>
            <div className="frequency">{frequency}</div>
        </>
    )
}
