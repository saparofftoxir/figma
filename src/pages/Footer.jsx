import React from 'react'

function Footer() {
    return (
        <footer className='container px-20 mt-[800px] pb-2'>
            <div className='flex items-center justify-center flex-col gap-y-3'>
                <img src="./src/assets/footer_logo.svg" alt="" />
                <h1 className='text-white font-bold text-5xl'>Get Started Now</h1>
                <h3 className='text-white text-2xl'>Setup is easy and takes under 5 minutes.</h3>
                <button className='p-2 rounded bg-blue-700 hover:bg-blue-600 transition text-white w-56'>Get Started Now</button>
                <div className='flex items-center gap-2'>
                    <img src="./src/assets/Dot.svg" alt="" />
                    <h1 className='font-bold text-white'>1000+</h1>
                    <p className='text-xl text-gray-500'>creators have already started</p>
                </div>
            </div>
            <div className='w-full flex justify-between items-center h-14 mb-20 bg-cyan- mt-20'>
                <div className='flex flex-col gap-y-1'>
                    <div className='flex items-center gap-2'>
                        <img className='w-8 h-8' src="./src/assets/logo.svg" alt="" />
                        <h1 className='font-bold text-white text-2xl'>Marico</h1>
                    </div>
                    <p className=' text-gray-600'>info@marico.co</p>
                </div>
                <div className='flex'>
                    <ul className='text-gray-600 flex items-center gap-x-7'>
                        <li className='hover:text-blue-600 transition'>
                            About
                        </li>
                        <li className='hover:text-blue-600 transition'>
                            Pricing
                        </li>
                        <li className='hover:text-blue-600 transition'>
                            Blog
                        </li>
                        <li className='hover:text-blue-600 transition'>
                            Sign in
                        </li>
                    </ul>

                </div>
            </div>
        </footer>
    )
}

export default Footer
