import React from 'react'
import { IconGithub, IconLogo, IconToggleMenu } from './icons'
import { Button } from './ui/button'
import MainDrawer from './main-drawer'
import MainSheet from './main-sheet'

const MainNav = () => {
    return (
        <header className='sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='container flex h-14 max-w-screen-2xl items-center'>
                <div className='mr-4 hidden md:flex'>
                    <a className='mr-4 flex items-center space-x-2 lg:mr-6' href='/'>
                        <IconLogo />
                        <span className='hidden font-bold lg:inline-block'>shadcn/ui</span>
                    </a>
                    <nav className='flex items-center gap-4 text-sm lg:gap-6'>
                        <a className='transition-colors hover:text-foreground/80 text-foreground/60' href='/docs'>Docs</a>
                        <a className='transition-colors hover:text-foreground/80 text-foreground/60' href='/components'>Components</a>
                        <a className='transition-colors hover:text-foreground/80 text-foreground/60' href='/blocks'>Blocks</a>
                        <a className='transition-colors hover:text-foreground/80 text-foreground/60' href='/charts'>Charts</a>
                        <a className='transition-colors hover:text-foreground/80 text-foreground/60' href='/themes'>Themes</a>
                        <a className='transition-colors hover:text-foreground/80 text-foreground/60' href='/examples'>Examples</a>
                        <a className='transition-colors hover:text-foreground/80 text-foreground/60' href='/colors'>Colors</a>
                    </nav>
                </div>
                <MainSheet />
                <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
                    <div className='w-full flex-1 md:w-auto md:flex-none'>
                        <Button variant={'outline'} className='relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64'>
                            <span className='hidden lg:inline-flex'>Search documentation...</span>
                            <span className='inline-flex lg:hidden'>Search...</span>
                            <kbd className='pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex'>
                                <span className='text-xs'>⌘</span>K
                            </kbd>
                        </Button>
                    </div>
                    <nav className='flex items-center'>
                        <a target='_blank' rel='noreferrer' href='https://github.com/shadcn-ui/ui'>
                            <div className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent hover:text-accent-foreground py-2 h-8 w-8 px-0'>
                                <IconGithub />
                            </div>
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default MainNav