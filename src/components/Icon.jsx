export default function Icon({ path, name }) {
    return (
        <span className="fa-stack">
            <a href={path}>
                <i className="fas fa-circle fa-stack-2x" />
                <i className={`${name} fa-stack-1x`} />
            </a>
        </span>
    )
}