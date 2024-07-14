import React from 'react'
import { Button } from './ui/button'
import { ImageBanner } from './image-svg'
import { IconVMP } from './icons'
import { Input } from './ui/input'
import { className } from '@/lib/className'

const Banner = () => {
    return (
        <div className={`${className.containerSection}`}>
            <div className='col-span-1 flex flex-col justify-center text-vmp-gray01' aria-label='banner-information'>
                <h1 className='text-clamp-2xl font-bold'>Viettel Meeting</h1>
                <h1 className='text-clamp-xl font-medium'>Họp theo cách của bạn</h1>
                <p className='text-2xl'>Ứng dụng họp trực tuyến thân thiện, hỗ trợ bạn tạo nên những cuộc họp chuyên nghiệp và hiệu quả theo phong cách của riêng mình.</p>
                <Button variant={'vmpPrimary'} size={'lg'} className='w-full lg:w-64 mt-5 gap-x-4'><IconVMP /> Cuộc họp mới</Button>
                <div className='flex flex-col lg:flex-row mt-8 lg:mt-4 items-center gap-x-6'>
                    <Input placeholder='Nhập ID hoặc đường link' className='h-[52px] 2xl:w-64 text-xl text-vmp-AAAAAA'/>
                    <Button variant={'ghost'} size={'lg'} className='w-full lg:w-auto mt-4 lg:mt-0'>Tham gia</Button>
                </div>
            </div>
            <div className='col-span-1 overflow-hidden -order-1 lg:order-1 self-center' aria-label='banner-image'>
                <ImageBanner className='w-full lg:w-auto h-auto'/>
            </div>
        </div>
    )
}

export default Banner