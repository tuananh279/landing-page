import { className } from '@/lib/className'
import { DATA_FEATURE_LIST } from '@/lib/data'
import { useEffect, useState } from 'react'
import ItemFeature from './feature/item-feature'
import { ImageFeature } from './image-svg'

const Feature = () => {

    const [currentItem, setCurrentItem] = useState(0)

    useEffect(() => {
        const toggleVisibility = () => {
            setCurrentItem((prevCurrent) => prevCurrent === DATA_FEATURE_LIST.length - 1 ? 0 : prevCurrent+1)
        };

        const intervalId = setInterval(toggleVisibility, 3000);

        return () => clearInterval(intervalId);
    }, [])

    return (
        <div className={`${className.containerSection}`}>
            <div className='col-span-1 overflow-hidden flex items-center' aria-label='banner-image'>
                <ImageFeature />
            </div>
            <div className='col-span-1 flex flex-col justify-center text-vmp-gray01' aria-label='banner-information'>
                <h1 className='text-clamp-2xl font-bold'>Tính năng</h1>
                <p className='text-2xl my-9'>Các tính năng chính của Viettel Meeting giúp người dùng giao tiếp và cộng tác với nhau, lưu trữ những gì đã diễn ra.</p>
                {DATA_FEATURE_LIST.map((item) => (
                    <ItemFeature key={item.index} isShow={currentItem === item.index} title={item.title} content={item.content} />
                ))}
            </div>
        </div>
    )
}

export default Feature