import React from 'react'
import SectionHeading from '../../components/atoms/SectionHeading'
import SectionWrapper from '../../components/atoms/SectionWrapper'
import Wrapper from '../../components/atoms/Wrapper'
import DescriptionCard from '../../components/Card/DescriptionCard'



export default function DescriptionSection({ descriptionCard }) {
    return (
        <SectionWrapper classes="cards-1">
            <SectionHeading
                aboveHeading="DESCRIPTION"
                heading="Marketing Automation Will Bring More Qualified Leads"
            />
            <Wrapper variant="lg12">
                {descriptionCard.map((item, index) => (
                    <DescriptionCard
                        key={index}
                        image={item.image}
                        card={item.card}
                    />
                ))}
            </Wrapper>
        </SectionWrapper>
    )
}
