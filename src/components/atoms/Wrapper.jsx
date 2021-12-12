import columnVariants from "../../variants/column"

export default function Wrapper({ variant, children }) {
    return (
        <div className="row">
            {
                variant ?
                <div className={columnVariants[variant]}>
                    {children}
                </div>
                : children
           }
        </div>
    )
}
