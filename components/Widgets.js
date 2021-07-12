import React from 'react'
import { SearchIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Contact from './Contact';
const contacts = [{
    name: "Scarlett Johansson",
    src: "https://bit.ly/3rgp2NP",
}, {
    name: "Mario Bross",
    src: "https://bit.ly/3xzwOVj",
}, {
    name: "Rocky Balboa",
    src: "https://bit.ly/3e8RStM",
}, {
    name: "Terminator T-1000",
    src: "https://bit.ly/2VA0weD",
}, {
    name: "Wonder Woman",
    src: "https://bit.ly/3yI4boS",
}]

function Widgets() {
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <SearchIcon className="h-6" />"
                    <DotsHorizontalIcon className="h-6" />

                </div>
            </div>
            {contacts.map(contact => (
                <Contact
                    key={contact.src}
                    src={contact.src}
                    name={contact.name}
                />
            ))}
        </div>
    )
}

export default Widgets
