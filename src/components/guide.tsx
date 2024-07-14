import React from 'react'
import { ImageHeaderGuide, ImageQuestionGuide } from './image-svg'
import GuideQuestion from './guide/guide-question'

const Guide = () => {
    return (
        <div className='grid bg-[#F8EEF0] pt-8'>
            <div className='container'>
                <div aria-label='header-guide' className='grid grid-cols-1 lg:grid-cols-2 items-center gap-x-10'>
                    <div aria-label='header-text-guide' className='col-span-1 text-vmp-redCB0'>
                        <h1 className='text-6xl'>Sử dụng</h1>
                        <h1 className='text-7xl font-bold'>Viettel Meeting</h1>
                        <h1 className='text-7xl font-bold drop-shadow-vmp text-[#F8EEF0]'>như thế nào</h1>
                    </div>
                    <ImageHeaderGuide className='-order-1 lg:order-1'/>
                </div>
                <div aria-label='question-guide' className='grid grid-cols-1 lg:grid-cols-2 items-center gap-x-10'>
                    <GuideQuestion />
                    <ImageQuestionGuide className='-order-1 lg:order-1'/>
                </div>
            </div>
        </div>
    )
}

export default Guide