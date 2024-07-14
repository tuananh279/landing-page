import { IconGithub, IconLangVI, IconLogoVMP, IconThemeLight } from './icons'
import MainNavigation from './main-navigation'
import MainSheet from './main-sheet'
import { Button } from './ui/button'

const MainNav = () => {
    return (
        <header className='sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='container flex h-20 max-w-screen-2xl items-center shadow-[0_5px_10px_rgba(0,0,0,0.25)]'>
                <div className='mr-4 hidden md:flex'>
                    <a className='mr-4 flex items-center space-x-2 lg:mr-6' href='/'>
                        <IconLogoVMP />
                    </a>
                    {/* <nav className='flex items-center gap-4 text-sm lg:gap-6 lg:ml-32'>
                        <a className='transition-colors hover:text-foreground/80 text-foreground/60' href='/intro'>Giới thiệu</a>
                        <a className='transition-colors hover:text-foreground/80 text-foreground/60' href='/license'>Gói dịch vụ</a>
                        <a className='transition-colors hover:text-foreground/80 text-foreground/60' href='/solution'>Giải pháp</a>
                        <a className='transition-colors hover:text-foreground/80 text-foreground/60' href='/docs'>Tài liệu</a>
                    </nav> */}
                    <MainNavigation />
                </div>
                <MainSheet />
                <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
                    <div className='flex items-center w-full flex-1 md:w-auto md:flex-none'>
                        <Button variant={'ghost'} size={'icon'}>
                            <IconThemeLight />
                        </Button>
                        <Button variant={'ghost'} size={'icon'}>
                            <IconLangVI />
                        </Button>
                    </div>
                    <nav className='flex items-center'>
                        <Button variant={'vmpPrimary'} className='hidden lg:inline-flex'>Tài khoản của tôi</Button>
                        <Button size={'icon'} className='lg:hidden'>TA</Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default MainNav