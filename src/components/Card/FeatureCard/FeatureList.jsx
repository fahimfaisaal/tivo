export default function FeatureList({ handler, activeName, text, icon, link, id }) {
    return (
        <li class="nav-item">
            <a
                className={`nav-link${activeName === id ? ' active' : ''}`}
                id={id}
                href={link}
                onClick={handler}
            >
                <i style={{pointerEvents: 'none'}} className={`fas ${icon}`}></i>
                {text}
            </a>
        </li>
    )
}
