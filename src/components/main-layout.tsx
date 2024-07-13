import React from 'react'

const MainLayout = () => {
    return (
        <main className='flex-1'>
            <div className='border-b'>
                <div className='container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10'>
                    <aside className='fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block'>
                        Menu
                    </aside>
                    <main className='relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]'>
                        <div className='mx-auto w-full min-w-0'>Main</div>
                        <div className='hidden text-sm xl:block'>Second</div>
                    </main>
                </div>
            </div>
        </main>
    )
}

export default MainLayout