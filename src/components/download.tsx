import React from 'react'
import { Button } from './ui/button'
import { ImageQR } from './image-svg'

const Download = () => {
    return (
        <div id='download-section' className='bg-no-repeat bg-center bg-cover'>
            <div className='bg-vmp-redCB0/75 py-14'>
                <div className='grid grid-cols-1 lg:grid-cols-2 container self-center'>
                    <div className='col-span-1 text-5xl text-white'>
                        <h1>Bắt đầu với <span className='font-semibold'>Viettel Meeting</span></h1>
                        <h1>ngay hôm nay</h1>
                    </div>
                    <div className='flex gap-x-4 justify-center mt-5 lg:mt-0'>
                        <div className='flex flex-col justify-evenly'>
                            <Button variant={'vmpPrimary'}>Đăng ký dùng thử</Button>
                            <Button variant={'secondary'}>Gói dịch vụ</Button>
                        </div>
                        <ImageQR />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download