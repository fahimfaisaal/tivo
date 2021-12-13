import React from 'react'
import SectionHeading from '../atoms/SectionHeading'
import SectionWrapper from '../atoms/SectionWrapper'
import Wrapper from '../atoms/Wrapper'
import DescriptionCard from '../Card/DescriptionCard'

const descriptionCard = [
    {
        image: {
            path: 'description-1.png',
            alt: 'Lists Builder'
        },
        card: {
            heading: 'Lists Builder',
            description: 'It\'s very easy to start creating email lists for your marketing actions.Just create your Tivo account'
        }
    },
    {
        image: {
            path: 'description-2.png',
            alt: 'Campaign Tracker'
        },
        card: {
            heading: 'Campaign Tracker',
            description: 'Campaigns is a feature we\'ve developed since the beginning because it\'s at the core of Tivo\'s functionalities'
        }
    },
    {
        image: {
            path: 'description-3.png',
            alt: 'Analytics Tool'
        },
        card: {
            heading: 'Analytics Tool',
            description: 'Tivo collects customer data in order to help you analyse different situations and take required action'
        }
    }
]

export default function DescriptionSection() {
    return (
        <SectionWrapper classes="cards-1">
            <Wrapper variant="lg12">
                <SectionHeading
                    aboveHeading="DESCRIPTION"
                    heading="Marketing Automation Will Bring More Qualified Leads"
                />
            </Wrapper>
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
