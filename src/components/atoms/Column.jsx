import columnVariants from "../../variants/column"

export default function Column({ variant, children }) {
    return (
        <div className={columnVariants[variant]}>
            {children}
        </div>
    )
}
