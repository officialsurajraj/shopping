import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
                <div>
                    {/* <img src={assets.logo} className='mb-5 w-32' /> */}
                    <Link to={'/'}>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-black text-white font-bold text-1xl flex items-center justify-center rounded-full">M</div>
                            <h1 className="text-2xl font-serif tracking-widest text-gray-800 uppercase">MEMORABLE</h1>
                        </div>
                    </Link>
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quae, fuga sit ipsam et ullam ab sapiente veritatis cupiditate quaerat!
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+91-XXXXXXXXXX</li>
                        <li>contact@@memorable.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025@memorable.com - All right Reverved</p>
            </div>
        </div>
    )
}

export default Footer