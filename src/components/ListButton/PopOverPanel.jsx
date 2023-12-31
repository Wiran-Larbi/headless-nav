import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ListCard } from './ListCard'
import { solutions } from './assets'
import { ListCardLast } from './ListCardLast'

import background from '../../../public/gif/ezgif.com-video-to-gif.gif';

export function PopOverPanel() {


    return (
        <>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute lg:left-96 sm:left-full z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl ">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                            {
                                solutions.map((item) => (
                                    <ListCard item={item} />
                                ))}
                        </div>
                        <div className="bg-gray-50 p-4"
                            style={{
                                backgroundImage: "url(" + background + ")",
                                backgroundSize: "cover",
                            }}>
                            <ListCardLast />
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </>
    )
}