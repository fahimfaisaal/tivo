export default function Feature({ isChecked, media }) {
    return (
        <li className="media">
            <i className={`fas ${isChecked ? 'fa-check' : 'fa-times'}`}></i>
            <div className="media-body">{media}</div>
        </li>
    )
}
