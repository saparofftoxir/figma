import React from 'react'

function Header() {
    return (
        <header className='w-5/6 h-12 m-auto py-14 flex items-center  bg-gray-'>
            <ul className='container flex items-center justify-between'>
                <div className='flex items-center gap-x-3'>
                    <img className='w-10 h-10 cursor-pointer' src="./src/assets/logo.svg" alt="" />
                    <h1 className='text-white text-3xl cursor-pointer font-bold'>Marico</h1>
                </div>
                <li>
                    <div className='flex gap-7 justify-center  items-center'>
                        <li className='flex cursor-pointer text-gray-400 hover:text-blue-500 transition items-center gap-2'>
                            Use Cases
                            <img src="./src/assets/Down_arrow.svg" alt="" />

                        </li> <li className='text-gray-400 hover:text-blue-500 transition cursor-pointer'>
                            About
                        </li> <li className='text-blue-500 cursor-pointer'>
                            Pricing
                        </li>
                        <li className='text-gray-400 cursor-pointer hover:text-blue-500 transition'>
                            Blog
                        </li>
                    </div>
                </li>
                <li>
                    <div className='flex  gap-4'>
                        <button className='text-base hover:text-blue-500 text-gray-400'>Login</button>
                        <button className='text-lg p-2 text-white bg-blue-700 hover:bg-blue-600 transition rounded w-28'>Sign Up</button>
                    </div>
                </li>
            </ul>
        </header>
    )
}

export default Header
