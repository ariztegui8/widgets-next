import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-gray-100 flex justify-between items-center px-10 py-2'>
            <h1 className='text-xl font-bold'>Navbar</h1>
            <div className='flex gap-3'>
                <Link href="/">
                    <button className='bg-blue-300 py-2 px-4 rounded-md'>Home</button>
                </Link>
                <Link href="/example">
                    <button className='bg-blue-300 py-2 px-4 rounded-md'>Example</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar