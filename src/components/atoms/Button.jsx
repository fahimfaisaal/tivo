const buttonVariants = {
    small: 'btn-outline-sm',
    medium: 'btn-solid-reg',
    large: 'btn-solid-lg'
}

export default function Button({ text, variant = 'medium'}) {
    return (
        <a
            className={buttonVariants[variant]}
            href="log-in.html">
            {text}
        </a>
    )
}
