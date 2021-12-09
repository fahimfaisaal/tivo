const paragraphVariants = {
    large: 'p-large',
    heading: 'p-heading'
}

export default function Paragraph({ children, variant, ...props }) {
    return (
        <p className={`${paragraphVariants[variant] || ''} ${props.className}`}>
            {children}
        </p>
    )
}