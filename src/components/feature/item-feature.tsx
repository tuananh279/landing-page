import React from 'react'
import { motion } from 'framer-motion'

const ItemFeature = ({isShow, title, content}: {isShow: boolean, title: string, content: string}) => {
    return (
        <div className='flex mt-4 items-center gap-x-6'>
            <div className='min-w-1 h-full bg-[#E9E9E9] rounded-md'>
                {isShow && <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: '100%' }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className='w-1 rounded-md bg-vmp-redCB0'
                />}
            </div>
            <div aria-label='title-feature' className=''>
                <h1 className='text-2xl font-semibold'>{title}</h1>
                <motion.div
                    initial={{ opacity: 1, height: 'auto' }}
                    animate={{ opacity: isShow ? 1 : 0, height: isShow ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className='overflow-hidden text-lg'
                >
                    {content}
                </motion.div>
            </div>
        </div>
    )
}

export default ItemFeature