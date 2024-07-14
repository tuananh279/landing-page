import { className } from '@/lib/className'
import { DATA_DEPLOY_LIST } from '@/lib/data'

const Deployment = () => {
    return (
        <div className={`${className.containerSection} lg:!grid-cols-1 grid-cols-1 xl:h-fit 2xl:h-screen`}>
            <div className='col-span-1 flex flex-col items-center text-vmp-gray01' aria-label='banner-information'>
                <h1 className='text-clamp-2xl font-bold'>Triển khai</h1>
                <p className='text-2xl my-9'>Tích hợp với nhiều phương thức, hệ điều hành: JS, NodeJS, Flutter, API, Android, IOS,...</p>
                <div className='grid grid-cols-1 xl:grid-cols-3'>
                    {DATA_DEPLOY_LIST.map(item => (
                        <div key={item.index} className='col-span-1 grid'>
                            {item.image}
                            <h3 className='font-bold text-2xl text-center'>{item.title}</h3>
                            <p className='text-left text-lg'>{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Deployment