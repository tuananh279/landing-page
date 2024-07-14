import React from 'react'
import { IconAppStore, IconGGPlay, IconLogoText } from '../icons'
import { ImageCertificate, ImageTelegram, ImageZalo } from '../image-svg'
import { DATA_OVERALL } from '@/lib/data'
import { Button } from '../ui/button'

const Overall = () => {
    return (
        <div className='bg-vmp-black03'>
            <div className='container grid lg:grid-cols-3 py-10 gap-x-10'>
                <div aria-label='copany-info' className='grid text-white col-span-1'>
                    <IconLogoText />
                    <h3 className='uppercase font-semibold text-lg'>Tổng Công ty giải pháp doanh nghiệp Viettel</h3>
                    <p>Số 1, đường Trần Hữu Dực, Phường Mỹ Đình 2, Quận Nam Từ Liêm, Hà Nội, Việt Nam</p>
                    <p>Hotline: <span className='text-vmp-redCB0'>18008000 (nhánh 8)</span></p>
                    <p>Email: <span className='text-vmp-redCB0'>cskhdn@viettel.com.vn</span></p>
                    <div className='flex mt-10 h-16'>
                        <div className='flex gap-3 mr-10'>
                            <ImageZalo />
                            <ImageTelegram />
                        </div>
                        <ImageCertificate />
                    </div>
                </div>
                <div className='col-span-2 grid'>
                    <div aria-label='over-all' className='grid lg:grid-cols-4'>
                        {DATA_OVERALL.map(item => (
                            <div key={item.index} className='text-white mt-5 lg:mt-0'>
                                <h3 className='uppercase font-semibold mb-2 lg:mb-4'>{item.title}</h3>
                                {
                                    item.content.map((content, index) => (
                                        <p key={index}>{content}</p>
                                    ))
                                }
                            </div>
                        ))}
                    </div>
                    <div className='self-end h-16 flex items-center gap-4'>
                        <Button className='bg-white text-black'>
                            <IconGGPlay />
                            <div className='ml-1'>
                                <p className='text-[9px] leading-normal'>Tải phần mềm trên</p>
                                <h3 className='text-sm leading-normal'>Google Play</h3>
                            </div>
                        </Button>
                        <Button className='bg-white text-black'>
                            <IconAppStore />
                            <div className='ml-1'>
                                <p className='text-[9px] leading-normal'>Tải phần mềm trên</p>
                                <h3 className='text-sm leading-normal'>App Store</h3>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overall