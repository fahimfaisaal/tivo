import Paragraph from "./Paragraph";
import Wrapper from "./Wrapper";

export default function SectionHeading({ aboveHeading, heading, paragraph }) {
    return (
        <Wrapper variant="lg12">
            <div class="above-heading">{aboveHeading}</div>
            <h2 class="h2-heading">{heading}</h2>
            {paragraph && (
                <Paragraph variant="heading">
                    {paragraph}
                </Paragraph>
            )}
        </Wrapper>
    )
}
