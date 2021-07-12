import React from 'react';
import Image from "next/image";
import HeaderIcon from "./HeaderIcon"
import { useSession, signOut } from 'next-auth/client';
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
    LogoutIcon,

} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header(props) {
    const [session] = useSession();
    return (
        <div className="sticky top-0 bg-white flex items-center p-2 lg:px-5 shadow-md">
            {/* left */}
            <div className="flex items-center">
                <Image src="https://links.papareact.com/5me" width={40} height={40} layout="fixed" />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600" />
                    <input className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink" type="text" placeholder="Sök" />
                </div>
            </div>
            {/* center */}
            <div className="flex justify-center flex-grow">
                <div className="flex">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            {/* right  */}
            <div className="flex items-center sm:space-x-2 justify-end">
                {/* profile pic */}
                <Image
                    className="rounded-full cursor-pointer"
                    src={session.user.image}
                    width={40} height={40} layout="fixed"
                />

                <p className="whitespace-nowrap font-semibold pr-3">{session.user.name}</p>
                <ViewGridIcon className="iconsRight" />
                <BellIcon className="iconsRight" />
                <ChatIcon className="iconsRight" />
                <ChevronDownIcon className="iconsRight" />
                <LogoutIcon className="iconsRight" onClick={signOut} />
            </div>
        </div>
    );
}

export default Header;