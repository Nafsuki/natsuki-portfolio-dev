import { Fragment, useState, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MoonIcon, MenuIcon, XIcon, SunIcon, } from '@heroicons/react/outline'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isDarkMode, setIsDarkMode] = useState(false)
  const {pathname} = useRouter()

  const navigation = [
    { name: 'Home', href: '/', current: false},
    { name: 'About', href: '/about', current: false },
    { name: 'Projects', href: '/projects', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ]

  const modeChange = () => {
    setIsDarkMode(!isDarkMode)
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Disclosure as="nav" className="w-screen bg-[#F6AFBE] dark:bg-black">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-[90px]">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-indigo-900 rounded-md dark:text-gray-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="flex items-center flex-shrink-0">
                  <div className='flex items-center justify-center w-24 mx-3 bg-[#F6AFBE] rounded-lg dark:bg-black'>
                    <Image
                    src='/logo.svg'
                    alt='Natsuki Logo'
                    // layout='fill'
                    // objectFit='contain'
                    width={60}
                    height={60}
                    />
                  </div>
                  {/* <img
                    className="block w-auto h-8 lg:hidden"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden w-auto h-8 lg:block"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  /> */}
                </div>

                <div className="items-center hidden sm:flex sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          (pathname === item.href) ? 'bg-pink-700 text-white' : 'text-indigo-900 dark:text-gray-300 dark:hover:bg-indigo-900 dark:hover:text-white hover:bg-[#F6AFBE] hover:text-white transition-colors',
                          'cursor-pointer px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>



              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  onClick={modeChange}
                  type="button"
                  className="p-3 text-indigo-900 transition-colors bg-transparent rounded-full hover:text-white dark:text-gray-400 dark:hover:text-white focus:outline-none"
                >
                  <span className="sr-only">Mode Change</span>
                  {!isDarkMode ? <MoonIcon className="w-6 h-6" aria-hidden="true" /> : <SunIcon className="w-6 h-6" aria-hidden="true" />}

                </button>

                {/* Profile dropdown */}
                {/* <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <div className='flex items-center justify-center overflow-hidden rounded-full'>
                      <Image
                        // className="w-8 h-8 rounded-full"
                        width={32}
                        height={32}
                        src='/images/profile.jpg'
                        alt="avatar"
                      />
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  > */}
                    {/* <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"> */}
                      {/* <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item> */}
                      {/* <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item> */}
                    {/* </Menu.Items> */}
                  {/* </Transition>
                </Menu> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-indigo-900 dark:text-gray-300 hover:bg-indigo-600 hover:text-white dark:hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
