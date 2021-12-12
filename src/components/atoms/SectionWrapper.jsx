import React from 'react'

export default function SectionWrapper({ id, children, classes }) {
    return (
        <section id={id} className={classes}>
            <div className="container">
                {children}
            </div>
        </section>
    )
}
