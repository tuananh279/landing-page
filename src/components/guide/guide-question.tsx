import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { DATA_GUIDE_QUESTION } from '@/lib/data'

const GuideQuestion = () => {
    return (
        <Accordion type="single" collapsible className="w-full">
            {DATA_GUIDE_QUESTION.map(item => (
                <AccordionItem key={item.index} value={`item-${item.index+1}`}>
                    <AccordionTrigger className='data-[state=open]:text-vmp-redCB0 text-xl font-bold text-left'>{`${item.index+1}. ${item.title}`}</AccordionTrigger>
                    <AccordionContent>
                        {item.content}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export default GuideQuestion