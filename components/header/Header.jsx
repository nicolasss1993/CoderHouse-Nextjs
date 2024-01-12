'use client'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/utils/Button'
import { useAuthContext } from "@/utils/context/authContext"
import { LINKS } from '@/utils/constants'
import { usePathname } from 'next/navigation'
import CartWidget from '../utils/cart'
import { ADMIN_PATH } from '@/utils/constants'
import LogoutButton from '../utils/Logout'
import LoginButton from '../utils/LoginButton'

const Header = () => {
    const pathName = usePathname();
    const { userId } = useAuthContext();

    return (
        pathName === ADMIN_PATH ?
            null :
            <header className="w-full bg-gray-700">
                <div className="container m-auto py-4 flex justify-between items-center">
                    <Link href={"/"}>
                        <Image
                            src={"/logo.png"}
                            alt='Capellari logo'
                            width={70}
                            height={70}
                        />
                    </Link>
                    <nav className="flex justify-between gap-2">
                        {
                            LINKS.map(link => {
                                return <Link
                                    key={link.label}
                                    href={link.href}
                                    className={`text-base text-slate-100 p-3 `}
                                >
                                    {link.label}
                                </Link>
                            })
                        }
                    </nav>
                    <div>
                        <CartWidget />
                        {userId.logged ? <LogoutButton /> : <LoginButton/>}
                    </div>
                </div>
            </header>
    )
}

export default Header