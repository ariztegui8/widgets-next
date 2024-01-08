import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-slate-500 flex justify-between items-center px-10 py-2'>
            <h1 className='text-xl font-bold text-white'>Navbar</h1>
            <div className='flex gap-3'>
                <Link href="/">
                    <button className='bg-gray-200 py-2 px-4 rounded-md'>Home</button>
                </Link>
                <Link href="/example">
                    <button className='bg-gray-200 py-2 px-4 rounded-md'>Example</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar