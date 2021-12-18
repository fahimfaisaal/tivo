import React from 'react'
import SectionHeading from '../../components/atoms/SectionHeading'
import SectionWrapper from '../../components/atoms/SectionWrapper'
import PricingCard from '../../components/Card/PricingCard'

const getFeatures = (accessNumber = Infinity) => {
    const feature = [
        [false, 'Email Marketing Module'],
        [false, 'User Control Management'],
        [false, 'List Building And Cleaning'],
        [false, 'Collected Data Reports'],
        [false, 'Planning And Evaluation'],
    ]

    return feature.reduce((acc, item, index) => {
        const [isActive, text] = item

        if (index < accessNumber) {
            acc.push([!isActive, text])
        } else {
            acc.push([isActive, text])
        }

        return acc;
    }, [])
}

const prices = [
    {
        heading: {
            title: 'BASIC',
            price: 'Free',
            frequency: '14 days trail',
        },
        features: getFeatures(2)
    },
    {
        heading: {
            title: 'ADVANCED',
            price: '29.99',
            frequency: 'monthly',
        },
        features: getFeatures(3)
    },
    {
        heading: {
            title: 'COMPLETE',
            price: '39.99',
            frequency: 'monthly',
        },
        features: getFeatures()
    }
]

export default function PricingSection() {
    const features = prices.map((price, index) => (
        <PricingCard
            key={index}
            heading={price.heading}
            features={price.features}
        />
    ))

    return (
        <SectionWrapper id="pricing" classes="cards-2">
            <SectionHeading
                aboveHeading="pricing"
                heading="Pricing Options Table"
            />
            {features}
        </SectionWrapper>
    )
}
