import React from 'react'
import { useSession } from 'next-auth/client';
import Image from "next/image";
import SidebarRow from '../components/SidebarRow'
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from "@heroicons/react/outline";
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
} from "@heroicons/react/solid";

function Sidebar() {
    const [session] = useSession();

    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            {/* <Image
                className="rounded-full cursor-pointer"
                src={session.user.image}
                width={40} height={40} layout="fixed"
            />
            <p className="whitespace-nowrap font-semibold pr-3">{session.user.name}</p> */}

            <SidebarRow src={session.user.image} title={session.user.name} />

            <SidebarRow Icon={UsersIcon} title="Vänner" />
            <SidebarRow Icon={UserGroupIcon} title="Grupper" />
            <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
            <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
            <SidebarRow Icon={CalendarIcon} title="Evenemang" />
            <SidebarRow Icon={ClockIcon} title="Minne" />
            <SidebarRow Icon={ChevronDownIcon} title="Visa mer" />

        </div>
    )
}

export default Sidebar
