import buttonVariants from '../../variants/button';

export default function Button({ text, variant = 'medium'}) {
    return (
        <a
            className={buttonVariants[variant]}
            href="#home">
            {text}
        </a>
    )
}
