import { cn } from '@/lib/utils';
import { Link } from '@/navigation';
import React from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu';

const components: { title: string; href: string }[] = [
    {
        title: "Tính năng",
        href: "/docs/primitives/alert-dialog"
    },
    {
        title: "Nâng cao",
        href: "/docs/primitives/hover-card"
    },
    {
        title: "Tích hợp",
        href: "/docs/primitives/progress"
    },
    {
        title: "Triển khai",
        href: "/docs/primitives/scroll-area"
    }
]

const MainNavigation = () => {
    return (
        <NavigationMenu className='lg:ml-32'>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent hover:text-vmp-redCB0`}>
                            Giới thiệu
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent hover:text-vmp-redCB0`}>
                            Gói dịch vụ
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className='bg-transparent hover:text-vmp-redCB0'>Giải pháp</NavigationMenuTrigger>
                    <NavigationMenuContent className='shadow-[1px_2px_4px_rgba(0,0,0,0.25)]'>
                        <ul className="grid w-40 lg:w-52">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    href={component.href}
                                    title={component.title}
                                >
                                    {component.title}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent hover:text-vmp-redCB0`}>
                            Tài liệu
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default MainNavigation

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:text-vmp-redCB0",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"