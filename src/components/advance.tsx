import React from "react";
import { className } from "@/lib/className";
import { DATA_ADVANCE_LIST } from "@/lib/data";
import { useEffect, useState } from "react";
import ItemFeature from "./feature/item-feature";
import { ImageAdvance } from "./image-svg";

const Advance = () => {
    const [currentItem, setCurrentItem] = useState(0)

    useEffect(() => {
        const toggleVisibility = () => {
            setCurrentItem((prevCurrent) => prevCurrent === DATA_ADVANCE_LIST.length - 1 ? 0 : prevCurrent+1)
        };

        const intervalId = setInterval(toggleVisibility, 3000);

        return () => clearInterval(intervalId);
    }, [])

    return (
        <div id="advance-section" className={`${className.containerSection} bg-no-repeat bg-center bg-cover`}>
            <div className='col-span-1 flex flex-col justify-center text-vmp-gray01' aria-label='banner-information'>
                <h1 className='text-clamp-2xl font-bold'>Nâng cao</h1>
                <p className='text-2xl my-9'>Viettel Meeting hỗ trợ xử lý các vấn đề chi tiết giúp bạn tập trung và nâng cao chất lượng cuộc họp.</p>
                {DATA_ADVANCE_LIST.map((item) => (
                    <ItemFeature key={item.index} isShow={currentItem === item.index} title={item.title} content={item.content} />
                ))}
            </div>
            <div className='col-span-1 overflow-hidden flex items-center -order-1 lg:order-1' aria-label='banner-image'>
                <ImageAdvance />
            </div>
        </div>
    )
}

export default Advance