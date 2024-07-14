import { className } from '@/lib/className'
import React from 'react'
import { ImageIntegration } from './image-svg'
import { DATA_INTEGRATION_LIST } from '@/lib/data'

const Integration = () => {
    return (
        <div className={`${className.containerSection}`}>
            <div className='col-span-1 overflow-hidden flex items-center' aria-label='banner-image'>
                <ImageIntegration />
            </div>
            <div className='col-span-1 flex flex-col justify-center text-vmp-gray01' aria-label='banner-information'>
                <h1 className='text-clamp-2xl font-bold'>Tích hợp</h1>
                <p className='text-2xl my-9'>Tích hợp với nhiều phương thức, hệ điều hành: JS, NodeJS, Flutter, API, Android, IOS,...</p>
                <div className='pl-5'>
                    <ul>
                        {DATA_INTEGRATION_LIST.map((item, index) => (
                            <li key={index} className='list-disc text-xl font-semibold mb-4'>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Integration