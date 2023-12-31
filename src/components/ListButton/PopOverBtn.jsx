import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export function PopOverBtn({ open, children }) {


    return (
        <>
            <Popover.Button className={`
                ${open ? 'text-cyan-500' : 'text-opacity-90 text-cyan-700'}
                group inline-flex items-center pl-3 py-2 text-lg sm:text-base
                 font-medium  hover:text-opacity-100 focus:outline-none
                `}>
                {children}
                <ChevronDownIcon className={
                    `${open ? 'text-cyan-500' : 'text-opacity-70 text-cyan-800'}
                ml-2 h-5 w-5  transition duration-150 ease-in-out group-hover:text-opacity-80
                `}
                    aria-hidden="true" />
            </Popover.Button>
        </>
    )
}