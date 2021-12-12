import Paragraph from "./Paragraph";

export default function SectionHeading({ aboveHeading, heading, paragraph }) {
    return (
        <div class="row">
            <div class="col-lg-12">
                <div class="above-heading">{aboveHeading}</div>
                <h2 class="h2-heading">{heading}</h2>
                {paragraph && <Paragraph variant="heading">
                    {paragraph}
                </Paragraph>}
            </div>
        </div>
    )
}
